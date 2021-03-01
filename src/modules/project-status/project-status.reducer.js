import { produce } from "immer";
import * as CONSTANTS from "./project-status.constants";
import { setData } from "../../services/set-info";
const initState = {
  page: 1,
  data: [],
  limit: CONSTANTS.LIMIT_PROJECT_STATUS,
};

export const projectStatusReducer = (state = initState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case CONSTANTS.GET_INFO_ALL_PROJECT_STATUS_SUCCESS:
        draft.data = action.payload;
        break;
      case CONSTANTS.GET_INFO_PROJECT_STATUS_SUCCESS:
        break;
      case CONSTANTS.GET_INFO_PROJECT_STATUS_ERROR:
        break;
      case CONSTANTS.CREATE_PROJECT_STATUS_SUCCESS:
        draft.data.push(action.payload);
        setData(CONSTANTS.TABLE_NAME, draft.data);
        break;
      case CONSTANTS.CREATE_PROJECT_STATUS_ERROR:
        console.log(action.error);
        break;
      case CONSTANTS.DELETE_PROJECT_STATUS_SUCCESS:
        break;
      case CONSTANTS.DELETE_PROJECT_STATUS_ERROR:
        break;
      default:
        return state;
    }
  });
};
