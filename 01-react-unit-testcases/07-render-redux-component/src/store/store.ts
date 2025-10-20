import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./slices";

export const store = configureStore({
	reducer: {
		counter: counterReducer,
	},
});

// TypeScript types (optional but recommended)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
