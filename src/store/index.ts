import { configureStore } from '@reduxjs/toolkit';
import TableReducer from './TableStore'; 

export default configureStore({
	reducer: {
		table: TableReducer
	}
});

// export type RootState = ReturnType<typeof store.getState>;
// export default store;
