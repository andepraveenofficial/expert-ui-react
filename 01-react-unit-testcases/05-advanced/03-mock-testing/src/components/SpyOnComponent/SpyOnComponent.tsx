import React from "react";
import { utils } from "./utils";

export const SpyOnComponent: React.FC = () => {
	const message = utils.greet("Praveen");

	return <div data-testid='greeting'>{message}</div>;
};
