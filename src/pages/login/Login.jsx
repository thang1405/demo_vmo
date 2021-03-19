import React from "react";
import LoginForm from "../../modules/login/components/login-form";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

export default function Login() {
  const { isLogin } = useSelector(state => state.login);
  if (isLogin) {
    return <Redirect to="/project-type" />;
  }
  return <LoginForm />;
}
