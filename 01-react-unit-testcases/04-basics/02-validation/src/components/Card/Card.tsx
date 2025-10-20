import type { FC } from "react";

export const Card: FC = () => {
	return (
		<div data-testid='card'>
			<h1>Card</h1>
			<form>
				<label htmlFor='name'>Name:</label>
				<input
					id='name'
					name='name'
					type='text'
					placeholder='Enter Your Name'
				/>
				<button>Click Me</button>
			</form>
		</div>
	);
};
