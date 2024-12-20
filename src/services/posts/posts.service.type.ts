interface PreviewPicture {
  id: number;
  name: string;
  url: string;
}
interface Post {
  id: number;
  title: string;
  code: string;
  authorName: string;
  previewPicture: PreviewPicture;
  tagNames: string[];
  updatedAt: string;
  createdAt: string;
}
export type PostsResponse = Post[];

export interface Payload {
  payload: number;
}