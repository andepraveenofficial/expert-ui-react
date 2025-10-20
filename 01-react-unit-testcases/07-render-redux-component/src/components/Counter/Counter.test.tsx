import { fireEvent, screen } from "@testing-library/react";
import { renderWithRedux } from "../../test/test-utils";
import { Counter } from "./Counter";

describe("Counter", () => {
	it("should render correctly", () => {
		const { container } = renderWithRedux(<Counter />);
		const firstChild = container.firstChild as HTMLElement;
		expect(firstChild).toBeTruthy();
	});

	it("should increment and decrement the counter value", () => {
		renderWithRedux(<Counter />);
		const incrementButton = screen.getByRole("button", { name: /increment/i });
		const decrementButton = screen.getByRole("button", { name: /decrement/i });

		fireEvent.click(incrementButton);
		expect(screen.getByText("Counter: 1")).toBeInTheDocument();

		fireEvent.click(incrementButton);
		expect(screen.getByText("Counter: 2")).toBeInTheDocument();

		fireEvent.click(decrementButton);
		expect(screen.getByText("Counter: 1")).toBeInTheDocument();

		fireEvent.click(decrementButton);
		expect(screen.getByText("Counter: 0")).toBeInTheDocument();
	});
});
