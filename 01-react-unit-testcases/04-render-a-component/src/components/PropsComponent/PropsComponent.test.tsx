import { render, screen } from "@testing-library/react";
import { PropsComponent } from "./PropsComponent";

describe("PropsComponent", () => {
	it("should render correctly", () => {
		const { container } = render(
			<PropsComponent title='Test Title' paragraph='Test Paragraph' />
		);
		const firstChild = container.firstChild as HTMLElement;
		expect(firstChild).toBeTruthy();
	});

	it("should render correctly with props", () => {
		render(<PropsComponent title='Test Title' paragraph='Test Paragraph' />);

		expect(screen.getByText("Test Title")).toBeInTheDocument();
		expect(screen.getByText("Test Paragraph")).toBeInTheDocument();
	});
});
