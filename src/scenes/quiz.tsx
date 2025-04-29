import prefecturalCapital from "../quiz";
import { useDispatch } from "react-redux";
import { nextProblem, incrementPoint } from "../actions";

const Quiz = (props: { problemID: number }) => {
	const dispatch = useDispatch();
	return (
		<div className="quizContainer">
			<div className="quiz">
				<h2 className="subTitle">問題{props.problemID + 1}</h2>
				<hr />
				<p className="problem">
					{prefecturalCapital[props.problemID].question}
				</p>
				<div className="answerContainer">
					{[
						prefecturalCapital[props.problemID].answer1,
						prefecturalCapital[props.problemID].answer2,
						prefecturalCapital[props.problemID].answer3,
						prefecturalCapital[props.problemID].answer4,
					]
						.sort(() => Math.random() - 0.5)
						.map((answer, index) => (
							<button
								key={`${props.problemID}_${index}`}
								type="button"
								className="button"
								onClick={() => {
									dispatch(incrementPoint(answer.point));
									dispatch(nextProblem());
								}}
							>
								{answer.name}
							</button>
						))}
				</div>
			</div>
		</div>
	);
};

export default Quiz;
