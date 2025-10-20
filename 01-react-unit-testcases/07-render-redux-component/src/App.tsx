import type { FC } from "react";
import { Counter } from "./components/Counter";
import { Provider } from "react-redux";
import { store } from "./store";

const App: FC = () => {
	return (
		<Provider store={store}>
		<div>
			<h1>I am App Component</h1>
			<hr />
			<Counter />
		</div>
		</Provider>
	);
};

export default App;
