import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { getUser } from "./api";
import { MockImplementationComponent } from "./MockImplementationComponent";

// Mock the entire API module
vi.mock("./api");
describe("MockComponent", () => {
	it("should display loading initially", () => {
		// Mock getUser to return a pending promise
		vi.mocked(getUser).mockReturnValue(new Promise(() => {}));

		render(<MockImplementationComponent />);

		expect(screen.getByText("Loading...")).toBeInTheDocument();
	});

	it("should render mocked user data", async () => {
		// Use vi.mocked() for type-safe access to the mocked function
		const mockedGetUser = vi.mocked(getUser);

		// Replace implementation with mockImplementation
		mockedGetUser.mockImplementation(async () => {
			return { name: "Mocked Praveen" };
		});

		render(<MockImplementationComponent />);

		const username = await screen.findByTestId("username");
		expect(username.textContent).toBe("Mocked Praveen");

		expect(mockedGetUser).toHaveBeenCalledWith(1);
	});
});
