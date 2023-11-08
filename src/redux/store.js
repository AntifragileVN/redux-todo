import { configureStore } from '@reduxjs/toolkit';
import { tasksReducer } from './taskSlice';
import { filtersReducer } from './filtersSlice';
// import { tasksReducer, filtersReducer } from './reducer';

export const store = configureStore({
	reducer: {
		tasks: tasksReducer,
		filters: filtersReducer,
	},
});
