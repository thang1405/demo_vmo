import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Home() {
  const { isLogin } = useSelector(state => state.login);
  if (isLogin) {
    return <Redirect to="/project-type" />;
  }
  return <Redirect to="/login" />;
}
