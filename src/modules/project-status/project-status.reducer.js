import { produce } from "immer";
import * as CONSTANTS from "./project-status.constants";

const initState = {
  page: 1,
  data: [],
  limit: CONSTANTS.LIMIT_PROJECT_STATUS,
};
export const projectStatusReducer = (state = initState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      // get table
      case CONSTANTS.GET_ALL_PROJECT_STATUS_SUCCESS:
        draft.data = action.payload;
        break;
      case CONSTANTS.GET_ALL_PROJECT_STATUS_ERROR:
        console.log(action.error);
        break;
      // get info cell
      case CONSTANTS.GET_PROJECT_STATUS_DETAIL_SUCCESS:
        break;
      case CONSTANTS.GET_PROJECT_STATUS_DETAIL_ERROR:
        console.log(action.error);
        break;
      // create new
      case CONSTANTS.CREATE_PROJECT_STATUS_SUCCESS:
        draft.data.push(action.payload);
        break;
      case CONSTANTS.CREATE_PROJECT_STATUS_ERROR:
        console.log(action.error);
        break;
      // delete customer
      case CONSTANTS.DELETE_PROJECT_STATUS_SUCCESS:
        break;
      case CONSTANTS.DELETE_PROJECT_STATUS_ERROR:
        console.log(action.error);
        break;
      // edit detail
      case CONSTANTS.EDIT_PROJECT_STATUS_DETAIL_SUCCESS:
        break;
      case CONSTANTS.EDIT_PROJECT_STATUS_DETAIL_ERROR:
        console.log(action.error);
        break;
      default:
        return state;
    }
  });
};
