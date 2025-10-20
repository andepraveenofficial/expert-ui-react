import { createSlice } from "@reduxjs/toolkit";

interface CounterState {
	value: number;
}

const initialState: CounterState = {
	value: 0,
};

const counterSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		increment: (state) => {
			state.value += 1;
		},
		decrement: (state) => {
			state.value -= 1;
		},
	},
});

// Export actions to use in components
export const { increment, decrement } = counterSlice.actions;

// Export reducer to configure store
export const counterReducer = counterSlice.reducer;
