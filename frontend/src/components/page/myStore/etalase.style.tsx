import { CSSProperties } from "react";

const left = {
  backgroundColor: "white",
  padding: "0px",
  fontSize: "1em",
  width: "20vw",
  height: "80vh",
  overflow: "hidden",
} as CSSProperties;

const list = {
  listStyle: "none",
  display: "flex",
  flexDirection: "column",
  lineHeight: "39px",
  padding: "30px",
} as CSSProperties;

const right = {
  display: "flex",
  backgroundColor: "#f0efeb",
  width: "80vw",
  flexDirection: "column",
};
const box = {
  display: "flex",
  flexWrap: "wrap",
  height: "70vh",
  justifyContent: "space-evenly",
  padding: "20px",
} as CSSProperties;
const product = {
  backgroundColor: "red",
  width: "170px",
  height: "170px",
} as CSSProperties;
const nav = {
  display: "flex",
  padding: "50px",
  justifyContent: "space-between",
};
export default {
  left,
  list,
  box,
  product,
  nav,
};
