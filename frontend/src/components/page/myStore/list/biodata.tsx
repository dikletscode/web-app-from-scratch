import React from "react";

const leftBar = [
  {
    key: "saldo",
    inner: "saldo",
  },
];

export const List: React.FC<{
  keyProps: string;
  inner: string;
}> = ({ keyProps, inner }) => {
  return (
    <li key={keyProps} id={keyProps}>
      {inner}
    </li>
  );
};
