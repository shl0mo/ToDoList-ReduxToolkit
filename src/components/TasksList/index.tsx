import { useState } from 'react';

import Button from '../Button';
import Table from '../Table';


interface ITask {
	task_name: string;
}

export default function TasksList () {	
	const [taskName, setTaskName] = useState<string>('');
	const [tasks, setTasks] = useState<ITask[]>([]);
		
	function addTask () {
		if (taskName === '') {
			alert('Preencha o nome da tarefa');
			return;
		}
		const new_task = {
			task_name: taskName
		}
		setTasks([...tasks, new_task]);
	}

	function updateTaskName () {
		const updated_task_name = event.target.value;
		setTaskName(updated_task_name);
	}

	function handleEnter (event) {
		if (event.key === 'Enter') addTask();
	}
	
	return (
		<>
			<div style={{display: 'flex'}}>
				<input onChange={updateTaskName} onKeyPress={handleEnter}/><Button onClick={addTask} onKeyPress={handleEnter} label={'Save'} background_color={'green'} color={'white'} borderRadius={'0px 5px 5px 0px'}/>
			</div>
			<Table data={tasks}/>
		</>
	)
}
