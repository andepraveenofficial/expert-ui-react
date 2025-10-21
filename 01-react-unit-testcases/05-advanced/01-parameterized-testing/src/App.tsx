import type { FC } from "react";
import { PropsComponent } from "./components/PropsComponent/PropsComponent";

const App: FC = () => {
	return (
		<div>
			<h1>I am App Component</h1>
			<hr />
			<PropsComponent title='Title' paragraph='I am paragraph' />
		</div>
	);
};

export default App;
