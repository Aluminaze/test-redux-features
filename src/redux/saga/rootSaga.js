import { all } from "redux-saga/effects";
import { countWatcher } from "./countSaga";

export default function* rootSaga() {
  yield all([countWatcher()]);
}
