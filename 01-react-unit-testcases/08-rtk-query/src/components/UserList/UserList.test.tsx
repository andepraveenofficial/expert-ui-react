import { UserList } from "./UserList";
import { renderWithRedux } from "../../test/test-utils";
import { useGetUsersQuery } from "../../store";
import { screen } from "@testing-library/react";

// Mock
vi.mock("../../store", async (importOriginal) => {
	const actual = await importOriginal<typeof import("../../store")>();
	return {
		...actual,
		useGetUsersQuery: vi.fn(),
	};
});

// typed alias for the mocked function
const mockedUseGetUsersQuery = vi.mocked(useGetUsersQuery);

describe("UserList", () => {
	it("should render correctly", () => {
		const { container } = renderWithRedux(<UserList />);
		const firstChild = container.firstChild as HTMLElement;
		expect(firstChild).toBeTruthy();
	});

	it("renders with data", () => {
		const users = [{ id: 1, name: "John", email: "john@example.com" }];
		mockedUseGetUsersQuery.mockReturnValue({
			data: users,
			isLoading: false,
			error: undefined,
			refetch: vi.fn(),
		} as ReturnType<typeof useGetUsersQuery>);

		renderWithRedux(<UserList />);
		expect(screen.getByText("John")).toBeInTheDocument();
	});
});
