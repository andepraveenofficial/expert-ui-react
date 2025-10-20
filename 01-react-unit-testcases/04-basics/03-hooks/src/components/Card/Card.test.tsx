import { render, screen } from "@testing-library/react";
import { Card } from "./Card";

describe("Card", () => {
	beforeAll(() => {
		console.log("*** Before All Testcases ***");
	});

	beforeEach(() => {
		console.log("*** Before Each Testcase ***");
	});

	afterAll(() => {
		console.log("*** After All Testcases ***");
	});

	afterEach(() => {
		console.log("*** After Each Testcase ***");
	});

	it("should render correctly", () => {
		render(<Card />);
		const cardElement = screen.getByTestId("card");
		expect(cardElement).toBeInTheDocument();
	});
});
