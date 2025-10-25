import { useState, type FC } from "react";

export const WaitForComponent: FC = () => {
	const [loading, setLoading] = useState(true);

	const handleLoadData = () => {
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	};

	return (
		<div>
			<h1>WaitForComponent</h1>
			{loading ? <p>Loading...</p> : <p>Data Loaded!</p>}
			<button onClick={handleLoadData}>Load Data</button>
		</div>
	);
};
