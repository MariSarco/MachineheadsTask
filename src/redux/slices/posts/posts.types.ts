import { PayloadAction } from "@reduxjs/toolkit";
import { FetchStatusEnum } from "../../../services/fetch.type";
import { BaseActionType } from "../../action.type";
import { PostsResponse } from "../../../services/posts/posts.service.type";

export interface PostsSliceStateType {
  postsFetchStatus: FetchStatusEnum;
  postsError?: string;
  postsResponse?: PostsResponse;
  currentPage: number;
  pageCount: number;
}

export interface PostsActionType extends BaseActionType {
  payload: number;
}

export interface PostDeleteActionType extends BaseActionType {
  payload: number;
}

export interface PostsSuccessActionType extends BaseActionType {
  payload: {
    response: PostsResponse;
    currentPage: number;
    pageCount: number
  };
}

export interface PostsFailureActionType extends BaseActionType {
  payload: {
    error: string;
  };
}

export type RefreshTokenActionType = PayloadAction;
