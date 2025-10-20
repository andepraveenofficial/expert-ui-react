import { render, screen } from "@testing-library/react";
import { NestedComponent } from "./NestedComponent";

describe("NestedComponent", () => {
	it("should render NestedComponent correctly", () => {
		const { container } = render(<NestedComponent />);
		const firstChild = container.firstChild as HTMLElement;
		screen.debug(firstChild);
		expect(firstChild).toBeTruthy();
	});

	it("should render two NormalComponent inside NestedComponent", () => {
		const { container } = render(<NestedComponent />);
		const firstChild = container.firstChild as HTMLElement;
		console.log(firstChild.getAttribute("data-testid")); // "nested-component"
		expect(firstChild.getAttribute("data-testid")).toBe("nested-component");
		const componentByTestId = screen.getByTestId("nested-component");
		expect(componentByTestId).toBeInTheDocument();
		const normalComponents = screen.getAllByTestId("normal-component");
		expect(normalComponents.length).toBe(2);
	});
});
