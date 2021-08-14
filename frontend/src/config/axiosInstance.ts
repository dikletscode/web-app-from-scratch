import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { setLogin } from "../reducer/auth";
import { setError } from "../reducer/error";
import { store } from "../store";

const url = "http://localhost:2021";

const axiosInstance = axios.create({
  baseURL: url,
  withCredentials: true,
});
const { dispatch } = store;

// let data: any = JSON.parse(localStorage.getItem("data") || "{}") || {};

const refresh = () => {
  // console.log(data.refreshToken, "toke");
  return axiosInstance.get("/refreshToken");
};

axiosInstance.interceptors.response.use(undefined, (err) => {
  const { status } = err.response;
  console.log(err);
  if (err.response.data.message == "expired") {
    refresh()
      .then((res) => {
        window.location.reload();
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  if (status == 400) {
    dispatch(setError({ errorCode: 400, isError: true }));
  }
  // if (status == 404) {
  //   window.location.href = "/404";
  // }
  console.log(err, "intercept");
  return Promise.reject(err);
});
export default axiosInstance;
