import { RequestHandler } from "express";
import { CreateComment, UpdateComment } from "./coments.dto";
import commentModel from "./coments.model";

const getComment: RequestHandler = async (req, res) => {
  const commentId = Number(req.params.commentId);
  const comments = await commentModel.findOne(commentId);
  return comments;
};
const createComment: RequestHandler = async (req, res) => {
  const dto: CreateComment = req.body;
  const newComment = await commentModel.createComment(dto);
  return newComment;
};
const updateComment: RequestHandler = async (req, res) => {
  const dto: UpdateComment = req.body;
  const updatedComment = await commentModel.updateComment(dto);
  return updatedComment;
};
const getCommentsByPostId: RequestHandler = async (req, res) => {
  const postId = Number(req.body.postId);
  const comments = await commentModel.findManyByPostId(postId);
  return comments;
};
const getCommentsByUserId: RequestHandler = async (req, res) => {
  const userId = Number(req.body.userId);
  const comments = await commentModel.findManyByPostId(userId);
  return comments;
};
const deleteComment: RequestHandler = async (req, res) => {
  const commentId = Number(req.body.commentId);
  const result = await commentModel.deleteComment(commentId);
  return result;
};
const commentService = {
  getComment,
  createComment,
  updateComment,
  getCommentsByPostId,
  getCommentsByUserId,
  deleteComment,
};
export default commentService;
