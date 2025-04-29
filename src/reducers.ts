import { combineReducers } from "redux";
import prefecturalCapital from "./quiz";

export interface Problem {
  type: "INCREMENT" | "DECREMENT" | "FINISH";
}

export interface ProblemPoint {
  type: "POINT_INCREMENT";
  payload: number;
}

const counterProblemReducer = (state: number, action: Problem): number => {
  const state2 = state || 0;
  switch (action.type) {
    case "INCREMENT":
      return state2 + 1;
    case "DECREMENT":
      return state2 - 1;
    case "FINISH":
      return prefecturalCapital.length + 1;
    default:
      return state2;
  }
};

const problemPointReducer = (state: number, action: ProblemPoint): number => {
  const state2 = state || 0;
  switch (action.type) {
    case "POINT_INCREMENT":
      return state2 + action.payload;
    default:
      return state2;
  }
};

const allReducers = combineReducers({
  counterProblem: counterProblemReducer,
  problemPoint: problemPointReducer,
});

export default allReducers;
