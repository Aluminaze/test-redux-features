import {
  ADD_USER,
  ASYNC_INCERMENT,
  DECREMENT,
  DELETE_USER,
  INCREMENT,
} from "./types";

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

export const addUser = (name) => {
  return {
    type: ADD_USER,
    payload: name,
  };
};

export const deleteUser = (userId) => {
  return {
    type: DELETE_USER,
    payload: userId,
  };
};

export const asyncIncrementCount = (number) => {
  return {
    type: ASYNC_INCERMENT,
    payload: number,
  };
};
