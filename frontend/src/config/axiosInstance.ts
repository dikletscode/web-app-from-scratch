import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const url = "http://localhost:2021";

const axiosInstance = axios.create({
  baseURL: url,
  withCredentials: true,
});

// let data: any = JSON.parse(localStorage.getItem("data") || "{}") || {};

const refresh = () => {
  // console.log(data.refreshToken, "toke");
  return axiosInstance.get("/refreshToken");
};

axiosInstance.interceptors.response.use(
  (res: AxiosResponse) => {
    return Promise.resolve(res);
  },
  (err) => {
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
    console.log(err, "intercept");
    return Promise.reject(err);
  }
);
export default axiosInstance;
