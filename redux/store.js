import { configureStore } from '@reduxjs/toolkit';
import todoListReducer from './reducers';

export default configureStore({
	reducer: {
		todolist: todoListReducer,
	},
});
