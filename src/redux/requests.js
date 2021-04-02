import { getUsersData } from "./asyncActions";

export const fetchUsersData = () => {
  return (dispatch) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => dispatch(getUsersData(json)));
  };
};
