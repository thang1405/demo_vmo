import { produce } from "immer";
import * as CONSTANTS from "./login.constants";
import { checkToken } from "../../services/api";

// console.log(checkToken(CONSTANTS.TOKEN), "hihih");

const initState = {
  isLogin: checkToken(CONSTANTS.TOKEN) || false,
  token: CONSTANTS.TOKEN,
};

export const loginReducer = (state = initState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      // get table
      case CONSTANTS.LOGIN_SUCCESS:
        draft.isLogin = true;
        break;
      case CONSTANTS.LOGIN_FAILED:
        break;
      case CONSTANTS.LOGOUT_SUCCESS:
        draft.isLogin = false;
        break;
      case CONSTANTS.LOGOUT_FAILED:
        break;
      default:
        return state;
    }
  });
};
