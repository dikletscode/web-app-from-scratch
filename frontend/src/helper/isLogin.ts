const id = localStorage.getItem("userId");

export const isLogin = () => {
  if (id === null || id === "") {
    return false;
  } else {
    return true;
  }
};
