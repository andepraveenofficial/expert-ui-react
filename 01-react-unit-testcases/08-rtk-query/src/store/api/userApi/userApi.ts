import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface IUser {
	id: number;
	name: string;
	email: string;
}

// Create the API slice
export const userApi = createApi({
	reducerPath: "userApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://jsonplaceholder.typicode.com",
	}),
	endpoints: (builder) => ({
		// GET /users
		getUsers: builder.query<IUser[], void>({
			query: () => "/users",
		}),
	}),
});

// Export auto-generated hooks
export const { useGetUsersQuery } = userApi;
