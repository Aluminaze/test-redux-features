import { DECREMENT, INCREMENT } from "./types";

export const incrementCount = (number) => {
  return {
    type: INCREMENT,
    payload: number,
  };
};

export const decrementCount = (number) => {
  return {
    type: DECREMENT,
    payload: number,
  };
};
