import { FireEventComponent } from "./FireEventComponent";
import { screen, render, fireEvent, waitFor } from "@testing-library/react";

describe("WaitFor", () => {
	it("should render correctly", () => {
		const { container } = render(<FireEventComponent />);
		expect(container).toBeTruthy();
	});

	it("should display loading state initially", async () => {
		render(<FireEventComponent />);
		expect(screen.getByText("Loading...")).toBeTruthy();
	});

	it("should display loaded state after button click use timeout", async () => {
		render(<FireEventComponent />);
		const LoadDataButton = screen.getByRole("button", { name: "Load Data" });

		fireEvent.click(LoadDataButton);

		// use timeout
		await waitFor(
			() => {
				const DataLoadedText = screen.getByText("Data Loaded!");
				expect(DataLoadedText).toBeInTheDocument();
			},
			{ timeout: 3000 }
		);
	});
});
