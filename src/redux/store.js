import { createStore, combineReducers, applyMiddleware } from "redux";
import { countReducer } from "./countReducer";
import { usersReducer } from "./usersReducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  countReducer,
  usersReducer,
});

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
