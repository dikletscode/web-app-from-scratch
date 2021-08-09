import images from "./images.jpeg";
import React from "react";

const Empty = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100%",
        padding: "100px",
      }}
    >
      <img src={images} alt="" />
      <h1 style={{ alignSelf: "center" }}>let's add your first product</h1>
    </div>
  );
};

export default Empty;
