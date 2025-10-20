import type { FC } from "react";

export const NormalComponent: FC = () => {
	return (
		<div data-testid='normal-component'>
			<h1>I am NormalComponent</h1>
			<button>Click Me</button>
		</div>
	);
};
