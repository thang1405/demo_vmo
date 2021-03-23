import { produce } from "immer";
import * as CONSTANTS from "./project-type.constants";
import { totalOfPage } from "utils/pagination";

const initState = {
  data: [],
  totalPage: 1,
  total: 0,
};

export const projectTypeReducer = (state = initState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      // get table
      case CONSTANTS.GET_ALL_PROJECT_TYPE:
        draft.data = action.payload;
        draft.total = action.payload.length;
        draft.totalPage = totalOfPage(draft.total, CONSTANTS.LIMIT_PROJECT_TYPE);
        break;
      // get info cell
      case CONSTANTS.GET_PROJECT_TYPE_DETAIL:
        break;
      // create new
      case CONSTANTS.CREATE_PROJECT_TYPE:
        // draft.data.push(action.payload);
        draft.total++;
        draft.totalPage = totalOfPage(draft.total, CONSTANTS.LIMIT_PROJECT_TYPE);
        break;
      // delete customer
      case CONSTANTS.DELETE_PROJECT_TYPE:
        draft.total--;
        draft.totalPage = totalOfPage(draft.total, CONSTANTS.LIMIT_PROJECT_TYPE);
        break;
      default:
        return state;
    }
  });
};
