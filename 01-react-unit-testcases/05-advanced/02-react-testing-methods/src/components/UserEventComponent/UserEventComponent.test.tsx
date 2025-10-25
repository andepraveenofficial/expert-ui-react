import { UserEventComponent } from "./UserEventComponent";
import { screen, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("WaitFor", () => {
	it("should render correctly", () => {
		const { container } = render(<UserEventComponent />);
		expect(container).toBeTruthy();
	});

	it("should display loading state initially", async () => {
		render(<UserEventComponent />);
		expect(screen.getByText("Loading...")).toBeTruthy();
	});

	it("should display loaded state after button click use timeout", async () => {
		render(<UserEventComponent />);
		const LoadDataButton = screen.getByRole("button", { name: "Load Data" });

		const user = userEvent.setup();
		await user.click(LoadDataButton);

		await waitFor(
			() => {
				const DataLoadedText = screen.getByText("Data Loaded!");
				expect(DataLoadedText).toBeInTheDocument();
			},
			{
				timeout: 3000,
			}
		);
	});
});
