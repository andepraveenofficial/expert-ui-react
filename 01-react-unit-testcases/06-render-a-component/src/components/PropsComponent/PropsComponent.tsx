import type { FC } from "react";

type PropsComponentProps = {
	title: string;
	paragraph: string;
};

export const PropsComponent: FC<PropsComponentProps> = ({
	title,
	paragraph,
}) => {
	return (
		<div data-testid='props-component'>
			<h1>PropsComponent</h1>
			<h1>{title}</h1>
			<p>{paragraph}</p>
		</div>
	);
};
