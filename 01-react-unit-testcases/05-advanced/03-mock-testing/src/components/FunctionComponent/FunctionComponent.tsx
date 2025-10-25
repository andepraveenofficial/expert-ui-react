import React from "react";

interface FunctionComponentProps {
	onClick: () => void;
}

export const FunctionComponent: React.FC<FunctionComponentProps> = ({
	onClick,
}) => {
	return (
		<button onClick={onClick} data-testid='mock-button'>
			Click Me
		</button>
	);
};
