import { Router } from "express";
import commentService from "./coments.service";

const commentController = Router();

commentController.get("/", commentService.getComment);
commentController.get("/", commentService.getComment);
commentController.get("/", commentService.getComment);
commentController.get("/", commentService.getComment);
