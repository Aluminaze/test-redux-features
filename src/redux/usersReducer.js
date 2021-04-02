import { ADD_USER, DELETE_USER } from "./types";

const initialState = {
  users: [],
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER: {
      return {
        users: [
          ...state.users,
          {
            id: new Date().getTime(),
            name: action.payload,
          },
        ],
      };
    }
    case DELETE_USER: {
      return {
        users: state.users.filter((user) => user.id !== action.payload),
      };
    }
    default:
      return state;
  }
};
