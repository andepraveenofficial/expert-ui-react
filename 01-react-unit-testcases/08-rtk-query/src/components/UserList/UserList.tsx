import type { FC } from "react";
import { useGetUsersQuery } from "../../store";

export const UserList: FC = () => {
	const { data: users, isLoading, error } = useGetUsersQuery();

	if (isLoading) return <p>Loading...</p>;
	if (error) return <p>Error fetching users</p>;

	return (
		<ul>
			{users?.map((user) => (
				<li key={user.id}>
					<strong>{user.name}</strong> — {user.email}
				</li>
			))}
		</ul>
	);
};
