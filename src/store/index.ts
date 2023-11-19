import { configureStore } from '@reduxjs/toolkit';
import TableReducer from './TableStore'; 

export const store =  configureStore({
	reducer: {
		table: TableReducer
	}
});

export const RootState = store.getState();
export default store;
