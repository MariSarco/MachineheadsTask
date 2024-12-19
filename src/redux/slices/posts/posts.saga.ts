import { call, put, takeLatest } from "redux-saga/effects";
import { postsService } from "../../../services/posts/posts.service";
import {
  Payload,
  PostsResponse,
} from "../../../services/posts/posts.service.type";
import { postsActions } from "./posts.slice";
import { AxiosHeaders, AxiosResponse } from "axios";
import { loginService } from "../../../services/login/login.service";
import Cookies from "js-cookie";
import { LoginResponse } from "../../../services/login/login.service.type";

function* postsSaga({ payload: page }: Payload) {
  try {
    const response: AxiosResponse<PostsResponse> = yield call(
      postsService.posts,
      page
    );

    if (response.status === 401) {
      Cookies.remove("access_token");
      const refresh_token = String(Cookies.get("refresh_token"));
      const refreshResponse: AxiosResponse<LoginResponse> = yield call(
        loginService.refreshToken,
        refresh_token
      );
      
      const expires = Date.now();
      const accessExpires =
        refreshResponse.data.access_expired_at * 1000 - expires;
      const refreshExpires =
        refreshResponse.data.refresh_expired_at * 1000 - expires;

      Cookies.set("access_token", refreshResponse.data.access_token, {
        path: "/",
        expires: accessExpires,
      });
      Cookies.set("refresh_token", refreshResponse.data.refresh_token, {
        path: "/",
        expires: refreshExpires,
      });
    }

    if (!response?.data) {
      throw new Error("Geting posts failed");
    }

    const headers = response.headers;
    if (
      headers instanceof AxiosHeaders &&
      headers.has("x-pagination-current-page") &&
      headers.has("x-pagination-page-count")
    ) {
      yield put(
        postsActions.postsSuccess({
          response: response?.data,
          currentPage: headers["x-pagination-current-page"],
          pageCount: headers["x-pagination-page-count"],
        })
      );
    }
  } catch (error) {
    const errorMessage = String(error);
    yield put(
      postsActions.postsFailure({
        error: errorMessage || "Geting posts failed",
      })
    );
  }
}

export function* postsWatcherSaga() {
  yield takeLatest(postsActions.posts, postsSaga);
}
