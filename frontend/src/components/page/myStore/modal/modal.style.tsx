import { CSSProperties } from "react";

export default {
  container: {
    display: "block",
    padding: "20px",
    position: "absolute",
    zIndex: 3,
    backgroundColor: "white",
    marginTop: "50px",
    width: "70vw",
    border: "2px solid red",
  } as CSSProperties,

  hideContainer: {
    display: "none",
    padding: "20px",
    position: "absolute",
    backgroundColor: "white",
    marginTop: "50px",
    width: "70vw",
    border: "2px solid red",
  } as CSSProperties,

  input: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    padding: "10px",
    height: "50vh",
    width: "90%",
  } as CSSProperties,
};
