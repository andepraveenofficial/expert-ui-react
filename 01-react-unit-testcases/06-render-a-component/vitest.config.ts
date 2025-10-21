/// <reference types="vitest" />
import { defineConfig } from "vite";

export default defineConfig({
	test: {
		globals: true,
		environment: "jsdom",
		setupFiles: "./src/setupTests.ts",
		coverage: {
			enabled: true,
			provider: "v8",
			reportsDirectory: "coverage",
			reporter: ["text", "html"],
			include: ["src/**/*.{ts,tsx}"],
			exclude: [
				"**/node_modules/**",
				"**/dist/**",
				"**/*.module.scss",
				"**/index.ts",
				"src/setupTests.ts",
				"vite.config.*",
				"vitest.config.*",
			],
			thresholds: {
				statements: 90,
				branches: 90,
				functions: 90,
				lines: 90,
			},
		},
	},
});
