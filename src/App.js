import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { routers } from "../src/router.config";
import LeftSideBar from "./components/left-side-bar";

function App() {
  const RouterList = () => {
    return routers.map((route, index) => (
      <Route exact={route.exact} key={index} path={route.path} component={route.component} />
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
      <div className="flex flex-row">
        <LeftSideBar />
        <Switch>{RouterList()}</Switch>
      </div>
    </Router>
  );
}

export default App;
