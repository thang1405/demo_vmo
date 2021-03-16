import "./App.css";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";

function App() {
  const { isLogin } = useSelector(state => state.login);
  console.log(isLogin);
  return (
    <Router>
      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
        integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
        crossOrigin="anonymous"
      />
      <Switch>
        {isLogin ? (
          <Route path="/" component={Home} />
        ) : (
          <Route path="/login" exact component={Login} />
        )}
        {!isLogin ? <Redirect to="/login" /> : null}
      </Switch>
    </Router>
  );
}

export default App;
