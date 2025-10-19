# Debug

## Template
- This template uses **02-setup**.
 
## Installation
- `npm install`

## Start the Application
- `npm run dev`

### Run the Testcases
- `npm run test`

### Debug
1. print the entire DOM
```tsx
render(<Card />);
screen.debug(); // prints the entire rendered DOM
```
2. print a specific element
```tsx
render(<Card />);
const cardElement = screen.getByText("Card");
screen.debug(cardElement); // prints the specific element
```
3. prettyDOM
- It formats the HTML nicely (indentation + syntax highlight style).
```tsx
render(<Card />);
const element = screen.getByText('Card');
console.log(prettyDOM(element));
```
4. container debug
- Prints the HTML inside the RTL container.
```tsx
const { container } = render(<Card />);
console.log(container.innerHTML);
```

5. Testing Playground
- Logs a URL to Testing Playground: https://testing-playground.com
- Click the URL → open a browser → it suggests best queries for your component (getByText, getByRole, etc.)

```tsx
render(<Card />);
screen.logTestingPlaygroundURL();
```
6. logRoles
- Logs all the ARIA roles present in the rendered component.
```tsx
render(<Card />);
const element = screen.getByText('Card');
logRoles(myElement)
```