import { RequestHandler } from "express";
import { CreatePost, UpdatePost } from "./posts.dto";
import postsModel from "./posts.model";

const getPostsHomPage: RequestHandler = async (req, res) => {
  const frontendPosts = await postsModel.findManyWithLimit(1);
  const backendPosts = await postsModel.findManyWithLimit(2);
  const posts = { frontendPosts: frontendPosts, backendPosts: backendPosts };
  return res.json(posts);
};
const getPostsByCategory: RequestHandler = async (req, res) => {
  const categoryId = Number(req.body.categoryId);
  const posts = await postsModel.findMany(categoryId);
  return posts;
};
const getPost: RequestHandler = async (req, res) => {
  const postId = Number(req.params.postId);
  const post = postsModel.findOne(postId);
  return res.json(post);
};
const createPost: RequestHandler = async (req, res) => {
  const dto: CreatePost = req.body;
  const newPost = await postsModel.createPost(dto);
  return res.json(newPost);
};
const updatePost: RequestHandler = async (req, res) => {
  const dto: UpdatePost = req.body;
  const updatedPost = await postsModel.updatePost(dto);
  return res.json(updatePost);
};
const deletePost: RequestHandler = async (req, res) => {
  const postId = Number(req.params.postId);
  const result = postsModel.deletePost(postId);
  return res.json({ result: result });
};

const postsService = {
  getPostsHomPage,
  getPost,
  getPostsByCategory,
  createPost,
  updatePost,
  deletePost,
};
export default postsService;
