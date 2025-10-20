import { render, screen } from "@testing-library/react";
import { PropsComponent } from "./PropsComponent";

const componentParameters = [
	{
		input: { title: "Test Title 1", paragraph: "Test Paragraph 1" },
		expected: { title: "Test Title 1", paragraph: "Test Paragraph 1" },
	},
	{
		input: { title: "Test Title 2", paragraph: "Test Paragraph 2" },
		expected: { title: "Test Title 2", paragraph: "Test Paragraph 2" },
	},
];
describe("PropsComponent", () => {
	it("should render correctly", () => {
		const { container } = render(
			<PropsComponent title='Test Title' paragraph='Test Paragraph' />
		);
		const firstChild = container.firstChild as HTMLElement;
		expect(firstChild).toBeTruthy();
	});

	it.each(componentParameters)(
		"should render correctly with props",
		({ input, expected }) => {
			render(
				<PropsComponent title={input.title} paragraph={input.paragraph} />
			);

			expect(screen.getByText(expected.title)).toBeInTheDocument();
			expect(screen.getByText(expected.paragraph)).toBeInTheDocument();
		}
	);
});
