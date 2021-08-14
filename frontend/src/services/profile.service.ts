import axiosInstance from "../config/axiosInstance";
import { getUserId } from "../helper/localstorage";
import { UserTypes, ProfileTypes } from "../interface/profile";

let id = getUserId();

export const getUserInfo = (): Promise<UserTypes> | undefined => {
  return new Promise((resolve, reject) => {
    id == ""
      ? undefined
      : axiosInstance
          .get(`/profile/${id}`)
          .then((res) => {
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
