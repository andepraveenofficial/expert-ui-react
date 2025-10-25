import type { FC } from "react";
import { WaitForComponent } from "./components/WaitForComponent";
import { ActComponent } from "./components/ActComponent";
import { FireEventComponent } from "./components/FireEventCompoennt";
import { UserEventComponent } from "./components/UserEventComponent";

const App: FC = () => {
	return (
		<div>
			<h1>I am App Component</h1>
			<hr />
			<WaitForComponent />
			<ActComponent />
			<FireEventComponent />
			<UserEventComponent />
		</div>
	);
};

export default App;
