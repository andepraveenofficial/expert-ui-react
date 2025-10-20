import type { FC } from "react";
import { NormalComponent } from "../NormalComponent";

export const NestedComponent: FC = () => {
	return (
		<div data-testid='nested-component'>
			<NormalComponent />
			<NormalComponent />
		</div>
	);
};
