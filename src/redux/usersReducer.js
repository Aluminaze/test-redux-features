import { ADD_USER, DELETE_USER, GET_USERS } from "./types";

const initialState = {
  users: [],
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER: {
      return {
        ...state,
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
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };
    }
    case GET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.payload],
      };
    default:
      return state;
  }
};
