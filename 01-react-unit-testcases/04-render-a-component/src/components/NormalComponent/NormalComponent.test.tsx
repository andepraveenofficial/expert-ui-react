import { logRoles, render, screen } from "@testing-library/react";
import { NormalComponent } from "./NormalComponent";

describe("NormalComponent", () => {
	it("should render NormalComponent correctly", () => {
		const { container } = render(<NormalComponent />);
		screen.debug(container);

		const firstChild = container.firstChild as HTMLElement;
		expect(firstChild).toBeTruthy();
	});

	it("should have render correctly checking with testId", () => {
		const { container } = render(<NormalComponent />);
		const firstChild = container.firstChild as HTMLElement;
		screen.debug(firstChild);
		console.log(firstChild.getAttribute("data-testid"));
		expect(firstChild.getAttribute("data-testid")).toBe("normal-component");
		const componentByTestId = screen.getByTestId("normal-component");
		expect(componentByTestId).toBeInTheDocument();
	});

	it("should have render correctly checking with roles", () => {
		const { container } = render(<NormalComponent />);
		const firstChild = container.firstChild as HTMLElement;
		logRoles(firstChild);

		// Heading
		const headingElement = screen.getByRole("heading");
		expect(headingElement).toBeInTheDocument();
		expect(headingElement).toHaveTextContent("I am NormalComponent");

		const headingElementWithRoleAndName = screen.getByRole("heading", {
			name: "I am NormalComponent",
		});
		expect(headingElementWithRoleAndName).toBeInTheDocument();

		// Button
		const buttonElement = screen.getByRole("button");
		expect(buttonElement).toBeInTheDocument();
		expect(buttonElement).toHaveTextContent("Click Me");

		const buttonElementWithRoleAndName = screen.getByRole("button", {
			name: "Click Me",
		});
		expect(buttonElementWithRoleAndName).toBeInTheDocument();
	});
});
