import { useSelector } from "react-redux";
import type { RootState } from "..";
import prefecturalCapital from "../quiz";

const End = () => {
	const point = useSelector((state: RootState) => state.problemPoint);
	const maxPoint = prefecturalCapital.reduce(
		(accumulator, currentValue) => accumulator + currentValue.max_point, 0
	);

	return (
		<div className="end">
			<h1>End of the exam</h1>
			<p>Thank you for playing!</p>
			<p>Score: {point}/{maxPoint}</p>
		</div>
	);
};

export default End;
