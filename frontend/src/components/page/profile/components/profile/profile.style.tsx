import React from "react";

const avatar = {
  height: "100px",
  width: "100px",
  borderRadius: "50%",
  objectFit: "cover",
} as React.CSSProperties;

const content = {
  width: "140px",
} as React.CSSProperties;

const upload = {
  border: "1px solid #ccc",
  display: "inline-block",
  padding: "6px 12px",
  cursor: "pointer",
} as React.CSSProperties;

const infoData = {
  display: "flex",
  justifyContent: "space-evenly",
  width: "100%",

  alignContent: "space-evenly",
} as React.CSSProperties;

const buttonSeller = {
  height: "50px",
  background: "linear-gradient(45deg, transparent 5%, #ff013c 5%)",
  border: 0,
  color: "#fff",
  fontSize: "1em",
  boxShadow: "6px 0px 0px #00e6f6",
  outline: "transparent",
  transitionDuration: "0.9s",
} as React.CSSProperties;

export default {
  avatar,
  content,

  upload,
  infoData,
  buttonSeller,
};
