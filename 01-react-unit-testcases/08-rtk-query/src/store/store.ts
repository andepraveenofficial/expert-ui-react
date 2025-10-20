import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "./api/userApi/userApi";

export const store = configureStore({
	reducer: {
		[userApi.reducerPath]: userApi.reducer,
	},

	// Add the RTK Query middleware
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(userApi.middleware),
});

// TypeScript types (optional but recommended)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
