import React from "react";
import "./nav.css";
import { Menu } from "./menu";
import { Link, useHistory } from "react-router-dom";

const li = Menu.map((item) => (
  <li>
    <a href={item.href} style={{ textDecoration: "none", color: "white" }}>
      {item.title}
    </a>
  </li>
));

const Nav = () => {
  let isLogin = true;
  let display = isLogin ? "block" : "none";
  let display2 = !isLogin ? "block" : "none";
  const handleClick = () => {
    window.location.reload();
  };
  return (
    <>
      <nav className="nav-container">
        <ul className="item">
          <li>
            <i
              className="fa fa-shopping-cart"
              style={{ fontSize: "30px", color: "white" }}
            ></i>
          </li>
          <li>
            <Link
              to="/mystore"
              style={{ textDecoration: "none", color: "white" }}
            >
              MyStore
            </Link>
          </li>

          {li}
          <li style={{ display: display }}>
            <Link to="/profile">
              <i className="fa fa-user" id="icon2"></i>
            </Link>
          </li>
          <li style={{ display: display, cursor: "progress" }}>
            <i className="fa fa-sign-out" id="icon3" onClick={handleClick}></i>
          </li>
          <li style={{ display: display2 }}>
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
