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

  describe: {
    width: "150px",
    padding: 0,
    margin: 0,
    listStyle: "none",
    opacity: 0,
    transform: "translateY(-50%) translateX(-50%)",
    position: "absolute",
    top: "60%",
    left: "50%",
    zIndex: 1,
    transition: "all 0.3s ease 0s",
  } as CSSProperties,
  describeHover: {
    opacity: 1,
    top: "80%",
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
  box: {
    position: "relative",
    transition: "all 0.3s ease 0s",
  } as CSSProperties,
};
