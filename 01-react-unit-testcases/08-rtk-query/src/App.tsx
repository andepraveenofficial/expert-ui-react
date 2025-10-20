import type { FC } from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { UserList } from "./components/UserList";

const App: FC = () => {
	return (
		<Provider store={store}>
			<div>
				<h1>I am App Component</h1>
				<hr />
				<UserList />
			</div>
		</Provider>
	);
};

export default App;
