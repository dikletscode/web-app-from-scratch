import React from "react";
import "./nav.css";
import { Menu } from "./menu";
import { Link, useHistory } from "react-router-dom";
import { isLogin } from "../../helper/isLogin";
import authService from "../../services/auth.service";
import { useState } from "react";
import { useEffect } from "react";
import { Redirect } from "react-router-dom";

const li = Menu.map((item) => (
  <li key={item.title}>
    <a href={item.href} style={{ textDecoration: "none", color: "white" }}>
      {item.title}
    </a>
  </li>
));

const Nav = () => {
  let history = useHistory();
  const [toogleIcon, setPrivate] = useState("block");
  const [icon, setDisplay] = useState("block");
  const checkLogin = () => {
    if (isLogin() == false) {
      setPrivate("none");
      setDisplay("block");
    } else {
      setPrivate("block");
      setDisplay("none");
    }
  };

  useEffect(() => {
    checkLogin();
  }, [isLogin()]);
  console.log(isLogin, "as");

  const handleClick = () => {
    const logOut = async () => {
      try {
        await authService.logout();
        localStorage.removeItem("userId");
        history.push("/login");
      } catch (error) {
        console.log(error);
      }
    };
    logOut();
  };
  return (
    <>
      <nav className="nav-container">
        <ul className="item">
          <li key="cart">
            <i
              className="fa fa-shopping-cart"
              style={{ fontSize: "30px", color: "white" }}
            ></i>
          </li>
          <li key="seller">
            <Link
              to="/mystore"
              style={{ textDecoration: "none", color: "white" }}
            >
              MyStore
            </Link>
          </li>

          {li}
          <li style={{ display: toogleIcon }} key="profile">
            <Link to="/profile">
              <i className="fa fa-user" id="icon2"></i>
            </Link>
          </li>
          <li style={{ display: toogleIcon, cursor: "progress" }} key="logout">
            <i className="fa fa-sign-out" id="icon3" onClick={handleClick}></i>
          </li>
          <li style={{ display: icon }} key="login">
            <Link to={"/login"}>
              <i className="fa fa-sign-in" id="icon"></i>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Nav;
