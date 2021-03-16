import * as CONSTANTS from "./login.constants";

// login
export const loginSuccess = () => {
  return {
    type: CONSTANTS.LOGIN_SUCCESS,
  };
};
export const loginFailed = error => {
  return {
    type: CONSTANTS.LOGIN_FAILED,
    error: error,
  };
};

//log out
export const logoutSuccess = () => {
  return {
    type: CONSTANTS.LOGOUT_SUCCESS,
  };
};
export const logoutFailed = error => {
  return {
    type: CONSTANTS.LOGOUT_FAILED,
    error: error,
  };
};
