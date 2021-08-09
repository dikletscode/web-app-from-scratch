import { CSSProperties } from "react";

const input = {
  display: "flex",
  flexDirection: "column",
  padding: "7px",
} as CSSProperties;

const modal = {
  display: "flex",
  width: "500px",
  height: "200px",
  fontFamily: " 'Rajdhani', sans-serif",
  fontSize: "20px",
  margin: " 5% auto",
  left: 0,
  right: 0,
  backgroundColor: "white",
  zIndex: 3,
  padding: "20px",
  position: "fixed",
  textAlign: "center",
  WebkitAnimationName: "fadeIn" /* Fade in the background */,
  WebkitAnimationDuration: "0.4s",
  animationName: "fadeIn",
  animationDuration: "0.4s",
  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
} as CSSProperties;

export default {
  input,
  modal,
};
