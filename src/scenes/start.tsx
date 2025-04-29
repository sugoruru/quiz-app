import { useDispatch } from "react-redux";
import { nextProblem } from "../actions";

const StartScene = () => {
	const dispatch = useDispatch();
	return (
		<div className="buttonContainer">
			<button
				className="button"
				type="button"
				onClick={() => {
					dispatch(nextProblem());
				}}
			>
				スタート
			</button>
		</div>
	);
};

export default StartScene;
