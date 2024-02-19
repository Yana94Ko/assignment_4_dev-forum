import { Router } from "express";
import authController from "./auth/auth.controller";
import postsController from "./posts/posts.controller";
import usersController from "./users/users.controller";

const controllers = Router();

controllers.use("/auth", authController);
controllers.use("/user", usersController);
controllers.use("/posts", postsController);

export default controllers;
