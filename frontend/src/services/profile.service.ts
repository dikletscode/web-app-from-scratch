import axiosInstance from "../config/axiosInstance";
import { getUserId } from "../helper/localstorage";

export type ProfileTypes = {
  id: number;
  address: string;
  fullname: string;
  images: string;
  noTelp: string;
};

export type UserTypes = {
  email: string;
  username: string;
  profile: ProfileTypes;
  role: object;
};

let id = getUserId();

export const getUserInfo = (): Promise<UserTypes> => {
  return new Promise((resolve, reject) => {
    axiosInstance
      .get(`/profile/${id}`)
      .then((res) => {
        console.log(res.data);
        resolve(res.data.result);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const updateProfile = (
  id: number,
  obj: ProfileTypes[]
): Promise<ProfileTypes> => {
  return new Promise((resolve, reject) => {
    axiosInstance
      .patch(`/profile/update/${id}`, {
        fullname: obj[0].fullname,
        noTelp: obj[0].noTelp,
        address: obj[0].address,
      })
      .then((res) => {
        resolve(res.data.result);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
export const updateImages = (id: number, obj: FormData): Promise<any> => {
  return new Promise((resolve, reject) => {
    axiosInstance
      .patch(`/profile/update/image/${id}`, obj)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
