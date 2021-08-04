import { PrismaClient } from ".prisma/client";
import { dataSeller, profile } from "@prisma/client";
import { UserLogin } from "../types/type";
const prisma = new PrismaClient();

export const getAccount = async (obj: UserLogin) => {
  return await prisma.user.findFirst({
    where: {
      OR: [{ email: obj.usernameOrEmail }, { username: obj.usernameOrEmail }],
    },
  });
};

export const getProfile = async (id: string): Promise<any> => {
  return await prisma.user.findUnique({
    where: { id: id },
    select: {
      id: true,
      username: true,
      email: true,
      role: true,
      profile: true,
    },
  });
};
export const getDetail = async (id: number): Promise<profile | null> => {
  return await prisma.profile.findUnique({
    where: { id: id },
  });
};
export const getSellerInfo = async (id: number): Promise<dataSeller | null> => {
  return await prisma.dataSeller.findUnique({
    where: { id: id },
    include: { storeAdress: true },
  });
};
