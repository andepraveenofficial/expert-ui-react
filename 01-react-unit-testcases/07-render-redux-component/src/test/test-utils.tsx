import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../store";

export const renderWithRedux = (component: React.ReactElement) => {
	return render(<Provider store={store}>{component}</Provider>);
};
