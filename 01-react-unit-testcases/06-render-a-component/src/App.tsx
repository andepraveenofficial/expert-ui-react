import type { FC } from "react";
import { NormalComponent } from "./components/NormalComponent";
import { NestedComponent } from "./components/NestedComponent/NestedComponent";
import { PropsComponent } from "./components/PropsComponent/PropsComponent";

const App: FC = () => {
	return (
		<div>
			<h1>I am App Component</h1>
			<hr />
			<NormalComponent />
			<NestedComponent />
			<PropsComponent title='Title' paragraph='I am paragraph' />
		</div>
	);
};

export default App;
