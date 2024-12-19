import { call, put, takeLatest } from "redux-saga/effects";
import { LoginActionType } from "./login.types";
import Cookies from "js-cookie";
import { LoginResponse } from "../../../services/login/login.service.type";
import { Response } from "../../../services/type";
import { loginService } from "../../../services/login/login.service";
import { loginActions } from "./login.slice";

function* loginSaga(action: LoginActionType) {
  try {
    const response: Response<LoginResponse> = yield call(
      loginService.login,
      action.payload.request
    );

    if (!response?.data?.access_token) {
      throw new Error("Login failed");
    }

    const expires = Date.now();
    const accessExpires = response.data.access_expired_at * 1000 - expires;
    const refreshExpires = response.data.refresh_expired_at * 1000 - expires;

    Cookies.set("access_token", response.data.access_token, {
      path: "/",
      expires: accessExpires,
    });
    Cookies.set("refresh_token", response.data.refresh_token, {
      path: "/",
      expires: refreshExpires,
    });

    yield put(
      loginActions.loginSuccess({
        response: response?.data,
      })
    );
  } catch (error) {
    const errorMessage = String(error);
    yield put(
      loginActions.loginFailure({ error: errorMessage || "Login failed" })
    );
  }
}

export function* loginWatcherSaga() {
  yield takeLatest(loginActions.login, loginSaga);
}
