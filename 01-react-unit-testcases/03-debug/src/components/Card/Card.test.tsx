import { logRoles, prettyDOM, render, screen } from "@testing-library/react";
import { Card } from "./Card";

describe("Card", () => {
	it("should render correctly", () => {
		// 01 render
		render(<Card />);

		// 02 assertion
		const cardElement = screen.getByTestId("card");

		// 03 validation
		expect(cardElement).toBeInTheDocument();
	});

	it("print entire DOM", () => {
		// 01 render
		render(<Card />);

		// print entire DOM
		screen.debug();
	});

	it("print specific element", () => {
		// 01 render
		render(<Card />);

		// 02 assertion
		const cardElement = screen.getByText("Card");

		// print specific element
		screen.debug(cardElement);
	});

	it("print with prettier", () => {
		// 01 render
		render(<Card />);

		// 02 assertion
		const component = screen.getByTestId("card");

		// print entire DOM with prettier
		console.log(prettyDOM(component));
	});

	it("print container", () => {
		// 01 render
		const { container } = render(<Card />);

		// print container
		console.log(container.innerHTML);

		console.log("-----");

		// print container with prettier
		console.log(prettyDOM(container));
	});

	it("debug in testing playground", () => {
		// 01 render
		render(<Card />);

		// debug in testing playground
		screen.logTestingPlaygroundURL();
	});

	it("logRoles", () => {
		// 01 render
		const { container } = render(<Card />);

		// log roles
		logRoles(container);
	});
});
