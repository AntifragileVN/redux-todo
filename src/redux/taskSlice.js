import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const tasksInitialState = [];

const taskSlice = createSlice({
	name: 'tasks',
	initialState: tasksInitialState,
	reducers: {
		addTask: {
			reducer(state, action) {
				state.push(action.payload);
			},
			prepare(text) {
				return {
					payload: {
						text,
						id: nanoid(),
						completed: false,
					},
				};
			},
		},
		deleteTask(state, action) {
			return state.filter((task) => task.id !== action.payload);
		},
		toggleCompleted(state, action) {
			for (const task of state) {
				if (task.id === action.payload) {
					task.completed = !task.completed;
					break;
				}
			}
		},
		clearTask() {
			return tasksInitialState;
		},
	},
});

export const { addTask, deleteTask, toggleCompleted, clearTask } = taskSlice.actions;
export const tasksReducer = taskSlice.reducer;
