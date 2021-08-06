import axiosInstance from "../config/axiosInstance";

import Cookies from "universal-cookie";

const cookies = new Cookies();

export const getProfile = (id: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    axiosInstance
      .get(`/profile/${id}`, {
        headers: {
          Authorization: `Bearer ${cookies.get("secret")}`,
        },
      })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
