import { CSSProperties } from "react";
export default {
  bigContainer: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  } as CSSProperties,

  image: {
    width: "80%",
    height: "auto",
  } as CSSProperties,

  desc: {
    lineHeight: "0.1",
    paddingTop: "10px",
    padding: "0px",
  } as CSSProperties,

  content: {
    padding: "10px 10px",
    paddingBottom: "0px",
    fontFamily: "'Gowun Dodum', sans-serif",
    height: "92%",
    textAlign: "center",
    boxShadow:
      "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset",
  } as CSSProperties,

  avatar: {
    height: "45px",
    width: "45px",
    objectFit: "cover",
    borderRadius: "50%",
  } as CSSProperties,
  footer: {
    display: "flex",
    flexDirection: "row",
    alignContent: "flex-end",
    fontSize: "0.93em",
    justifyContent: "space-between",
  } as CSSProperties,

  container: {
    paddingTop: "0px",
    padding: "10px",
    height: "260px",
    width: "200px",
  } as CSSProperties,
};
