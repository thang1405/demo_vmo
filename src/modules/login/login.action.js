import * as CONSTANTS from "./login.constants";

// login
export const login = () => {
  return {
    type: CONSTANTS.LOGIN,
  };
};

// log out
export const logout = () => {
  return {
    type: CONSTANTS.LOGOUT,
  };
};
