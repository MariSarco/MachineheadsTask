/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import { FetchStatusEnum } from "../../../services/fetch.type";
import {
  PostDeleteActionType,
  PostsActionType,
  PostsFailureActionType,
  PostsSliceStateType,
  PostsSuccessActionType,
} from "./posts.types";

const initState: PostsSliceStateType = {
  postsFetchStatus: FetchStatusEnum.IDLE,
  postsError: undefined,
  postsResponse: undefined,
  currentPage: 1,
  pageCount: 1,
};

const postsSlice = createSlice({
  name: "posts",
  initialState: initState,
  reducers: {
    resetAllState: () => ({ ...initState }),

    posts: (state, _action: PostsActionType) => {
      state.postsFetchStatus = FetchStatusEnum.FETCHING;
      state.postsError = "";
    },
    postsSuccess: (state, action: PostsSuccessActionType) => {
      state.postsFetchStatus = FetchStatusEnum.SUCCESS;
      state.postsResponse = action.payload.response;
      state.currentPage = Number(action.payload.currentPage);
      state.pageCount = Number(action.payload.pageCount);
    },
    postsFailure: (state, action: PostsFailureActionType) => {
      state.postsFetchStatus = FetchStatusEnum.FAILURE;
      state.postsError = action.payload.error;
    },
    deletePost: (_state, _action: PostDeleteActionType) => {},
  },
});

export const postsActions = postsSlice.actions;
export const postsReducer = postsSlice.reducer;
