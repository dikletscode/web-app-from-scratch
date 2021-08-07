import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
export const Product = () => {
  const loginStatus = useSelector((state: RootState) => state.auth.isLogin);
  console.log(loginStatus, "asw");
  return (
    <div style={{ color: "red" }}>
      <p>akus {loginStatus}</p>
    </div>
  );
};
