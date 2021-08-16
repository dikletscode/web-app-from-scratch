import axios from "axios";

import { setError } from "../reducer/error";
import { store } from "../store";

const url = "http://localhost:2021";

const axiosInstance = axios.create({
  baseURL: url,
  withCredentials: true,
});
const { dispatch } = store;

const refresh = () => {
  return axiosInstance.get("/refreshToken");
};

axiosInstance.interceptors.response.use(undefined, (err) => {
  const { status } = err.response;
  console.log(err);
  if (err.response.data.message == "expired") {
    refresh()
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  }
  if (status == 400) {
    dispatch(setError({ errorCode: 400, isError: true }));
  }

  console.log(err, "intercept");
  return Promise.reject(err);
});
export default axiosInstance;
