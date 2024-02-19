import prismaClient from "../../prisma/client.prisma";
import { CreatePost, UpdatePost } from "./posts.dto";

const findOne = async (postId: number) => {
  const post = await prismaClient.post.findUnique({ where: { id: postId } });
  return post;
};
const findMany = async (categoryId: number) => {
  const posts = await prismaClient.post.findMany({
    where: { categoryId: categoryId },
    orderBy: { created_at: "desc" },
  });
  return posts;
};
const findManyWithLimit = async (categoryId: number) => {
  const posts = await prismaClient.post.findMany({
    where: { categoryId: categoryId },
    orderBy: { created_at: "desc" },
    take: 10,
  });
  return posts;
};
const createPost = async (dto: CreatePost) => {
  const newPost = await prismaClient.post.create({ data: dto });
  return newPost;
};
const updatePost = async (dto: UpdatePost) => {
  const UpdatedPost = await prismaClient.post.update({
    where: {
      id: dto.id,
    },
    data: {
      title: dto.title,
      content: dto.content,
    },
  });
};
const deletePost = async (postId: number) => {
  await prismaClient.post.delete({
    where: {
      id: postId,
    },
  });
  return `Successfully deleted post No ${postId}`;
};

const postsModel = {
  findManyWithLimit,
  findOne,
  findMany,
  createPost,
  updatePost,
  deletePost,
};
export default postsModel;
