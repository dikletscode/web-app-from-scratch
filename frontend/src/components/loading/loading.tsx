import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import gif from "./asu.gif";

const Loading = () => {
  const loadingState = useSelector((state: RootState) => state.auth.isLoading);

  if (loadingState == true) {
    return (
      <div style={{ textAlign: "center" }}>
        <img src={gif} alt="" style={{ height: "200px" }} />
      </div>
    );
  } else {
    return <></>;
  }
};
export default Loading;
