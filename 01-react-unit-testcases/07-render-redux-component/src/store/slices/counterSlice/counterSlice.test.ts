import { counterReducer } from "./counterSlice";

describe("counterSlice", () => {
	it("should handle initial state", () => {
		const initialState = undefined;
		const action = { type: "unknown" };
		const state = counterReducer(initialState, action);
		expect(state).toEqual({ value: 0 });
	});

	it("should handle incremnent action", () => {
		const initialState = undefined;
		const action = { type: "counter/increment" };
		const state = counterReducer(initialState, action);
		expect(state).toEqual({ value: 1 });
	});

	it("should handle decrement action", () => {
		const initialState = undefined;
		const action = { type: "counter/decrement" };
		const state = counterReducer(initialState, action);
		expect(state).toEqual({ value: -1 });
	});
});
