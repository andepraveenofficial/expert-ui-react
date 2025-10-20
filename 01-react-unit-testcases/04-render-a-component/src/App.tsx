import type { FC } from "react";
import { NormalComponent } from "./components/NormalComponent";

const App: FC = () => {
	return (
		<div>
			<h1>I am App Component</h1>
			<hr />
			<NormalComponent />
		</div>
	);
};

export default App;
