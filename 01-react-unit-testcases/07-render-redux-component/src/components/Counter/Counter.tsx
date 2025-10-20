import type { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store";
import { decrement, increment } from "../../store/slices";

export const Counter: FC = () => {
	const dispatch = useDispatch();
	const { value: counterValue } = useSelector(
		(state: RootState) => state.counter
	);
	return (
		<div>
			<button onClick={() => dispatch(increment())}>increment</button>
			<span>Counter: {counterValue}</span>
			<button onClick={() => dispatch(decrement())}>decrement</button>
		</div>
	);
};
