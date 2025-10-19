# React Unit Testcases

<details>
<summary>Index</summary>

## Index
- Introduction
- Basic Usage Information
- Unit Testing Strategy
- Documentation
</details>

---

<details>
<summary>Introduction</summary>

## Introduction
- Vitest (pronounced as "veetest").
- Vitest is a **Testing Framework**.

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
<summary>Documentation</summary>

## Documentation
- Vitest Official Website: [https://vitest.dev/](https://vitest.dev/)
- Vitets Official Documentation: [https://vitest.dev/guide/](https://vitest.dev/guide/)
- React Testing Library: [https://testing-library.com/docs/react-testing-library/intro/](https://testing-library.com/docs/react-testing-library/intro/)
</details>

---