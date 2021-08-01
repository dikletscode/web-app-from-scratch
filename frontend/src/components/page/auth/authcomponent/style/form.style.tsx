import React from "react";

const container = {
  width: "500px",
  backgroundColor: "#ffffff",
  fontFamily: " 'Rajdhani', sans-serif",
  boxShadow:
    "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
} as React.CSSProperties;

const input = {
  padding: "60px",
  fontSize: "1.5rem",
} as React.CSSProperties;

const button = {
  backgroundColor: "#f77f00" /* Green */,
  border: "none",
  color: "white",
  padding: "13px",
  borderRadius: "12px",
  textAlign: "center",
  textDecoration: "none",
  display: "inline-block",
  fontSize: "16px",
  margin: "4px 2px",
  cursor: "pointer",
} as React.CSSProperties;

const inputValue = {
  width: "100%",
  textAlign: "start",
  fontSize: "1.3rem",
} as React.CSSProperties;

const label = {
  padding: "8px",
} as React.CSSProperties;

export const styles = {
  container: container,
  input: input,
  inputValue: inputValue,
  label: label,
  button: button,
};
