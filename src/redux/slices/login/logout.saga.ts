import { put, takeLatest } from 'redux-saga/effects';
import { loginActions } from './login.slice';
import Cookies from "js-cookie";

function* logoutSaga() {
  try {
    Cookies.remove("access_token");
    Cookies.remove("refresh_token");
  } catch (error) {
    console.log(error);
  } finally {
    yield put(loginActions.resetLogin());
  }
}

export function* logoutWatcherSaga() {
  yield takeLatest(loginActions.logout.type, logoutSaga);
}
