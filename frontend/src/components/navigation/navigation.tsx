import React, { useEffect } from "react";
import "./nav.css";
import { Menu } from "./menu";
import { Link, useHistory } from "react-router-dom";
import { getStoreId } from "../../helper/localstorage";
import authService from "../../services/auth.service";
import { ListNav } from "./menu";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { setLogin, setLoading, setRole } from "../../reducer/auth";

const li = Menu.map((item) => (
  <li key={item.title}>
    <Link to={item.href}>{item.title} </Link>
  </li>
));

const Nav = () => {
  let history = useHistory();
  const loginStatus = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setLoading);
    const logOut = async () => {
      try {
        await authService.logout();
        dispatch(setLogin(false));
        history.push("/login");
      } catch (error) {
        history.push("/login");
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
            <ListNav action={handleClick} />
          </ul>
        </nav>
      </header>
    </>
  );
};
export default Nav;
{
  /* <li key="cart">
<i
  className="fa fa-shopping-cart"
  style={{ fontSize: "30px", color: "white" }}
></i>
</li>
{loginStatus.isSeller == false ? (
<></>
) : (
<li key="seller">
  <Link
    to="/mystore"
    style={{ textDecoration: "none", color: "white" }}
  >
    MyStore
  </Link>
</li>
)}

{li}

{loginStatus.isLogin ? (
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
)} */
}
