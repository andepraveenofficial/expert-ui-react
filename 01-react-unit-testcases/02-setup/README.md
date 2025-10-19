# Vitest Setup

## Installation
- `npm install`

## Start the Application
- `npm run dev`

### Vitest Setup
- Install Vitest : `npm install -D vitest`

### Run the Vitest
- Note : By default, tests must contain `.test` or `.spec` in their file name.
- Run testcases : `npx vitest` - watchmode
- Package.json modification for test script:
  ```json
  "scripts": {
    "test": "vitest"
  }
  ```
### Add test coverage
- Install coverage dependencies: `npm install -D @vitest/coverage-c8`
```json
  "scripts": {
    "test": "vitest",
    "coverage": "vitest run --coverage"
  }
  ```

### Vitest configuration
- By default, Vitest will look for configuration in the following order:
  1.  `vitest.config.ts`
  2.  `vite.config.ts`
- Create `vitest.config.ts`, which will have the higher priority
- Pass `--config` option to CLI, e.g. `vitest --config ./path/to/vitest.config.ts`

```json
  "scripts": {
    "test": "vitest --config vitest.config.ts",
    "coverage": "vitest run --coverage --config vitest.config.ts"
  }
```

```json
/// <reference types="vitest" />
import { defineConfig } from "vite";

export default defineConfig({
	test: {
		globals: true,
	},
});

```
- `globals: true` - allows using global test APIs like `describe`, `it`, `expect` without importing them in every test file. otherwise, you need to import them from 'vitest' in each test file.

### React Testing Setup
- Install React Testing Library : `npm install -D @testing-library/react`
- Install JSDOM environment : `npm install -D jsdom`
- Custom Jest matchers for Testing Library : `npm install -D @testing-library/jest-dom`
- Update `vitest.config.ts` to use `jsdom` environment, otherwise you need to import `@testing-library/jest-dom` in every test file.
- create a setup file `src/setupTests.ts` to import `@testing-library/jest-dom`, otherwise you need to import it in every test file.
```json
/// <reference types="vitest" />
import { defineConfig } from "vite";

export default defineConfig({
	test: {
		globals: true,
		environment: "jsdom",
		setupFiles: "./src/setupTests.ts",
	},
});
```

