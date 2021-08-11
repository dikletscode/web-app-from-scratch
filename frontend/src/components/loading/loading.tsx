import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import gif from "./asu.gif";

const block = {
  display: "block",
} as React.CSSProperties;

const hide = {
  display: "none",
} as React.CSSProperties;

const Loading = () => {
  const loadingState = useSelector((state: RootState) => state.auth.isLoading);

  return (
    <div style={loadingState == true ? block : hide}>
      <img src={gif} alt="" style={{ height: "200px" }} />
    </div>
  );
};
export default Loading;
