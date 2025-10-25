import { useState, type FC } from "react";

export const ActComponent: FC = () => {
	const [loading, setLoading] = useState(true);

	const handleLoadData = () => {
		setTimeout(() => {
			setLoading(false);
		}, 10000);
	};

	return (
		<div>
			<h1>ActComponent</h1>
			{loading ? <p>Loading...</p> : <p>Data Loaded!</p>}
			<button onClick={handleLoadData}>Load Data</button>
		</div>
	);
};
