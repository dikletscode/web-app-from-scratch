import axiosInstance from "../config/axiosInstance";
import { getUserId } from "../helper/localstorage";

export interface LoginTypes {
  usernameOrEmail: string;
  password: string;
}
export interface SignUpTypes {
  username: string;
  email: string;
  password: string;
}
let id = getUserId();

const logout = () => {
  return new Promise((resolve, reject) => {
    axiosInstance
      .get(`/logout/${id}`)
      .then((res) => {
        resolve(res);
        localStorage.removeItem("_id");
      })
      .catch((err) => {
        reject(err);
      });
  });
};

interface typ {
  userId: string;
  profileId: number;
}

const login = (data: LoginTypes): Promise<any> => {
  return new Promise((resolve, reject) => {
    axiosInstance
      .post("/login", data)
      .then((res) => {
        localStorage.setItem("_id", JSON.stringify(res.data.result));
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const signup = (data: SignUpTypes) => {
  return new Promise((resolve, reject) => {
    axiosInstance
      .post("/signup", data)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export default { login, signup, logout };
