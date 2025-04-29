export const nextProblem = () => {
  return {
    type: "INCREMENT",
  };
};

export const finishProblem = () => {
  return {
    type: "FINISH",
  };
};

export const prevProblem = () => {
  return {
    type: "DECREMENT",
  };
};

export const incrementPoint = (payload: number) => {
  return {
    type: "POINT_INCREMENT",
    payload: payload,
  };
};
