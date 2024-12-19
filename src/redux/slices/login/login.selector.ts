import { StoreStateType } from "../../store.type";

export const loginSelector = {
  loginFetchStatus: (state: StoreStateType) => state.login?.loginFetchStatus,
  loginError: (state: StoreStateType) => state.login?.loginError,
  loginResponse: (state: StoreStateType) => state.login?.loginResponse,
  isLogin: (state: StoreStateType) => state.login?.isLogin,
};
