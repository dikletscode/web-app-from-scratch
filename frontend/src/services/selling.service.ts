import axiosInstance from "../config/axiosInstance";
import { SellerRegis } from "../valueInit/seller";

export interface Product {
  productName: string;
  price: string;
  total: string;
  images: string;
  star?: number;
}

export interface StoreInfo {
  address: string;
  city: string;
  etalase: Product[];
  id: number;
  nameStore: string;
  province: string;
  sellerId: number;
}

export const getStore = (id: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    axiosInstance
      .get("/seller/" + id)
      .then((res) => {
        const data: StoreInfo = res.data.result;
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
export const getAllProduct = (): Promise<any> => {
  return new Promise((resolve, reject) => {
    axiosInstance
      .get("/product")
      .then((res) => {
        resolve(res.data.result);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const register = (obj: SellerRegis, id: number): Promise<any> => {
  return new Promise((resolve, reject) => {
    axiosInstance
      .post("/seller/register/" + id, {
        noKtp: obj.noKtp,
        nameStore: obj.nameStore,
        address: obj.address,
        city: obj.city,
        province: obj.city,
      })
      .then((res) => {
        resolve(res.data.result);
      })
      .catch((err) => {
        console.log(err, "err");
        reject(err);
      });
  });
};
