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
    select: {
      username: true,
      roleId: true,
      profile: true,
    },
  });
};
export const getStoreId = async (id: number) => {
  return await prisma.dataSeller.findUnique({
    where: { profileId: id },
    include: { storeAdress: { select: { id: true } } },
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

export const getAllProduct = async () => {
  return await prisma.productSeller.findMany();
};
