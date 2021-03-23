import { produce } from "immer";
import * as CONSTANTS from "./project-status.constants";
import { totalOfPage } from "utils/pagination";

const initState = {
  data: [],
  totalPage: 1,
  total: 0,
};

export const projectStatusReducer = (state = initState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      // get table
      case CONSTANTS.GET_ALL_PROJECT_STATUS:
        draft.data = action.payload;
        draft.total = action.payload.length;
        draft.totalPage = totalOfPage(draft.total, CONSTANTS.LIMIT_PROJECT_STATUS);
        break;
      // get info cell
      case CONSTANTS.GET_PROJECT_STATUS_DETAIL:
        break;
      // create new
      case CONSTANTS.CREATE_PROJECT_STATUS:
        // draft.data.push(action.payload);
        draft.total++;
        draft.totalPage = totalOfPage(draft.total, CONSTANTS.LIMIT_PROJECT_STATUS);
        break;
      // delete customer
      case CONSTANTS.DELETE_PROJECT_STATUS:
        draft.total--;
        draft.totalPage = totalOfPage(draft.total, CONSTANTS.LIMIT_PROJECT_STATUS);
        break;
      default:
        return state;
    }
  });
};
