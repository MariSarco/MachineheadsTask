/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import {
  LoginSliceStateType,
  LoginActionType,
  LoginSuccessActionType,
  LoginFailureActionType,
} from "./login.types";
import Cookies from "js-cookie";
import { FetchStatusEnum } from "../../../services/fetch.type";

const initState: LoginSliceStateType = {
  loginFetchStatus: FetchStatusEnum.IDLE,
  loginError: undefined,
  loginResponse: undefined,
  isLogin: !!Cookies.get("access_token"),
};

const loginSlice = createSlice({
  name: "login",
  initialState: initState,
  reducers: {
    resetAllState: () => ({ ...initState }),

    login: (state, _action: LoginActionType) => {
      state.loginFetchStatus = FetchStatusEnum.FETCHING;
      state.loginError = "";
    },
    loginSuccess: (state, action: LoginSuccessActionType) => {
      state.loginFetchStatus = FetchStatusEnum.SUCCESS;
      state.isLogin = true;
      state.loginResponse = action.payload.response;
    },
    loginFailure: (state, action: LoginFailureActionType) => {
      state.loginFetchStatus = FetchStatusEnum.FAILURE;
      state.loginError = action.payload.error;
      state.isLogin = false;
    },
    resetLogin: () => {
      return initState;
    },
    logout: () => {},
  },
});

export const loginActions = loginSlice.actions;
export const loginReducer = loginSlice.reducer;
