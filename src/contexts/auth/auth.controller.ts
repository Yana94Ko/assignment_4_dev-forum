import { Router } from "express";
import authService from "./auth.service";

const authController = Router();

authController.get("/log-in", authService.logIn);
authController.get("/log-out", authService.logOut);

export default authController;
