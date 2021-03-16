import React from "react";
import { Redirect, Route } from "react-router";

export default function AuthRoute(props) {
  const { isLogin } = props;
  if (isLogin) {
    return (
      <Route exact={props.exact} key={props.index} path={props.path} component={props.component} />
    );
  } else {
    return <Redirect to="/login" />;
  }
}
