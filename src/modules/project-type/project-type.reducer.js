import { produce } from "immer";
import * as CONSTANTS from "./project-type.constants";
import { setData } from "../../services/set-info";
const initState = {
  page: 1,
  data: [],
  limit: CONSTANTS.LIMIT_PROJECT_TYPE,
};

export const projectTypeReducer = (state = initState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case CONSTANTS.GET_INFO_ALL_PROJECT_TYPE_SUCCESS:
        draft.data = action.payload;
        break;
      case CONSTANTS.GET_INFO_ALL_PROJECT_TYPE_ERROR:
        console.log(action.error);
        break;
      case CONSTANTS.GET_INFO_PROJECT_TYPE_SUCCESS:
        break;
      case CONSTANTS.GET_INFO_PROJECT_TYPE_ERROR:
        break;
      case CONSTANTS.CREATE_PROJECT_TYPE_SUCCESS:
        console.log(action);
        draft.data.push(action.payload);
        setData(CONSTANTS.TABLE_NAME, draft.data);
        break;
      case CONSTANTS.CREATE_PROJECT_TYPE_ERROR:
        console.log(action.error);
        break;
      case CONSTANTS.DELETE_PROJECT_TYPE_SUCCESS:
        break;
      case CONSTANTS.DELETE_PROJECT_TYPE_ERROR:
        break;
      default:
        return state;
    }
  });
};
