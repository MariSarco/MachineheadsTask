import { call, takeLatest } from "redux-saga/effects";
import { postsService } from "../../../services/posts/posts.service";
import { Payload, PostsResponse } from "../../../services/posts/posts.service.type";
import { postsActions } from "./posts.slice";
import { AxiosResponse } from "axios";

function* deletePost({ payload: postId }: Payload) {
  try {
    const response: AxiosResponse<PostsResponse> = yield call(
      postsService.deletePosts,
      postId
    );

    if (!response?.data) {
      throw new Error("Delete post failed");
    }
  } catch (error) {
    console.log(error);
  } 
}

export function* deletePostWatcherSaga() {
  yield takeLatest(postsActions.deletePost, deletePost);
}
