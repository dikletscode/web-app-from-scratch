import axiosInstance from "../config/axiosInstance";

export interface LoginTypes {
  usernameOrEmail: string;
  password: string;
}
export interface SignUpTypes {
  username: string;
  email: string;
  password: string;
}

const logout = () => {
  return new Promise((resolve, reject) => {
    axiosInstance
      .get("/logout")
      .then((res) => {
        resolve(res);
        localStorage.removeItem("userId");
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
        localStorage.setItem("userId", res.data.result.id);
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
