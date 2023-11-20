import { Provider } from 'react-redux';
import Container from "react-bootstrap/Container";

import TasksList from './components/TasksList';
import Title from './components/Title';

import store from './store';


import './App.css';

function App() {
  return (
	<Provider store={store}>
		<Container style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
			<Title title={'React Todo App'}/>
			<TasksList/>
		</Container>
	</Provider>
  )
}

export default App
