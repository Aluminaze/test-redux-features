import { put, call, takeEvery, delay } from "redux-saga/effects";
import axios from "axios";
import { getUsers } from "../actions";
import { FETCH_USERS } from "../types";

function* fetchUsers() {
  try {
    const response = yield call(axios.get, [
      "https://jsonplaceholder.typicode.com/users",
    ]);

    yield put(getUsers(response.data));
  } catch (error) {
    console.log(error.message);
  }
}

export function* usersWatcher() {
  yield takeEvery(FETCH_USERS, fetchUsers);
}
