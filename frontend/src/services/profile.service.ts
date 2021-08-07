import axiosInstance from "../config/axiosInstance";
import { id } from "../app";

export interface ProfileTypes {
  email: string;
  username: string;
  profile: {
    id: number;
    address: string;
    fullname: string;
    images: Blob;
    noTelp: string;
  };
  role: object;
}
export interface ProfileDb extends Omit<ProfileTypes, "profile"> {
  username: string;
  profile: {
    images: string;
  };
}

export const getProfile = (): Promise<any> => {
  return new Promise((resolve, reject) => {
    axiosInstance
      .get(`/profile/${id}`)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const updateProfile = (
  id: number,
  obj: ProfileTypes[]
): Promise<any> => {
  return new Promise((resolve, reject) => {
    axiosInstance
      .patch(`/profile/update/${id}`, {
        fullname: obj[0].profile.fullname,
        noTelp: obj[0].profile.noTelp,
        address: obj[0].profile.address,
      })
      .then((res) => {
        resolve(res.data);
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
