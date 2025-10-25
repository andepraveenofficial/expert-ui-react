import { ActComponent } from "./ActComponent";
import { screen, render, fireEvent, act } from "@testing-library/react";

describe("ActComponent", () => {
	it("should render correctly", () => {
		const { container } = render(<ActComponent />);
		expect(container).toBeTruthy();
	});

	it("should display loading state initially", async () => {
		render(<ActComponent />);
		expect(screen.getByText("Loading...")).toBeTruthy();
	});

	it("should display loaded state after button click use act", async () => {
		vi.useFakeTimers();
		render(<ActComponent />);
		const LoadDataButton = screen.getByRole("button", { name: "Load Data" });
		fireEvent.click(LoadDataButton);
		act(() => {
			vi.advanceTimersByTime(10000); // fast-forward 10 seconds
		});

		// fireEvent.click(LoadDataButton);
		const DataLoadedText = screen.getByText("Data Loaded!");
		expect(DataLoadedText).toBeInTheDocument();
	});
});
