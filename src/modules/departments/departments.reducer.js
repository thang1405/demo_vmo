import { produce } from "immer";
import * as CONSTANTS from "./departments.constants";
import { totalOfPage } from "utils/pagination";

const initState = {
  data: [],
  totalPage: 1,
  total: 0,
};

export const departmentReducer = (state = initState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      // get table
      case CONSTANTS.GET_ALL_DEPARTMENT:
        draft.data = action.payload;
        draft.total = action.payload.length;
        draft.totalPage = totalOfPage(draft.total, CONSTANTS.LIMIT_DEPARTMENT);
        break;
      // get info cell
      case CONSTANTS.GET_DEPARTMENT_DETAIL:
        break;
      // create new
      case CONSTANTS.CREATE_DEPARTMENT:
        // draft.data.push(action.payload);
        draft.total++;
        draft.totalPage = totalOfPage(draft.total, CONSTANTS.LIMIT_DEPARTMENT);
        break;
      // delete customer
      case CONSTANTS.DELETE_DEPARTMENT:
        draft.total--;
        draft.totalPage = totalOfPage(draft.total, CONSTANTS.LIMIT_DEPARTMENT);
        break;
      default:
        return state;
    }
  });
};
