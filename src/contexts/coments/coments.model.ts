import prismaClient from "../../prisma/client.prisma";
import { CreateComment, UpdateComment } from "./coments.dto";

const findOne = async (commentId: number) => {
  const post = await prismaClient.comment.findUnique({
    where: { id: commentId },
  });
  return post;
};
const findManyByUserId = async (userId: number) => {
  const posts = await prismaClient.comment.findMany({
    where: {
      userId: userId,
    },
  });
  return posts;
};
const findManyByPostId = async (postId: number) => {
  const posts = await prismaClient.comment.findMany({
    where: {
      postId: postId,
    },
  });
  return posts;
};
const createComment = async (dto: CreateComment) => {
  const newPost = await prismaClient.comment.create({ data: dto });
  return newPost;
};
const updateComment = async (dto: UpdateComment) => {
  const UpdatedComment = await prismaClient.comment.update({
    where: {
      id: dto.id,
    },
    data: {
      comment: dto.comment,
    },
  });
  return UpdatedComment;
};
const deleteComment = async (postId: number) => {
  await prismaClient.comment.delete({
    where: {
      id: postId,
    },
  });
  return `Successfully deleted post No ${postId}`;
};

const commentModel = {
  findOne,
  findManyByPostId,
  findManyByUserId,
  createComment,
  updateComment,
  deleteComment,
};

export default commentModel;
