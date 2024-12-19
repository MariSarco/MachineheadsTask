import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import { loginWatcherSaga } from './slices/login/login.saga';
import { logoutWatcherSaga } from './slices/login/logout.saga';
import { postsWatcherSaga } from './slices/posts/posts.saga';
import { deletePostWatcherSaga } from './slices/posts/deletePost.saga';

export const rootSagaMiddleware = createSagaMiddleware();

export function* rootSaga() {
  yield all([loginWatcherSaga(), logoutWatcherSaga(), postsWatcherSaga(), deletePostWatcherSaga()]);
}
