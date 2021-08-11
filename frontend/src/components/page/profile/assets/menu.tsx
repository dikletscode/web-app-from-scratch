import React, { RefObject } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../../../store";

const style = {
  display: {
    padding: "20px",
  } as React.CSSProperties,
  hide: {
    display: "nonde",
  } as React.CSSProperties,
};

let menu = [
  {
    key: "personal",
    href: "profile?tab=bio",
    title: "change personal information",
  },
  { key: "registerSeller", href: "profile?tab=seller", title: "start selling" },
  { key: "transac", href: "profile?tab=bio", title: "transac" },
  { key: "address", href: "profile?tab=bio", title: "new address" },
];

export const List = (): JSX.Element => {
  const isSeller = useSelector((state: RootState) => state.auth.isSeller);

  if (isSeller == true) {
    delete menu[1];
  }
  console.log(menu);

  return (
    <>
      {menu.map((item: any) => {
        return (
          <li key={item.key} style={style.display}>
            <Link to={item.href}>{item.title} </Link>
          </li>
        );
      })}
    </>
  );
};
