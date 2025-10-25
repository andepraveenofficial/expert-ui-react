import axios from "axios";

export const getUser = async (id: number) => {
	const response = await axios.get(
		`https://jsonplaceholder.typicode.com/users/${id}`
	);
	return response.data;
};
