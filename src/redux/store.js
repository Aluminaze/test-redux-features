import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { albumsReducer } from "./albumsReducer";
import { countReducer } from "./countReducer";
import { usersReducer } from "./usersReducer";

const rootReducer = combineReducers({
  countReducer,
  usersReducer,
  albumsReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
