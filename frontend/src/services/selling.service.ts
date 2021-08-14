import axiosInstance from "../config/axiosInstance";
import { SellerRegis, StoreInfo } from "../interface/seller";

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
      .get("/store/product")
      .then((res) => {
        console.log(res.data.result);
        resolve(res.data.result);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const getBuyyerProduct = (): Promise<any> => {
  return new Promise((resolve, reject) => {
    axiosInstance
      .get("/product")
      .then((res) => {
        console.log(res.data.result);
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
