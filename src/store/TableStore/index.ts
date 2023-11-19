import { createSlice } from '@reduxjs/toolkit';

const TableSlice = createSlice({
	name: 'table',
	initialState: {
		data: []
	},
	reducers: {
		removeTask: (state, { payload }) => {
			event.target.parentNode.parentNode.remove();
		},
		checkTask: (state, { payload }) => {
		       	const task_td_parent = event.target.parentNode.parentNode;
	                const task_td = task_td_parent.children[1];
	                const task_td_innerHTML = task_td.innerHTML;
        	        if (task_td_innerHTML.includes('<s>')) task_td.innerHTML = task_td_innerHTML.replace('<s>', '');
                	else task_td.innerHTML = `<s>${task_td_innerHTML}</s>`;
		}
		
	}
})

export const { removeTask, checkTask } = TableSlice.actions;
export default TableSlice.reducer;
