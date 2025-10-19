import type { FC } from "react";

export const Card: FC = () => {
	return (
		<div data-testid='card'>
			<h1>Card</h1>
			<button>Click Me</button>
		</div>
	);
};
