import axiosInstance from "../config/axiosInstance";
import { getUserId } from "../helper/localstorage";
import { LoginTypes, SignUpTypes } from "../interface/auth";

let id = getUserId();

const logout = () => {
  return new Promise((resolve, reject) => {
    id == ""
      ? resolve("")
      : axiosInstance
          .delete(`/logout/${id}`)
          .then((res) => {
            resolve(res);
            localStorage.removeItem("_id");
          })
          .catch((err) => {
            reject(err);
          });
  });
};

const login = (data: LoginTypes): Promise<any> => {
  return new Promise((resolve, reject) => {
    axiosInstance
      .post("/login", data)
      .then((res) => {
        localStorage.setItem("_id", JSON.stringify(res.data.result));
        console.log(res.data.result);
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
