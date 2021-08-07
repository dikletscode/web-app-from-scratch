import { useSelector } from "react-redux";
import { RootState } from "./store";

import {
  Route,
  Redirect,
  RouteChildrenProps,
  RouteComponentProps,
} from "react-router-dom";
import React from "react";

export interface RouteProps {
  component?: React.ComponentType<any>;
  path?: string | string[];
  exact?: boolean;
  strict?: boolean;
  redirectTo: string;
}
export const PrivateRoute = ({
  component: Component,
  redirectTo,
  ...atribute
}: RouteProps) => {
  if (!Component) {
    return null;
  }
  const loginStatus = useSelector((state: RootState) => state.auth);
  return (
    <Route
      {...atribute}
      render={(props) =>
        loginStatus ? <Component {...props} /> : <Redirect to={redirectTo} />
      }
    />
  );
};
export const PublicRoute = ({
  component: Component,
  strict,
  redirectTo,
  ...atribute
}: RouteProps) => {
  if (!Component) {
    return null;
  }
  const loginStatus = useSelector((state: RootState) => state.auth);
  return (
    <Route
      {...atribute}
      render={(props) =>
        loginStatus && strict ? (
          <Redirect to={redirectTo} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};
