import { isLogin } from "./helper/isLogin";
import {
  Route,
  Redirect,
  RouteChildrenProps,
  RouteComponentProps,
} from "react-router-dom";
import React from "react";

export interface RouteProps {
  component?:
    | React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>;
  render?: (props: RouteComponentProps<any>) => React.ReactNode;
  children?:
    | ((props: RouteChildrenProps<any>) => React.ReactNode)
    | React.ReactNode;
  path?: string | string[];
  exact?: boolean;
  sensitive?: boolean;
  strict?: boolean;
}
export const PrivateRoute = ({
  component: Component,
  ...atribute
}: RouteProps) => {
  if (!Component) {
    return null;
  }
  return (
    <Route
      {...atribute}
      render={(props) =>
        isLogin() ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};
export const PublicRoute = ({
  component: Component,
  strict,
  ...atribute
}: RouteProps) => {
  if (!Component) {
    return null;
  }
  return (
    <Route
      {...atribute}
      render={(props) =>
        isLogin() && strict ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};
