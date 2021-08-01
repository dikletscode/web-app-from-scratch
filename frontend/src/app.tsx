import React from "react";
import Login from "./components/page/auth/login/login";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/navigation/navigation";
import "./app.css";

const App = (): JSX.Element => {
  return (
    <Router>
      <header>
        <h1>Hello</h1>
        <Nav />
      </header>
      <Route component={Login} exact path="/login" />
    </Router>
  );
};
export default App;
