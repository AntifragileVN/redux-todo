import { createSlice } from '@reduxjs/toolkit';
import { statusFilters } from './constants';

const filterInitialState = {
	status: statusFilters.all,
};

const filtersSlice = createSlice({
	name: 'filters',
	initialState: filterInitialState,
	reducers: {
		setStatusFilter(state, action) {
			state.status = action.payload;
		},

		clearFilters() {
			return filterInitialState;
		},
	},
});

export const { setStatusFilter, clearFilters } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
