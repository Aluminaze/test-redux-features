import { GET_USERS_DATA } from "./types";

export const getUsersData = (usersData) => {
  return {
    type: GET_USERS_DATA,
    payload: usersData,
  };
};
