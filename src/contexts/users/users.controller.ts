import { Router } from "express";
import userService from "./users.service";

const usersController = Router();

usersController.post("/sign-up", userService.signUp);

export default usersController;
