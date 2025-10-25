import { useEffect, useState } from "react";
import { getUser } from "./api";

export const MockComponent = () => {
	const [user, setUser] = useState<{ name: string } | null>(null);

	useEffect(() => {
		getUser(1).then((data) => setUser(data));
	}, []);

	if (!user) return <div>Loading...</div>;

	return <div data-testid='username'>{user.name}</div>;
};
