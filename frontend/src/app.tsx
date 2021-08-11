import React from "react";
import Login from "./components/page/auth/login";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import Nav from "./components/navigation/navigation";
import { Signup } from "./components/page/auth/signup";
import "./app.css";
import ProductGlobal from "./components/page/product/mainProduct";
import { PublicRoute, PrivateRoute } from "./routesConfig";
import Personal from "./components/page/profile/profile";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLogin, setRole } from "./reducer/auth";
import { setError } from "./reducer/error";

import { NotFound } from "./components/page/errors/notFound";
import Etalase from "./components/page/myStore/etalase";
import { getStoreId, getUserId } from "./helper/localstorage";

import { RootState } from "./store";

const App = (): JSX.Element => {
  const isSeller = getStoreId() == undefined ? false : true;
  const isLogin = getUserId() == "" ? false : true;
  const state = useSelector((state: RootState) => state.error.errorResponse);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setRole(isSeller));
    dispatch(setLogin(isLogin));
  }, [isLogin, isSeller]);
  console.log(getStoreId(), "seller");
  return (
    <Router>
      {state.isError == true ? (
        <Route component={NotFound} />
      ) : (
        <>
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
        </>
      )}
    </Router>
  );
};
export default App;
