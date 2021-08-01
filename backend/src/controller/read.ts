import { PrismaClient } from ".prisma/client";
import { profile } from "@prisma/client";
import { UserLogin } from "../model/type";
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
    where: { userId: id },
    select: {
      userId: true,
      username: true,
      email: true,
      role: true,
      profile: true,
    },
  });
};
export const getDetail = async (id: number): Promise<profile | null> => {
  return await prisma.profile.findUnique({
    where: { profileId: id },
  });
};
