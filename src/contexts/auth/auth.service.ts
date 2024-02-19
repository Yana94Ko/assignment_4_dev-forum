import bcrypt from "bcrypt";
import { RequestHandler } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET_KEY } from "../../config";
import usersModel from "../users/users.model";
import { LogInHttpRequest } from "./auth.dto";

const logIn: RequestHandler = async (req, res) => {
  const { email, password }: LogInHttpRequest = req.body;

  const user = await usersModel.findOneByEmail(email);
  if (!user) return res.status(404).send(`User Not Found by email : ${email}`);

  const isVerified = await bcrypt.compare(password, user.encryptedPassword);

  if (!isVerified) return res.send(400);

  const accessToken = jwt.sign(
    {
      email: user.email,
      userId: user.id,
    },
    JWT_SECRET_KEY,
    { subject: user.id.toString() }
  );
  res.json(accessToken);
};
const logOut: RequestHandler = (req, res) => {
  const accessToken = req.headers.authorization?.split("Bearer ")[1];
  //jwt 활성키 삭제
};

const authService = {
  logIn,
  logOut,
};

export default authService;
