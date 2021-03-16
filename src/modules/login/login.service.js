// import { PATH_NAME } from "./login.constants";
import { loginSuccess, logoutSuccess } from "./login.action";
import { setToken } from "../../services/api";

export const login = data => dispatch => {
  setToken(data);
  return dispatch(loginSuccess());
};

export const logout = () => dispatch => {
  localStorage.removeItem("token");
  return dispatch(logoutSuccess());
};
