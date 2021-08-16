import axiosInstance from "../config/axiosInstance";
import get from "../helper/localstorage";
import { CartUser, CartProduct } from "../interface/cart";

const getCart = (): Promise<CartUser[]> | undefined => {
  if (get.cartId == "") return;
  return new Promise((resolve, reject) => {
    axiosInstance
      .get("/cart/" + get.cartId)
      .then((res) => {
        resolve(res.data.result);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
const moveToCart = (productId: string) => {
  if (get.cartId == "") return;
  return new Promise((resolve, reject) => {
    axiosInstance
      .post("/cart/" + get.cartId + `/${productId}`)
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
