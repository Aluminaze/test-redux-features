import React from "react";
import "./App.css";
import { Button } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { decrementCount, incrementCount } from "./redux/actions";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.countReducer.count);

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
    </div>
  );
}

export default App;
