import { CSSProperties } from "react";

export default {
  container: {
    height: "90vh",
    padding: "20px",
    display: "flex",
    fontFamily: " 'Rajdhani', sans-serif",
    fontSize: "1.2em",
  } as CSSProperties,

  cart: {
    width: "70%",
    height: "80%",
    padding: "10px",
  } as CSSProperties,

  confirm: {
    height: "80vh",
    width: "50%",
  } as CSSProperties,

  list: {
    height: "190px",
    padding: "10px",
  } as CSSProperties,

  product: {
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 2px 2px",
    padding: "10px",
  } as CSSProperties,

  images: {
    height: "110px",
    width: "100px",
    borderRadius: "5%",
    objectFit: "cover",
  } as CSSProperties,

  oneProduct: {
    padding: "2px",
    display: "flex",
    width: "90%",
    alignItems: "center",
    justifyContent: "space-between",
  } as CSSProperties,

  check: {
    transform: "scale(2)",
  } as CSSProperties,
};
