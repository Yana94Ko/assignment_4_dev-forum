export type CreateComment = {
  comment: string;
  userId: number;
  postId: number;
};
export type UpdateComment = {
  id: number;
  comment: string;
  userId: number;
  postId: number;
};
