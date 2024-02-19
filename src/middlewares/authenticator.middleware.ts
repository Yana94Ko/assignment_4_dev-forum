import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET_KEY } from "../config";
import usersModel from "../contexts/users/users.model";

const freePassRoutes = [
  "/user/sign-up",
  "/auth/log-in",
  "/board",
  "/board/:boardId",
];

export default async function authenticator(
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (freePassRoutes.includes(req.url)) return next();

  const accessToken = req.headers.authorization?.split("Bearer ")[1];
  if (!accessToken) return res.sendStatus(401);

  try {
    const { sub: id } = jwt.verify(accessToken, JWT_SECRET_KEY);
    if (id) return res.sendStatus(404);
    const user = await usersModel.findOne(Number(id));
    if (!user) return res.sendStatus(404);

    req.user = user;
  } catch (e) {
    return res.sendStatus(401);
  }

  next();
}
