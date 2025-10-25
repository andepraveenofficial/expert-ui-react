# Mock Testing

## Template
- This template uses **02-setup**.
 
## Installation
- `npm install`

## Start the Application
- `npm run dev`

### Run the Testcases
- `npm run test`

### Mock Testing
1. fn()
2. spyOn
3. mock
4. mockImplementation
5. reset
1. clearAllMocks
1. resetAllMocks
1. restoreAllMocks

#### 01 fn
- `vi.fn()`
- It is used to create a mock function.
- You can create a mock function to track its execution with the `vi.fn()` method.

#### 02 spyOn
- `vi.spyOn(object, methodName)`
- It is used to spy on a method of an object.

#### 03 mock
- `vi.mock(modulePath, factory?)`
- It is used to mock an entire module.
- mock (replace) an entire module or file during testing.
- Helper methods
1. `vi.mocked(method).mockReturnValue(value)`
2. `vi.mocked(method).mockResolvedValue(value)`
3. `vi.mocked(method).mockRejectedValue(value)`

#### 04 mockImplementation
- `mockedFn.mockImplementation(fn)`
- It is used to provide a custom implementation for a mock function.

#### 05 reset
1. `vi.clearAllMocks()`
- It is used to clear the call history of all mock functions.
- It resets the call count and arguments of all mock functions.
- It does not reset the implementation or return values of the mock functions.

2. `vi.resetAllMocks()`
- It is used to reset all mock functions to their original implementation.
- It resets the call history, implementation, and return values of all mock functions.
- It is useful when you want to start fresh with your mock functions between tests.
