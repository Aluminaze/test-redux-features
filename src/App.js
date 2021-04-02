import React from "react";
import "./App.css";
import { Button } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { DECREMENT, INCREMENT } from "./redux/types";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.countReducer.count);
  console.log("~ count", count);

  const incrementCount = (number) => {
    dispatch({ type: INCREMENT, payload: number });
  };
  const decrementCount = (number) => {
    dispatch({ type: DECREMENT, payload: number });
  };

  return (
    <div
      className="App"
      style={{ display: "flex", flexDirection: "column", padding: "20px" }}
    >
      <span>Current count:</span>
      <span>{count}</span>

      <Button variant="contained" onClick={() => incrementCount(10)}>
        INCREMENT
      </Button>
      <Button variant="contained" onClick={() => decrementCount(20)}>
        DECREMENT
      </Button>
    </div>
  );
}

export default App;
