import React from "react";
import "./App.css";
import { Button } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import {
  addUser,
  decrementCount,
  deleteUser,
  incrementCount,
} from "./redux/actions";
import { fetchUsersData } from "./redux/requests";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.countReducer.count);
  const users = useSelector((state) => state.usersReducer.users);

  return (
    <div
      className="App"
      style={{ display: "flex", flexDirection: "column", padding: "20px" }}
    >
      <span>Current count:</span>
      <span>{count}</span>

      <Button variant="contained" onClick={() => dispatch(incrementCount(10))}>
        INCREMENT
      </Button>
      <Button variant="contained" onClick={() => dispatch(decrementCount(20))}>
        DECREMENT
      </Button>

      <hr />
      <Button variant="contained" onClick={() => dispatch(addUser(prompt()))}>
        ADD USER
      </Button>
      <Button variant="contained" onClick={() => dispatch(fetchUsersData())}>
        GET USERS
      </Button>

      {users.length ? (
        users.map((userData, index) => (
          <div key={index} onClick={() => dispatch(deleteUser(userData.id))}>
            {userData.name}
          </div>
        ))
      ) : (
        <span>List with users is empty</span>
      )}
    </div>
  );
}

export default App;
