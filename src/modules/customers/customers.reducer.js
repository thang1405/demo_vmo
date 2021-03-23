import { produce } from "immer";
import * as CONSTANTS from "./customers.constants";
import { totalOfPage } from "utils/pagination";

const initState = {
  data: [],
  totalPage: 1,
  total: 0,
};

export const customerReducer = (state = initState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      // get table
      case CONSTANTS.GET_ALL_CUSTOMER:
        draft.data = action.payload;
        draft.total = action.payload.length;
        draft.totalPage = totalOfPage(draft.total, CONSTANTS.LIMIT_CUSTOMER);
        break;
      // get info cell
      case CONSTANTS.GET_CUSTOMER_DETAIL:
        break;
      // create new
      case CONSTANTS.CREATE_CUSTOMER:
        // draft.data.push(action.payload);
        draft.total++;
        draft.totalPage = totalOfPage(draft.total, CONSTANTS.LIMIT_CUSTOMER);
        break;
      // delete customer
      case CONSTANTS.DELETE_CUSTOMER:
        draft.total--;
        draft.totalPage = totalOfPage(draft.total, CONSTANTS.LIMIT_CUSTOMER);
        break;
      default:
        return state;
    }
  });
};
