import { Router } from "express";
import postsService from "./posts.service";

const postsController = Router();

postsController.get("/", (req, res, next) => {
  if (req.body.isHomePage) {
    postsService.getPostsHomPage;
  } else {
    next();
  }
});
postsController.get("/", postsService.getPostsByCategory);
postsController.get("/:postId", postsService.getPost);
postsController.post("/", postsService.createPost);
postsController.put("/:postId", postsService.updatePost);
postsController.delete("/:postId", postsService.deletePost);

export default postsController;
