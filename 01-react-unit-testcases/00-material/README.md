# React Unit Testcases

<details>
<summary>Index</summary>

## Index
- Introduction
- Testcase Syntax
- Basic Usage Information
- Unit Testing Strategy
- Unit Testcase Example
- Querying
- Validation
- Code Coverage
- Documentation
</details>

---

<details>
<summary>Introduction</summary>

## Introduction
- Vitest (pronounced as "veetest").
- Vitest is a **Testing Framework**.
- Unit testing helps catch bugs early and ensures that new changes don't break existing functionality.
</details>

---

<details>
<summary>Testcase Syntax</summary>

## Testcase Syntax

1. Single Testcase -> Testcase
2. Group of Testcases -> Test Suite

### 1. Single Testcase

```tsx
test("description", () => {
	// Render
	// Querying
	// Assertion
});
```

### 2. Group of Testcases

```tsx
describe("Group of Testcases", () => {
	test("test1", () => {
		// Render
		// Querying
		// Assertion
	});

	test("test2", () => {
		// Render
		// Querying
		// Assertion
	});

	test("test3", () => {
		// Render
		// Querying
		// Assertion
	});
});
```

### Writing Testcase Steps

1. Render : Render Component
2. Querying : Find Element
3. Assertion : Check validation

</details>

---

<details>
<summary>Basic Usage Information</summary>

## Basic Usage Information

### 01 vitest
Vitest is a test runner and provides test functions.
  1. describe
  2. it
  3. expect
  4. beforeEach
  5. afterEach

### 02 @react-testing-library/react
- Renders React components in tests
- Provides utilities to query and interact with components
  1. render() - Renders your component
  2. screen - Query the rendered output
  3. fireEvent / userEvent - Simulate user interactions


### 03 @testing-library/jest-dom
- Adds custom matchers for DOM elements
- Makes assertions more readable and expressive
```tsx
expect(element).toBeInTheDocument();
expect(element).toBeVisible();
expect(element).toHaveTextContent('Hello');
expect(input).toHaveValue('test');
expect(button).toBeDisabled();
expect(element).toHaveClass('active');
```

### 04 jsdom
- Browser Environment Simulator
- Simulates a browser environment in Node.js
- Provides DOM APIs (document, window, HTMLElement, etc.)
</details>

---

<details>
<summary>Unit Testing Strategy</summary>

## Unit Testing Strategy

# Unit Testing Strategy

1. Render the component.
2. Check that all elements are present on the screen using debug.
3. Simulate user interactions (e.g., clicks, typing).
4. Assert the expected outcomes (e.g., text changes).

## AAA Pattern

- Use the Arrange-Act-Assert (AAA) pattern
- This improves readability and consistency.

1. Structure tests to clearly set up conditions (Arrange)
2. perform actions (Act)
3. verify outcomes (Assert).

</details>

---

<details>
<summary>Unit testcase Example</summary>

## Unit testcase Example 
```ts 
// test(descriptioon, callback)
	it("should render correctly", () => {
		render(<Card />);
		const cardElement = screen.getByTestId("card");
		expect(cardElement).toBeInTheDocument();
	});
```

### Writing testcase steps
1. render
2. Querying
3. Assertion


#### Write Group testcase

```tsx 
describe("Card", () => {

	it("should render correctly", () => {
		render(<Card />);
		const cardElement = screen.getByTestId("card");
		expect(cardElement).toBeInTheDocument();
	});

	it("should render correctly", () => {
		const {container} = render(<Card />);
  const firstChild = container.firstChild as HTMLElement;
		expect(firstChild).toBeTruthy();
	});
});
```
</details>

---

<details>
<summary>Querying</summary>

## Querying

- Querying is the process of selecting elements on the screen.
- Querying is the process of finding an element on webpage.
- The query methods in React Testing Library are used to find elements in the DOM.

1. get
2. query
3. find

### get

- synchronous: it searches the DOM and returns the element (or throws an error) instantly.
- Throws an error if no element is found
- Throws an error if more than one element matches.

- Common Methods:

1. getByText
2. getByDisplayValue
3. getByRole
4. getByPlaceholderText
5. getByLabelText
6. getByAltText
7. getByTestId

### query

- Synchronous: it searches the DOM and returns the element if found, or `null` if not found.
- If the element is **not** found, it simply returns `null` instead of throwing an error.
- Throws an error if more than one element matches.

- Common Methods:

1. queryByText
2. queryByDisplayValue
3. queryByRole
4. queryByPlaceholderText
5. queryByLabelText
6. queryByAltText
7. queryByTestId

### find

- Asynchronous: It returns a Promise and waits (default up to 1000ms) for the element to appear in the DOM.
- Error on timeout: Throws an error if the element doesn’t appear within the timeout.
- Error on multiple matches: Throws an error if more than one matching element is found
- Use when you expect the element to appear asynchronously.

1. findByText
2. findByDisplayValue
3. findByRole
4. findByPlaceholderText
5. findByLabelText
6. findByAltText
7. findByTestId

</details>

---

<details>
<summary>Validation</summary>

## Validation

Validation checks if a component or element is in the expected state after rendering or actions.

### Common Validation Methods

- `toBeInTheDocument()` — element exists
- `toHaveValue("defaultValue")` — input value
- `toHaveAttribute("attributeName")` — has attribute
- `toHaveClass("className")` — has class
- `toBeEnabled()` — is enabled
- `toBeDisabled()` — is disabled

### Negative Validation Methods

- `not.toHaveValue("defaultValue")`
- `not.toHaveAttribute("class")`
- `not.toHaveClass("className")`
- `not.toBeEnabled()`
- `not.toBeDisabled()`

</details>

---

<details>
<summary>Code Coverage</summary>

## Code Coverage

1. Statements
2. Branches
3. Functions
4. Lines
5. Uncovered Lines

### 1. Statements

- Counts each executable statement in your code, even if multiple statements are on the same line. For example, let a = 1; let b = 2; on one line counts as two statements.
- Example: Out of 10 statements, 8 are executed. Coverage: 80%.
- Statements = every individual instruction.

### 2. Branches

- Either `if` or `else` branches.
  Example: If you have an `if/else` and only the `if` runs, branch coverage is 50%.

### 3. Functions

Example: If you have 4 functions and 3 are called in tests, coverage is 75%.

### 4. Lines

- Lines = every line of code (may contain multiple statements).
- Counts coverage per line, regardless of how many statements are on that line. If at least one statement on a line is executed, the line is considered covered.
- Example: Out of 20 lines, 18 are executed. Coverage: 90%.

### 5. Uncovered Lines

Example: Lines 12 and 15 are not executed by any test.

### Sample Jest Test and Coverage Output

```ts
// sum.ts
export function sum(a: number, b: number): number {
	if (a && b) {
		return a + b;
	} else {
		// This line is not covered by tests
		return 0;
	}
}
```

```ts
// sum.test.ts
import { sum } from "./sum";

test("adds numbers", () => {
	expect(sum(1, 2)).toBe(3);
});
```

- `% Stmts`: All statements except the `else` branch code were executed. -> 75%
- `% Branch`: Only one branch (`if`) tested, not the `else`. -> 50%
- `% Funcs`: The function `sum` was called. -> 100%
- `% Lines`: All lines except the `return 0;` line were executed. -> 83%
- `Uncovered Lines`: The line with `return 0;` was not covered.

</details>

---

<details>
<summary>Documentation</summary>

## Documentation
- Vitest Official Website: [https://vitest.dev/](https://vitest.dev/)
- Vitets Official Documentation: [https://vitest.dev/guide/](https://vitest.dev/guide/)
- React Testing Library: [https://testing-library.com/docs/react-testing-library/intro/](https://testing-library.com/docs/react-testing-library/intro/)
</details>

---