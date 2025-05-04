import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "..";
import prefecturalCapital from "../quiz";
import { useDispatch } from "react-redux";
import { finishProblem } from "../actions";

const TIME_LIMIT = 10;
const Timer = () => {
	const problemID = useSelector((state: RootState) => state.counterProblem);
	const [timer, setTimer] = useState(0);
	const [finishTime, setFinishTime] = useState(-1);
	const dispatch = useDispatch();
	// 1秒ごとにtimerを更新する関数.
	const startTimer = () => {
		const intervalId = setInterval(() => {
			setTimer((prev) => {
				if (prev >= TIME_LIMIT) {
					clearInterval(intervalId);
					return TIME_LIMIT;
				}
				return prev + 1;
			});
		}, 1000);
	};
	useEffect(() => {
		if (problemID === prefecturalCapital.length + 1 && finishTime === -1) {
			setFinishTime(timer);
		}
	}, [problemID, timer, finishTime]);
	useEffect(() => {
		if (timer >= TIME_LIMIT) {
			dispatch(finishProblem());
		}
	}, [timer, dispatch]);
	// タイマーが0のときにstartTimerを呼び出す
	if (timer === 0 && 1 <= problemID && problemID <= prefecturalCapital.length) {
		startTimer();
	}
	return (
		<progress
			id="timer"
			max={TIME_LIMIT}
			value={prefecturalCapital.length + 1 === problemID ? finishTime : timer}
			className="timer"
		/>
	);
};

export default Timer;
