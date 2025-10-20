import { render, screen } from "@testing-library/react";
import { Card } from "./Card";

describe("Card", () => {
	it("should render correctly", () => {
		render(<Card />);
		const cardElement = screen.getByTestId("card");
		expect(cardElement).toBeInTheDocument();
	});

	it("validation input field", async () => {
		render(<Card />);
		const inputElementByRole = screen.getByRole("textbox", { name: /name/i });
		expect(inputElementByRole).toBeInTheDocument();
		expect(inputElementByRole).toHaveAttribute("type", "text");
		expect(inputElementByRole).toHaveAttribute("name", "name");
		expect(inputElementByRole).toHaveAttribute("id", "name");
		expect(inputElementByRole).toHaveAttribute(
			"placeholder",
			"Enter Your Name"
		);
		expect(inputElementByRole).toBeEnabled();
		// expect(inputElementByRole).toBeDisabled();
	});
});
