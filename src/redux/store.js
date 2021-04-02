import { createStore, combineReducers } from "redux";
import { countReducer } from "./countReducer";

const rootReducer = combineReducers({
  countReducer,
});

export const store = createStore(rootReducer);
