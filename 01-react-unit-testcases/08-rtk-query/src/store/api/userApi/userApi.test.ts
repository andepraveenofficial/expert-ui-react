import { userApi } from "./userApi";

describe("userApi", () => {
	it("should have correct reducer path", () => {
		expect(userApi.reducerPath).toBe("userApi");
	});

	it("should have correct getUsers endpoint", () => {
		const getAllUsersEndpoint = userApi.endpoints.getUsers;
		expect(getAllUsersEndpoint).toBeDefined();
	});
});
