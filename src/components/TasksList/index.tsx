import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../Button';
import Table from '../Table';


import { addTask, updateTaskName, handleEnter, keepChecked } from '../../store/TableStore';
import store from '../../store';


interface ITask {
	task_name: string;
}

export default function TasksList () {
	const dispatch = useDispatch();
	const [tasks, setTasks] = useState<ITask[]>([]);
	
	useEffect(() => {
		dispatch(keepChecked());
	}, [tasks])
		
	return (
		<div style={{position: 'relative', width: '100%'}}>
			<div style={{display: 'flex'}}>
				<input placeholder={"Enter Something"} style={inputStyle} onChange={() => dispatch(updateTaskName())} onKeyPress={() => {
	dispatch(handleEnter())
	setTasks(store.getState().table.data)
}}/><Button onClick={() => {
			dispatch(addTask())
			setTasks(store.getState().table.data)
}} label={'Add'} background_color={'green'} color={'white'} borderRadius={'0px 5px 5px 0px'}/>
			</div>
			<Table data={tasks} setTasks={setTasks}/>
		</div>
	)
}


const inputStyle = {
	border: "1px solid rgba(0,0,0,0.25)",
	width: '100%',
	padding: '10px',
	borderRadius: '3px 0px 0px 3px'
}
