import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { Link } from "react-router-dom";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

interface Navigation {
  title: string;
  href: string;
  icon?: string;
  inner?: string;
  klik?: () => void;
}

export const Menu: Navigation[] = [
  { title: "Cart", href: "/cart", icon: "fa fa-shopping-cart" },
  { title: "Beranda", href: "/", inner: "Beranda" },
  { title: "Transaksi", href: "/transaction", inner: "Transaction" },
  { title: "Penagihan", href: "/bill", inner: "penagihan" },
  {
    title: "Login",
    href: "/login",
    icon: "fa fa-sign-in",
  },
];

export const ListNav = ({ action }: { action: () => void }) => {
  const loginStatus = useSelector((state: RootState) => state.auth);
  const [menu, setMenu] = useState(Menu);
  const lasindex = menu.length - 1;

  useEffect(() => {
    if (loginStatus.isLogin == true) {
      let del = [...menu];
      del[lasindex] = {
        ...del[lasindex],
        title: "logout",
        href: "/logout",
        icon: "fa fa-sign-out",
        klik: action,
      };

      del.splice(4, 0, {
        title: "Profile",
        href: "/profile",
        icon: "fa fa-user",
      });

      setMenu(del);
      if (loginStatus.isSeller == true) {
        del.splice(2, 0, {
          title: "Mystore",
          href: "/mystore",
          inner: "MyStore",
        });
      }
      setMenu(del);
    }
    return () => setMenu(Menu);
  }, [loginStatus.isLogin, loginStatus.isSeller]);
  console.log(loginStatus.isLogin, "asdadsasd");
  return (
    <>
      {menu.map((item) => {
        return (
          <li
            key={item.title}
            style={{ textDecoration: "none", color: "white" }}
          >
            <Link
              to={item.href}
              style={{ textDecoration: "none", color: "white" }}
            >
              {item.icon == undefined &&
              item.inner != undefined &&
              item.klik == undefined ? (
                item.inner
              ) : (
                <i
                  className={item.icon}
                  onClick={item.klik}
                  style={{ fontSize: "30px", color: "white" }}
                ></i>
              )}
            </Link>
          </li>
        );
      })}
    </>
  );
};
