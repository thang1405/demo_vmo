import React from "react";
import { routers } from "../../router.config";
import { Switch, Redirect } from "react-router-dom";
import LeftSideBar from "../../components/left-side-bar";
import { useSelector } from "react-redux";
import Header from "../../components/header";
import AuthRoute from "../../components/auth-route";

export default function Home() {
  const { isLogin } = useSelector(state => state.login);
  console.log(isLogin);

  const RouterList = () => {
    return routers.map((route, index) => (
      <AuthRoute
        isLogin={isLogin}
        exact={route.exact}
        key={index}
        path={route.path}
        component={route.component}
      />
    ));
  };
  return isLogin ? (
    <div className="flex flex-row bg-gray-primary">
      <LeftSideBar />
      <div className="flex-1 flex-col py-5">
        <Header />
        <Switch location={location}>{RouterList()}</Switch>
      </div>
    </div>
  ) : (
    <Redirect to="/login" />
  );
}
