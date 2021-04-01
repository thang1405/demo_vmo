import "App.css";
import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { routers } from "router.config";

import LeftSideBar from "components/left-side-bar";
import Header from "components/header";

import Login from "pages/login/Login";
import Home from "pages/home/Home";
import AuthRoute from "components/auth-route";

function App() {
  const { login } = useSelector(state => state);

  const RouterList = () => {
    return routers.map((route, index) => (
      <AuthRoute
        exact={route.exact}
        key={index}
        path={route.path}
        component={route.component}
        {...login}
      />
    ));
  };

  return (
    <Router>
      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
        integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
        crossOrigin="anonymous"
      />
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Home} />
        <Route
          render={({ location }) => {
            return (
              <div className="flex flex-row bg-gray-primary min-h-screen">
                <LeftSideBar />
                <div className="flex-1 flex-col py-5 ml-28 lg:ml-80 ">
                  <Header />
                  <Switch location={location}>{RouterList()}</Switch>
                </div>
              </div>
            );
          }}
        />
      </Switch>
    </Router>
  );
}

export default App;
