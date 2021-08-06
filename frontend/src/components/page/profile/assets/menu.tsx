import React from "react";

const menu = [
  {
    key: "personal",
    href: "profile?tab=bio",
    title: "change personal information",
  },
  { key: "registerSeller", href: "profile?tab=seller", title: "start selling" },
  { key: "transac", href: "profile?tab=bio", title: "transac" },
  { key: "address", href: "profile?tab=bio", title: "new address" },
];
import { Link } from "react-router-dom";

export const List = menu.map((item: any) => {
  return (
    <li key={item.key} style={{ padding: "20px" }}>
      <Link to={item.href}>{item.title} </Link>
    </li>
  );
});
