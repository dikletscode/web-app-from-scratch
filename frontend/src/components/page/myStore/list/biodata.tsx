import React from "react";

export const List: React.FC<{
  key: string;
  inner: string;
  child?: React.FC;
}> = ({ key, inner, child }) => {
  return (
    <li key={key}>
      {inner} <ul>{child}</ul>
    </li>
  );
};
