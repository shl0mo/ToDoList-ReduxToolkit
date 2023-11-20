import { useDispatch, useSelector } from 'react-redux';

import Button from '../Button';

import { removeTask, checkTask } from '../../store/TableStore';
import store from '../../store';


export interface TableColumn<T> {
	acessor?: keyof T;
	head: string;
}

interface TableProps<T> {
	data: T[];
	setTasks: Any;
}

export default function Table<T> (props: TableProps<T>) {
	const dispatch = useDispatch();
	
	return (
		<table style={{display: 'flex', alginItems: 'center', justifyContent: 'center'}}>
			<tbody>
				{props.data.map((task, index) => {
					return (
						<tr id={`task-row-${index}`}key={`task-row-${index}`}>
							<td key={`task-checkbox-${index}`}>
								<input onClick={() => dispatch(checkTask())} type={'checkbox'}/>
							</td>
							<td key={`task-name-${index}`}>
								{task.task_name}
							</td>
							<td key={`task-delete-button-${index}`}>
								<Button onClick={() => {
	dispatch(removeTask())
	props.setTasks(store.getState().table.data)
}} label={'remove'} background_color={'red'} color={'white'} borderRadius={'5px'}/>	
							</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}
