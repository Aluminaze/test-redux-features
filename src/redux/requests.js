import { getAlbums, getUsersData } from "./asyncActions";

export const fetchUsersData = () => {
  return (dispatch) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => dispatch(getUsersData(json)));
  };
};

export const fetchAlbums = () => {
  return (dispatch) => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((response) => response.json())
      .then((json) => dispatch(getAlbums(json)));
  };
};
