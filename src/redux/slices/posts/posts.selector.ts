import { StoreStateType } from "../../store.type";

export const postsSelector = {
  currentPage: (state: StoreStateType) => state.posts.currentPage,
  pageCount: (state: StoreStateType) => state.posts.pageCount,
  postResponse: (state: StoreStateType) => state.posts.postsResponse,
};
