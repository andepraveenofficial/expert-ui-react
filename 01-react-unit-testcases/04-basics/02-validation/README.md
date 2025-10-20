# Querying

## Template
- This template uses **02-setup**.
 
## Installation
- `npm install`

## Start the Application
- `npm run dev`

### Run the Testcases
- `npm run test`

### Querying

1. Query Types
2. Querying Methods

### 1. Query Types

1. get
2. query
3. find

### 2. Query Methods

- Sample methods to query elements in the DOM:

1. getByText
2. getByDisplayValue
3. getByRole
4. getByPlaceholderText
5. getByLabelText
6. getByTitle
7. getByTestId

### Query Variants
1. getBy : Throws an error if the element is not found.
2. queryBy : Returns null if the element is not found.
3. findBy : Returns a promise that resolves when the element is found or rejects if not found within a timeout.