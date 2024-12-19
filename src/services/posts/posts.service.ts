import { client } from "../client";

export const postsService = {
  posts: async (currentPage: number) => {
    try {
      const url: string = "/manage/posts";
      const response = await client.get(url, { params: { page: currentPage } });
      return response;
    } catch (error) {
      console.log("error:", error);
      return error;
    }
  },
  deletePosts: async (postId: number) => {
    try {
      const url: string = "/manage/posts/remove";
      const response = await client.delete(url, { params: { id: postId } });
      return response;
    } catch (error) {
      console.log("error:", error);
      throw error;
    }
  },
};