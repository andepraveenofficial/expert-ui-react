import type { FC } from "react";

export const Card: FC = () => {
	const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log("Form Submitted");
	};
	return (
		<div data-testid='card'>
			<h1>Card</h1>
			<form onSubmit={handleFormSubmit}>
				<label htmlFor='name'>Name:</label>
				<input id='name' name='name' type='text' />
				<button type='submit'>Submit</button>
			</form>
		</div>
	);
};
