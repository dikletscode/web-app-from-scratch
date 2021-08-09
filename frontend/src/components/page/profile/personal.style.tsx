import { CSSProperties } from "react";

const info = {
  display: "flex",
  paddingTop: "0px",
  flexDirection: "row",
  overflow: "auto",
  fontSize: "1em",
} as CSSProperties;

const infoPersonal = {
  display: "flex",
  flexDirection: "column",
  width: "60%",
  paddingTop: "0px",
} as React.CSSProperties;

const navBar = {
  paddingTop: "40px",
  display: "flex",
  listStyle: "none",
} as React.CSSProperties;

const avatar = {
  height: "100px",
  width: "100px",
  borderRadius: "50%",
  objectFit: "cover",
} as React.CSSProperties;

export default {
  info,
  infoPersonal,
  navBar,
  avatar,
};
