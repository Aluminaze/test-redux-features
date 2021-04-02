import { createStore, combineReducers } from "redux";
import { countReducer } from "./countReducer";
import { usersReducer } from "./usersReducer";

const rootReducer = combineReducers({
  countReducer,
  usersReducer,
});

export const store = createStore(rootReducer);
