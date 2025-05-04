import prefecturalCapital from "../quiz";
import { useDispatch } from "react-redux";
import { nextProblem, incrementPoint } from "../actions";
import { useState } from "react";

const Quiz = (props: { problemID: number }) => {
	const dispatch = useDispatch();
	const problemData = prefecturalCapital[props.problemID];
	const [inputValue, setInputValue] = useState<string>("");
	return (
		<>
		<div className="quizContainer">
			<div className="quiz">
				<h2 className="subTitle">問題{props.problemID + 1}</h2>
				<hr />
				<p className="problem">
					{problemData.question}
				</p>
				{problemData.problem_type === "write" ? (
					<input
						type="text"
						className="input"
						value={inputValue}
						onChange={(e) => setInputValue(e.target.value)}
						onKeyDown={(e) => {
							if (e.key === "Enter") {
								if (inputValue === problemData.answer.name) {
									dispatch(incrementPoint(problemData.answer.point));
								}
								setInputValue("");
								dispatch(nextProblem());
							}
						}}
					/>
				) : (
				<div className="answerContainer">
					{[
						problemData.answer1,
						problemData.answer2,
						problemData.answer3,
						problemData.answer4,
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
				)}
			</div>
		</div>
		{problemData.image && <img className="quizImage" src={problemData.image} alt="quiz"/>}
		</>
	);
};

export default Quiz;
