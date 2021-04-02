import { DECREMENT, INCREMENT } from "./types";

const initialState = {
  count: 5,
};

export const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + action.payload,
      };
    case DECREMENT:
      return {
        count: state.count - action.payload,
      };
    default:
      return state;
  }
};
