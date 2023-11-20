import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../Button';
import Table from '../Table';


import { addTask, updateTaskName, handleEnter } from '../../store/TableStore';
import store from '../../store';


interface ITask {
	task_name: string;
}

export default function TasksList () {
	const dispatch = useDispatch();
	const [tasks, setTasks] = useState<ITask[]>([]);
		
	return (
		<>
			<div style={{display: 'flex'}}>
				<input onChange={() => dispatch(updateTaskName())} onKeyPress={() => {
	dispatch(handleEnter())
	setTasks(store.getState().table.data)
}}/><Button onClick={() => {
			dispatch(addTask())
			setTasks(store.getState().table.data)
}} label={'Save'} background_color={'green'} color={'white'} borderRadius={'0px 5px 5px 0px'}/>
			</div>
			<Table data={tasks} setTasks={setTasks}/>
		</>
	)
}
