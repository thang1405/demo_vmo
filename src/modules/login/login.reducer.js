import { produce } from "immer";
import * as CONSTANTS from "./login.constants";
import { checkToken } from "services/api";

const initState = {
  isLogin: checkToken(CONSTANTS.TOKEN) || false,
  token: CONSTANTS.TOKEN,
};

export const loginReducer = (state = initState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case CONSTANTS.LOGIN:
        draft.isLogin = true;
        break;
      case CONSTANTS.LOGOUT:
        draft.isLogin = false;
        break;
      default:
        return state;
    }
  });
};
