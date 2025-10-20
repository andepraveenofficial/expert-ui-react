import type { FC } from "react";
import { Card } from "./components/Card/Card";

const App: FC = () => {
	return (
		<div>
			<h1>I am App Component</h1>
			<Card />
		</div>
	);
};

export default App;
