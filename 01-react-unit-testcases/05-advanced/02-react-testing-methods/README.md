# React Testing Methods

## Template
- This template uses **02-setup**.
 
## Installation
- `npm install`

## Start the Application
- `npm run dev`

### Run the Testcases
- `npm run test`

### React Testing Methods
1. waitFor
2. act
3. fireEvent
4. userEvent

#### 1. waitFor
- `waitFor` is a helper that waits until something appears or changes on the screen during a test.
- Example : Sometimes, the UI takes time to change (like after a delay or API call). If you check too soon, the test will fail.
- By default, timeouts after 1000ms (1 second), but you can customize this.
- Retry logic: If the assertion fails, `waitFor` will automatically retry until the timeout is reached. (by defaut, it retries every 50ms)
- Solution : use `waitFor` to wait for the UI to update before making assertions.

#### 2. act
- `act` makes sure all component updates finish before the test checks the DOM.
- Some updates are immediate (useState), others are delayed (useEffect, setTimeout, Promises). Testing too early can fail.
1. `useState` – state changes after events like clicks
2. `useEffect` – runs after rendering
3. `Async` updates – delayed changes with setTimeout or Promises

### 3. fireEvent
- Triggers DOM events directly.
- Doesn’t fully simulate real user behavior (focus, typing sequence, pointer events).
- Often needs act() or await for async updates.

### 4. userEvent
- Simulates real user interactions more closely.
- Handles focus, typing sequences, pointer events.