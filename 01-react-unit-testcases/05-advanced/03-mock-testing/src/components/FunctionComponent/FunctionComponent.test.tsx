import { FunctionComponent } from "./FunctionComponent";
import { fireEvent, render, screen } from "@testing-library/react";

describe("FunctionComponent", () => {
	it("should render correctly", () => {
		const { container } = render(<FunctionComponent onClick={() => {}} />);
		expect(container).toBeTruthy();
	});

	it("calls onClick when button is clicked", () => {
		// Create a mock function
		const handleClick = vi.fn();

		// Render component with mock function as prop
		render(<FunctionComponent onClick={handleClick} />);

		const button = screen.getByTestId("mock-button");

		// Simulate click
		fireEvent.click(button);

		//  Assert the mock was called
		expect(handleClick).toHaveBeenCalledTimes(1);
	});

	it("calls onClick when button is clicked with return", () => {
		// Create a mock function
		const handleClick = vi.fn(() => "Hello World");

		// Render component with mock function as prop
		render(<FunctionComponent onClick={handleClick} />);

		const button = screen.getByTestId("mock-button");

		// Simulate click
		fireEvent.click(button);

		//  Assert the mock was called
		expect(handleClick).toHaveBeenCalledTimes(1);
		expect(handleClick).toHaveReturnedWith("Hello World");
	});
});
