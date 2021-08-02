import { PrismaClient } from ".prisma/client";
import { TermSeller, Product, User } from "../model/type";

const prisma = new PrismaClient();

import bcrypt from "bcrypt";

export const createAccount = async (obj: User) => {
  let hash = await bcrypt.hash(obj.password, 10);
  return await prisma.user.create({
    data: {
      username: obj.username,
      email: obj.email,
      password: hash,
      role: { connect: { roleId: 2 } },
      profile: {
        create: {},
      },
    },
  });
};

export const createTbSeller = (obj: TermSeller, id: number) => {
  return prisma.dataSeller.create({
    data: {
      noKtp: obj.noKtp,
      sellerProfile: { connect: { id: id } },
      storeAdress: {
        create: {
          nameStore: obj.nameStore,
          address: obj.address,
          city: obj.city,
          province: obj.province,
        },
      },
    },
  });
};

export const createProduct = (obj: Product, profileId: number) => {
  return prisma.productSeller.create({
    data: {
      productName: obj.productName,
      price: obj.price,
      total: obj.total,
      storeAddress: { connect: { id: profileId } },
    },
  });
};
