import { render, screen } from "@testing-library/react";
import { Card } from "./Card";

// Normal test case to verify testing setup
it("adds 1 + 2 to equal 3", () => {
	expect(1 + 2).toBe(3);
	expect(true).toBe(true);
});

it("renders Card component correctly", () => {
	render(<Card />);
	screen.debug();
	expect(screen.getByText("I am Card Component")).toBeInTheDocument();
});
