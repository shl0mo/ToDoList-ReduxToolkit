import { useDispatch, useSelector } from 'react-redux';

import Button from '../Button';
import Icon from '../Icon';

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
		<table style={tableStyle}>
			<tbody style={{width: '100%'}}>
				{props.data.map((task, index) => {
					return (
						<>
						<tr key={`task-row-margintop-tr-${index}`}>
							<td colSpan={3} key={`td-margin-top-tr-${index}`}>
								<div key={`margin-top-tr-${index}`}style={{marginBottom: '5px'}}></div>
							</td>
						</tr>
						<tr id={`task-row-${index}`} key={`task-row-${index}`}>
							<td key={`task-name-${index}`} style={{width: '80%', textAlign: 'left', paddingLeft: '15px'}}>
								{task.task_name}
							</td>
							<td key={`task-checkbox-${index}`} style={iconTdStyle}>
								<Icon src={'https://img.icons8.com/?size=256&id=63262&format=png'} key={`check-button-${index}`} onClick={() => dispatch(checkTask())}/>
							</td>
							<td key={`task-delete-button-${index}`} style={{...iconTdStyle, paddingRight: '15px'}}>
								<Icon src={'https://img.icons8.com/?size=256&id=11997&format=png'} key={`remove-button-${index}`} onClick={() => {
	dispatch(removeTask())
	props.setTasks(store.getState().table.data)
}}/>
							</td>
						</tr>
						<tr key={`task-row-underline-${index}`}>
							<td colSpan={3} key={`td-underline-${index}`}>
								<div key={`underline-${index}`}style={{width: '100%', height: '1px', backgroundColor: 'rgba(0,0,0,0.2)', marginTop: '5px'}}></div>
							</td>
						</tr>
						</>
					);
				})}
			</tbody>
		</table>
	);
}

const tableStyle = {
	display: 'flex',
	alginItems: 'center',
	justifyContent: 'center',
	backgroundColor: 'rgba(0,0,0,0.025)',
}

const iconTdStyle = {
	width: '20%',
	position: 'relative',
	padding: '0px'
}
