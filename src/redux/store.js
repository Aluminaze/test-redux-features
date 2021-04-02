import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { countReducer } from "./countReducer";
import { usersReducer } from "./usersReducer";

const rootReducer = combineReducers({
  countReducer,
  usersReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
