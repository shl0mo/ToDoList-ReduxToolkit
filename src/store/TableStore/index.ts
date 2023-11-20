import { createSlice } from '@reduxjs/toolkit';


const TableSlice = createSlice({
	name: 'table',
	initialState: {
		taskName: '',
		data: [],
		history: [],
		namesCheckeds: []
	},
	reducers: {
		removeTask: (state) => {
			const delete_button = event.target;
			const tr = delete_button.parentNode.parentNode;
			const tr_id = parseInt(tr.id.split('-')[2]);
			state.data.splice(tr_id, 1);
			for (let i = 0; i < state.data.length; i++) {
				const current_tr = document.querySelector(`#task-row-${i}`);
				const current_check_button = current_tr.children[1].children[0];
				if (current_check_button) current_check_button.style.setProperty('display', 'block');
			}
		},
		keepChecked: (state) => {
			for (let i = 0; i < state.data.length; i++) {
				const current_tr = document.querySelector(`#task-row-${i}`);
				const current_task_name = current_tr.children[0].innerText;
				for (let j = 0; j < state.namesCheckeds.length; j++) {
					if (state.namesCheckeds[j] === current_task_name) {
						current_tr.children[0].innerHTML = `<s>${current_task_name}</s>`;
					}
				}
			}
		},
		checkTask: (state) => {
			const check_button = event.target;
		       	const task_td_parent = check_button.parentNode.parentNode;
			const task_td = task_td_parent.children[0];
			const task_td_innerHTML = task_td.innerHTML;
			const check_input = task_td_parent.children[1].children[0];
			check_input.checked = true;
			const task_name = task_td.innerHTML;
			task_td.innerHTML = `<s>${task_td_innerHTML}</s>`;
			state.history = [
				...state.history,
				{
					task_name: task_name,
					finish_time: Date()
				}
			];
			state.namesCheckeds = [
				...state.namesCheckeds,
				task_name
			]
			console.log(state.history);
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

export const { removeTask, checkTask, addTask, updateTaskName, handleEnter, keepChecked } = TableSlice.actions;
export default TableSlice.reducer;
