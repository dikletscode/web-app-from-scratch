import { PrismaClient } from ".prisma/client";
import { User } from "../types/type";
import { TermSeller, Product } from "../types/type";

const prisma = new PrismaClient();

export const createAccount = (obj: User, hash: string) => {
  return prisma.user.create({
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

export const createProduct = (obj: Product, storeId: number) => {
  return prisma.productSeller.create({
    data: {
      productName: obj.productName,
      price: obj.price,
      total: obj.total,
      images: obj.images,

      storeAddress: { connect: { id: storeId } },
    },
  });
};
