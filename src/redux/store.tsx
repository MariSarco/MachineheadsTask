import { configureStore } from "@reduxjs/toolkit";
import { rootSaga, rootSagaMiddleware } from "./root.saga";
import { combineReducers } from "@reduxjs/toolkit";
import { loginReducer } from "./slices/login/login.slice";
import { postsReducer } from "./slices/posts/posts.slice";

const rootReducer = combineReducers({
  login: loginReducer,
  posts: postsReducer,
});

export const setupStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(rootSagaMiddleware),
  });
  rootSagaMiddleware.run(rootSaga);
  return store;
};

export const store = setupStore();
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
