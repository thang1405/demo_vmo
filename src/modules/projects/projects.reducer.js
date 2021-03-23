import { produce } from "immer";
import * as CONSTANTS from "./projects.constants";
import { totalOfPage } from "utils/pagination";

const initState = {
  data: [],
  totalPage: 1,
  total: 0,
};

export const projectReducer = (state = initState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      // get table
      case CONSTANTS.GET_ALL_PROJECT:
        draft.data = action.payload;
        draft.total = action.payload.length;
        draft.totalPage = totalOfPage(draft.total, CONSTANTS.LIMIT_PROJECT);
        break;
      // get info cell
      case CONSTANTS.GET_PROJECT_DETAIL:
        break;
      // create new
      case CONSTANTS.CREATE_PROJECT:
        // draft.data.push(action.payload);
        draft.total++;
        draft.totalPage = totalOfPage(draft.total, CONSTANTS.LIMIT_PROJECT);
        break;
      // delete customer
      case CONSTANTS.DELETE_PROJECT:
        draft.total--;
        draft.totalPage = totalOfPage(draft.total, CONSTANTS.LIMIT_PROJECT);
        break;
      default:
        return state;
    }
  });
};
