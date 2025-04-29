import { useSelector } from "react-redux";
import type { RootState } from "..";

const End = () => {
	const point = useSelector((state: RootState) => state.problemPoint);

	return (
		<div className="end">
			<h1>End of the Game</h1>
			<p>Thank you for playing!</p>
			<p>Score: {point}</p>
		</div>
	);
};

export default End;
