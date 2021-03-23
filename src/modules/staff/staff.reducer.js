import { produce } from "immer";
import * as CONSTANTS from "./staff.constants";
import { totalOfPage } from "utils/pagination";

const initState = {
  page: 1,
  data: [],
  totalPage: 1,
  total: 0,
};

export const staffReducer = (state = initState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      // get table
      case CONSTANTS.GET_ALL_STAFF:
        draft.data = action.payload;
        draft.total = action.payload.length;
        draft.totalPage = totalOfPage(draft.total, CONSTANTS.LIMIT_STAFF);
        break;
      // get info cell
      case CONSTANTS.GET_STAFF_DETAIL:
        break;
      // create new
      case CONSTANTS.CREATE_STAFF:
        // draft.data.push(action.payload);
        draft.total++;
        draft.totalPage = totalOfPage(draft.total, CONSTANTS.LIMIT_STAFF);
        break;
      // delete customer
      case CONSTANTS.DELETE_STAFF:
        draft.total--;
        draft.totalPage = totalOfPage(draft.total, CONSTANTS.LIMIT_STAFF);
        draft.page = draft.totalPage < draft.page ? draft.page - 1 : draft.page;
        break;
      // pagination
      case CONSTANTS.MOVE_TO_NEXT_PAGE:
        draft.page = draft.page >= draft.totalPage ? draft.page : ++draft.page;
        break;
      case CONSTANTS.MOVE_TO_PREVIOUS_PAGE:
        draft.page = draft.page <= 1 ? draft.page : --draft.page;
        break;
      default:
        return state;
    }
  });
};
