export type CreatePost = {
  title: string;
  content: string;
  authorId: number;
  categoryId: number;
};
export type UpdatePost = {
  id: number;
  title: string;
  content: string;
  authorId: number;
  categoryId: number;
};
