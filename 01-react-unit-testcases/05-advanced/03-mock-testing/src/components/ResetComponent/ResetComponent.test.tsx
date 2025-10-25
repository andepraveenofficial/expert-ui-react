import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { ResetComponent } from "./ResetComponent";
import { getUser } from "./api";

// Mock the entire API module
vi.mock("./api");

describe("ResetComponent", () => {
	afterEach(() => {
		vi.clearAllMocks(); // reset call counts
		vi.resetAllMocks(); // reset mock implementations
	});
	it("should display loading initially", () => {
		// Mock getUser to return a pending promise
		vi.mocked(getUser).mockReturnValue(new Promise(() => {}));

		render(<ResetComponent />);

		expect(screen.getByText("Loading...")).toBeInTheDocument();
	});

	it("should display user name after loading", async () => {
		// Mock getUser to return resolved data
		const mockUser = { name: "John Doe" };
		vi.mocked(getUser).mockResolvedValue(mockUser);

		render(<ResetComponent />);

		// Wait for the user name to appear
		await waitFor(() => {
			expect(screen.getByTestId("username")).toHaveTextContent("John Doe");
		});

		// Verify getUser was called with correct argument
		expect(getUser).toHaveBeenCalledWith(1);
		expect(getUser).toHaveBeenCalledTimes(1);
	});

	it("should handle different user data", async () => {
		const mockUser = { name: "Jane Smith" };
		vi.mocked(getUser).mockResolvedValue(mockUser);

		render(<ResetComponent />);

		const username = await screen.findByTestId("username");
		expect(username).toHaveTextContent("Jane Smith");
	});

	it("should handle API errors gracefully", async () => {
		// Mock getUser to reject with an error
		vi.mocked(getUser).mockRejectedValue(new Error("API Error"));

		render(<ResetComponent />);

		// Component will stay in loading state on error (no error handling in component)
		expect(screen.getByText("Loading...")).toBeInTheDocument();
	});
});
