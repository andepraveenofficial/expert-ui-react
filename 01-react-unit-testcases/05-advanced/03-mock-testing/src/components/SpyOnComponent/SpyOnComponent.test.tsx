import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import { utils } from "./utils";
import { SpyOnComponent } from "./SpyOnComponent";

describe("SpyOnComponent", () => {
	it("calls utils.greet when rendered", () => {
		// 🕵️‍♂️ Spy on the greet function
		const spy = vi.spyOn(utils, "greet");

		// Optionally, change its behavior
		spy.mockReturnValue("Helloo, Mocked Userrr!");

		render(<SpyOnComponent />);

		// ✅ Check the spy was called correctly
		expect(spy).toHaveBeenCalledWith("Praveen");

		// ✅ Check the UI used the mocked value
		expect(screen.getByTestId("greeting").textContent).toBe(
			"Helloo, Mocked Userrr!"
		);

		// Restore original function after test
		spy.mockRestore();
	});
});
