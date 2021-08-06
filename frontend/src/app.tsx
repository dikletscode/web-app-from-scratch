import React from "react";
import Login from "./components/page/auth/login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/navigation/navigation";
import { Signup } from "./components/page/auth/signup";
import "./app.css";
import { Product } from "./components/page/product/mainProduct";
import { PublicRoute, PrivateRoute } from "./routesConfig";
import Personal from "./components/page/profile/profile";

const App = (): JSX.Element => {
  return (
    <Router>
      <header>
        <h1>Hello</h1>
        <Nav />
      </header>
      <Switch>
        <PrivateRoute component={Personal} exact path="/profile" />
        <PublicRoute strict={true} component={Login} exact path="/login" />
        <PublicRoute component={Product} strict={true} exact path="/" />

        <Route component={Signup} path="/signup" />
      </Switch>
    </Router>
  );
};
export default App;
