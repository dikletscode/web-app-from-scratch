import { PrismaClient } from ".prisma/client";
import { productSeller, profile } from "@prisma/client";
import { UserLogin } from "../types/type";
const prisma = new PrismaClient();

export const getAccount = async (obj: UserLogin) => {
  return await prisma.user.findFirst({
    where: {
      OR: [{ email: obj.usernameOrEmail }, { username: obj.usernameOrEmail }],
    },
    include: {
      profile: {
        select: {
          detailForSeller: {
            select: { storeAdress: { select: { id: true } } },
          },
        },
      },
    },
  });
};

export const getProfile = async (id: string): Promise<any> => {
  return await prisma.user.findUnique({
    where: { id: id },
    include: {
      profile: true,
    },
  });
};
export const getDetail = async (id: number): Promise<profile | null> => {
  return await prisma.profile.findUnique({
    where: { id: id },
  });
};

export const getStoreInfo = async (id: number): Promise<any> => {
  return await prisma.storeInfo.findUnique({
    where: { id },
    include: { etalase: true },
  });
};

export const getSellerProduct = async (
  id: number
): Promise<productSeller | null> => {
  return await prisma.productSeller.findUnique({
    where: { id: id },
  });
};
