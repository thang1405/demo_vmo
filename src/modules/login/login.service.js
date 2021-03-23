import { login, logout } from "./login.action";
import { setToken } from "services/api";

export const loginSevice = data => dispatch => {
  setToken(data);
  return dispatch(login());
};

export const logoutSevice = () => dispatch => {
  localStorage.removeItem("token");
  return dispatch(logout());
};
