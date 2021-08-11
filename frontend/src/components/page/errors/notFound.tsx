import notFound from "./notfound.png";
import React from "react";

export const NotFound = () => {
  return (
    <img
      src={notFound}
      alt=""
      style={{
        display: "block",
        height: "100%",
        width: "100%",
        position: "absolute",
        objectFit: "cover",
        overflow: "hidden",
        zIndex: 3,
        paddingTop: "0px",
      }}
    />
  );
};
