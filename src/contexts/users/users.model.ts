import prismaClient from "../../prisma/client.prisma";
import { SignUpDto } from "./users.dto";

const findOneByEmail = async (email: string) => {
  const user = await prismaClient.user.findUnique({
    where: { email: email },
    select: {
      id: true,
      email: true,
      encryptedPassword: true,
      created_at: true,
    },
  });
  return user;
};
const findOne = async (userId: number) => {
  const user = await prismaClient.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      email: true,
      encryptedPassword: true,
      created_at: true,
    },
  });
  return user;
};

const signUp = async (dto: SignUpDto) => {
  const newUser = await prismaClient.user.create({
    data: dto,
    select: {
      id: true,
      email: true,
      created_at: true,
    },
  });
  return newUser;
};

const usersModel = {
  findOneByEmail,
  findOne,
  signUp,
};
export default usersModel;
