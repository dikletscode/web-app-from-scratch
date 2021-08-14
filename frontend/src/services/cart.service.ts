import axiosInstance from "../config/axiosInstance";
import { getStoreId, getCartId } from "../helper/localstorage";
import { CartUser, CartProduct } from "../interface/cart";

const getCart = (): Promise<CartUser[]> | undefined => {
  if (getCartId() == "") return;
  return new Promise((resolve, reject) => {
    axiosInstance
      .get("/cart/" + getCartId())
      .then((res) => {
        resolve(res.data.result);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
const moveToCart = (productId: string) => {
  if (getCartId() == "") return;
  return new Promise((resolve, reject) => {
    axiosInstance
      .post("/cart/" + getCartId() + `/${productId}`)
      .then((res) => {
        console.log(res.data);
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
        console.log(err);
      });
  });
};

export default {
  getCart,
  moveToCart,
};
