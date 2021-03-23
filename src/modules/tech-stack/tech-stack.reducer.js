import { produce } from "immer";
import * as CONSTANTS from "./tech-stack.constants";
import { totalOfPage } from "utils/pagination";

const initState = {
  data: [],
  totalPage: 1,
  total: 0,
};

export const techStackReducer = (state = initState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      // get table
      case CONSTANTS.GET_ALL_TECH_STACK:
        draft.data = action.payload;
        draft.total = action.payload.length;
        draft.totalPage = totalOfPage(draft.total, CONSTANTS.LIMIT_TECH_STACK);
        break;
      // get info cell
      case CONSTANTS.GET_TECH_STACK_DETAIL:
        break;
      // create new
      case CONSTANTS.CREATE_TECH_STACK:
        // draft.data.push(action.payload);
        draft.total++;
        draft.totalPage = totalOfPage(draft.total, CONSTANTS.LIMIT_TECH_STACK);
        break;
      // delete customer
      case CONSTANTS.DELETE_TECH_STACK:
        draft.total--;
        draft.totalPage = totalOfPage(draft.total, CONSTANTS.LIMIT_TECH_STACK);
        break;
      default:
        return state;
    }
  });
};
