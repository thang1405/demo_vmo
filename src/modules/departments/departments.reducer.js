import { produce } from "immer";
import * as CONSTANTS from "./departments.constants";

const initState = {
  page: 1,
  data: [],
  limit: CONSTANTS.LIMIT_DEPARTMENT,
};

export const departmentReducer = (state = initState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      // get table
      case CONSTANTS.GET_ALL_DEPARTMENT_SUCCESS:
        draft.data = action.payload;
        break;
      case CONSTANTS.GET_ALL_DEPARTMENT_ERROR:
        console.log(action.error);
        break;
      // get info cell
      case CONSTANTS.GET_DEPARTMENT_DETAIL_SUCCESS:
        break;
      case CONSTANTS.GET_DEPARTMENT_DETAIL_ERROR:
        console.log(action.error);
        break;
      // create new
      case CONSTANTS.CREATE_DEPARTMENT_SUCCESS:
        draft.data.push(action.payload);
        break;
      case CONSTANTS.CREATE_DEPARTMENT_ERROR:
        console.log(action.error);
        break;
      // delete detail
      case CONSTANTS.DELETE_DEPARTMENT_SUCCESS:
        break;
      case CONSTANTS.DELETE_DEPARTMENT_ERROR:
        console.log(action.error);
        break;
      // edit detail
      case CONSTANTS.EDIT_DEPARTMENT_DETAIL_SUCCESS:
        break;
      case CONSTANTS.EDIT_DEPARTMENT_DETAIL_ERROR:
        console.log(action.error);
        break;
      default:
        return state;
    }
  });
};
