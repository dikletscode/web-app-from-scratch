import React from "react";
import "./nav.css";
import { Menu } from "./menu";
import { Link, useHistory } from "react-router-dom";

import authService from "../../services/auth.service";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { setLogin } from "../../reducer/auth";

const li = Menu.map((item) => (
  <li key={item.title}>
    <Link to={item.href} style={{ textDecoration: "none", color: "white" }}>
      {item.title}{" "}
    </Link>
  </li>
));

const Nav = () => {
  let history = useHistory();
  const loginStatus = useSelector((state: RootState) => state.auth.isLogin);
  const dispatch = useDispatch();

  const handleClick = () => {
    const logOut = async () => {
      try {
        await authService.logout();
        dispatch(setLogin(false));
        history.push("/login");
      } catch (error) {
        console.log(error);
      }
    };
    logOut();
  };
  return (
    <>
      <header>
        <h1>Hello</h1>
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

            {loginStatus ? (
              <>
                <li key="profile">
                  <Link to="/profile">
                    <i className="fa fa-user" id="icon2"></i>
                  </Link>
                </li>
                <li style={{ cursor: "progress" }} key="logout">
                  <i
                    className="fa fa-sign-out"
                    id="icon3"
                    onClick={handleClick}
                  ></i>
                </li>
              </>
            ) : (
              <li key="login">
                <Link to={"/login"}>
                  <i className="fa fa-sign-in" id="icon"></i>
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </header>
    </>
  );
};
export default Nav;
