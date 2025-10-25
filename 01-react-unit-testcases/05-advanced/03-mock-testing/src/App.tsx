import type { FC } from "react";
import { FunctionComponent } from "./components/FunctionComponent";
import { SpyOnComponent } from "./components/SpyOnComponent";
import { MockComponent } from "./components/MockComponent";
import { MockImplementationComponent } from "./components/MockImplementation";
import { ResetComponent } from "./components/ResetComponent";

const App: FC = () => {
	return (
		<div>
			<h1>I am App Component</h1>
			<hr />
			<FunctionComponent onClick={() => {}} />
			<hr />
			<SpyOnComponent />
			<hr />
			<MockComponent />
			<hr />
			<MockImplementationComponent />
			<hr />
			<ResetComponent />
		</div>
	);
};

export default App;
