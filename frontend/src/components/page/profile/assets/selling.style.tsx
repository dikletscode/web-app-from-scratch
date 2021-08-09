import React from "react";

const container = {
  padding: "30px",
  height: "35%",
  width: "65%",
} as React.CSSProperties;

const input = {
  display: "flex",
  flexDirection: "column",
} as React.CSSProperties;

const form = {
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "column",
} as React.CSSProperties;

const content = {
  padding: "50px",
} as React.CSSProperties;

const city = {
  padding: 0,
  display: "flex",
} as React.CSSProperties;

const box = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "0px",
} as React.CSSProperties;

export default {
  container,
  input,
  city,
  box,
  form,
  content,
};
