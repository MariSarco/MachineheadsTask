import { combineReducers } from "@reduxjs/toolkit";
import { loginReducer } from "./slices/login/login.slice";
import { postsReducer } from "./slices/posts/posts.slice";

const rootReducer = combineReducers({
  login: loginReducer,
  posts: postsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
