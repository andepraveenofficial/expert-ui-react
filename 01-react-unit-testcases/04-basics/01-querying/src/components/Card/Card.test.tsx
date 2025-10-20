import { render, screen } from "@testing-library/react";
import { Card } from "./Card";

describe("Card", () => {
	it("should render correctly", () => {
		render(<Card />);
		const cardElement = screen.getByTestId("card");
		expect(cardElement).toBeInTheDocument();
	});

	it("query types example", async () => {
		render(<Card />);

		// getBy
		const getByCard = screen.getByTestId("card");
		expect(getByCard).toBeInTheDocument();

		// queryBy
		const queryByCard = screen.queryByTestId("card");
		expect(queryByCard).toBeInTheDocument();

		// findBy
		const findByCard = await screen.findByTestId("card");
		expect(findByCard).toBeInTheDocument();
	});
});
