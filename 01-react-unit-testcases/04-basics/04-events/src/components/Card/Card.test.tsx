import { fireEvent, logRoles, render, screen } from "@testing-library/react";
import { Card } from "./Card";

describe("Card", () => {
	it("should render correctly", () => {
		render(<Card />);
		const cardElement = screen.getByTestId("card");
		expect(cardElement).toBeInTheDocument();
	});

	it("form submission works correctly", () => {
		// mock console.log
		const consoleSpy = vi.spyOn(console, "log");

		const { container } = render(<Card />);
		const firstChild = container.firstChild as HTMLElement;
		logRoles(firstChild);

		const textbox = screen.getByRole("textbox", { name: /name/i });
		fireEvent.change(textbox, { target: { value: "Ande Praveen" } });
		expect(textbox).toHaveValue("Ande Praveen");

		const submitButton = screen.getByRole("button", { name: /submit/i });
		fireEvent.click(submitButton);

		expect(consoleSpy).toHaveBeenCalledWith("Form Submitted");
	});
});
