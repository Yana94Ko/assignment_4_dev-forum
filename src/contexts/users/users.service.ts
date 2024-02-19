import bcrypt from "bcrypt";
import { RequestHandler } from "express";
import { SignUpDto } from "./users.dto";
import userModel from "./users.model";

export const signUp: RequestHandler = async (req, res) => {
  const { email, password, ...rest } = req.body;
  const user = await userModel.findOneByEmail(email);

  if (user)
    return res.status(409).json({ success: false, message: "이메일 중복" });

  const encryptedPassword = await encryptPassword(password);
  const dto: SignUpDto = { email, encryptedPassword, ...rest };

  const newUser = await userModel.signUp(dto);
  return res.json({ data: newUser });
};
const encryptPassword = async (password: string) => {
  return await bcrypt.hash(password, 12);
};

const usersService = {
  signUp,
};
export default usersService;
