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
import { useDispatch, useSelector } from "react-redux";
import { setLogin, setRole } from "./reducer/auth";
import { NotFound } from "./components/page/errors/notFound";
import Etalase from "./components/page/myStore/etalase";
import getId from "./helper/localstorage";

import { RootState } from "./store";
import Cart from "./components/page/cart/cart";

const App = (): JSX.Element => {
  const isSeller = !getId.storeId ? false : true;
  const isLogin = !getId.storeId ? false : true;
  const state = useSelector((state: RootState) => state.error.errorResponse);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setRole(isSeller));
    dispatch(setLogin(isLogin));
  }, [isSeller, isLogin]);

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
            <Route component={Cart} path="/cart" />
            <Route component={Signup} path="/signup" />
          </Switch>
        </>
      )}
    </Router>
  );
};
export default App;
