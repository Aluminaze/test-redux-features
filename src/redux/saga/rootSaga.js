import { all } from "redux-saga/effects";
import { countWatcher } from "./countSaga";
import { usersWatcher } from "./usersSaga";

export default function* rootSaga() {
  yield all([countWatcher(), usersWatcher()]);
}
