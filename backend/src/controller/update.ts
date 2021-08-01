import { PrismaClient } from ".prisma/client";
import { Profile } from "../model/type";

const prisma = new PrismaClient();

export const updateProfile = async (obj: Profile, profileId: number) => {
  return await prisma.profile.update({
    data: {
      fullname: obj.fullname,
      address: obj.address,
      noTelp: obj.noTelp,
    },
    where: {
      profileId: profileId,
    },
  });
};

export const updateImage = async (images: string, profileId: number) => {
  return await prisma.profile.update({
    data: {
      images: images,
    },
    where: {
      profileId: profileId,
    },
  });
};

export const sellerRegister = async (userId: string) => {
  return await prisma.user.update({
    data: {
      roleId: 1,
    },
    where: { userId: userId },
  });
};
