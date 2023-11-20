import { createSlice } from '@reduxjs/toolkit';


const TableSlice = createSlice({
	name: 'table',
	initialState: {
		taskName: '',
		data: []
	},
	reducers: {
		removeTask: (state) => {
			const tr = event.target.parentNode.parentNode;
			const check_input = tr.children[0].children[0];
			const trId = tr.id.split('-')[2];
			if (check_input.checked) check_input.checked = false;
			state.data.splice(trId, 1);
		},
		checkTask: (state) => {
		       	const task_td_parent = event.target.parentNode.parentNode;
			const check_input = task_td_parent.children[0].children[0];
			const checked = check_input.checked
	                const task_td = task_td_parent.children[1];
	                const task_td_innerHTML = task_td.innerHTML;
        	        if (!checked && task_td_innerHTML.includes('<s>')) task_td.innerHTML = task_td_innerHTML.replace('<s>', '');
                	else if (checked && !task_td_innerHTML.includes('<s>')) task_td.innerHTML = `<s>${task_td_innerHTML}</s>`;
		},
		addTask: (state) => {
			if (state.taskName === '') {
	                        alert('Preencha o nome da tarefa');
        	                return;
                	}
	                const new_task = {
        	                task_name: state.taskName
                	}
	                state.data = [...state.data, new_task];
		},
		updateTaskName: (state) => {
			const updated_task_name = event.target.value;
			state.taskName = updated_task_name;
		},
		handleEnter: (state) => {
			if (event.key === 'Enter') {
				if (state.taskName === '') {
	                        	alert('Preencha o nome da tarefa');
	        	                return;
        	        	}
	        	        const new_task = {
        	        	        task_name: state.taskName
	                	}
		                state.data = [...state.data, new_task];
			}
		}
				
	}
})

export const { removeTask, checkTask, addTask, updateTaskName, handleEnter } = TableSlice.actions;
export default TableSlice.reducer;
