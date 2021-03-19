import React from "react";
import { Redirect, Route } from "react-router";
import { checkToken } from "../services/api";

export default function AuthRoute(props) {
  const { isLogin, token } = props;
  if (!isLogin || !checkToken(token)) {
    return <Redirect to="/login" />;
  }
  return <Route {...props} />;
}
