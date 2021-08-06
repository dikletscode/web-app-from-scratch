import React from "react";

const info = {
  display: "flex",
  paddingTop: "0px",
  flexDirection: "row",
  overflow: "auto",
  fontSize: "1em",
} as React.CSSProperties;

const infoPersonal = {
  display: "flex",
  flexDirection: "column",
  paddingTop: "0px",
} as React.CSSProperties;

const navBar = {
  paddingTop: "40px",
  display: "flex",
  listStyle: "none",
} as React.CSSProperties;

const upload = {
  border: "1px solid #ccc",
  display: "inline-block",
  padding: "6px 12px",
  cursor: "pointer",
} as React.CSSProperties;

const infoData = {
  display: "flex",
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
  info,
  infoPersonal,
  navBar,
  upload,
  infoData,
  buttonSeller,
};
