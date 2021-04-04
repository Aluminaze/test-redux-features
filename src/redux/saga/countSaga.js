import { put, delay, takeEvery } from "redux-saga/effects";
import { incrementCount } from "../actions";
import { ASYNC_INCERMENT } from "../types";

function* countWorker(action) {
  yield delay(2000);
  yield put(incrementCount(action.payload));
}

export function* countWatcher() {
  yield takeEvery(ASYNC_INCERMENT, countWorker);
}
