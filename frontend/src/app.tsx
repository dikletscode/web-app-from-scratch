import React from "react";
import Login from "./components/page/auth/login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/navigation/navigation";
import { Signup } from "./components/page/auth/signup";
import "./app.css";
import ProductGlobal from "./components/page/product/mainProduct";
import { PublicRoute, PrivateRoute } from "./routesConfig";
import Personal from "./components/page/profile/profile";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLogin, setRole } from "./reducer/auth";
import { useState } from "react";

import Etalase from "./components/page/myStore/etalase";
import { getStoreId, getUserId } from "./helper/localstorage";

const App = (): JSX.Element => {
  const isSeller = getStoreId() == "" ? false : true;
  const isLogin = getUserId() == "" ? false : true;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setRole(isSeller));
    dispatch(setLogin(isLogin));
  }, [isLogin, isSeller]);
  console.log(isSeller, "Asdasdasdadsasd");
  return (
    <Router>
      <Nav />
      <Switch>
        <PublicRoute
          component={ProductGlobal}
          strict={false}
          path="/"
          exact
          redirectTo="/login"
        />
        <PublicRoute
          strict={false}
          component={Login}
          path="/login"
          redirectTo="/"
        />
        <PrivateRoute component={Etalase} path="/mystore" redirectTo="/" />

        <PrivateRoute
          component={Personal}
          path="/profile"
          redirectTo="/login"
        />
        <Route component={Signup} path="/signup" />
      </Switch>
    </Router>
  );
};
export default App;
