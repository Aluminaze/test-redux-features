import { GET_ALBUMS, GET_USERS_DATA } from "./types";

export const getUsersData = (usersData) => {
  return {
    type: GET_USERS_DATA,
    payload: usersData,
  };
};

export const getAlbums = (albums) => {
  return {
    type: GET_ALBUMS,
    payload: albums,
  };
};
