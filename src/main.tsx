import { useSelector } from "react-redux";
import "./main.css";
import StartScene from "./scenes/start";
import type { RootState } from "./index";
import Quiz from "./scenes/quiz";
import prefecturalCapital from "./quiz";
import End from "./scenes/end";
import Timer from "./scenes/timer";

export function Main() {
	const problemID = useSelector((state: RootState) => state.counterProblem);
	return (
		<>
			<h1 className="title">クイズ</h1>
			<Timer />
			{problemID === 0 && <StartScene />}
			{1 <= problemID && problemID <= prefecturalCapital.length && (
				<Quiz problemID={problemID - 1} />
			)}
			{problemID === prefecturalCapital.length + 1 && <End />}
		</>
	);
}
