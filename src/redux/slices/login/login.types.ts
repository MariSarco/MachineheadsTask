
import { FetchStatusEnum } from "../../../services/fetch.type";
import {
  LoginRequest,
  LoginResponse,
} from "../../../services/login/login.service.type";
import { BaseActionType } from "../../action.type";

export interface LoginSliceStateType {
  loginFetchStatus: FetchStatusEnum;
  loginError?: string;
  loginResponse?: LoginResponse;
  isLogin: boolean;
}

export interface LoginActionType extends BaseActionType {
  payload: {
    request: LoginRequest;
  };
}

export interface LoginSuccessActionType extends BaseActionType {
  payload: {
    response: LoginResponse;
  };
}

export interface LoginFailureActionType extends BaseActionType {
  payload: {
    error: string;
  };
}