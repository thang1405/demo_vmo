import { produce } from "immer";
import * as CONSTANTS from "./customers.constants";

const initState = {
  page: 1,
  data: [],
  limit: CONSTANTS.LIMIT_CUSTOMER,
};

export const customerReducer = (state = initState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      // get table
      case CONSTANTS.GET_ALL_CUSTOMER_SUCCESS:
        draft.data = action.payload;
        break;
      case CONSTANTS.GET_ALL_CUSTOMER_ERROR:
        console.log(action.error);
        break;
      // get info cell
      case CONSTANTS.GET_CUSTOMER_DETAIL_SUCCESS:
        break;
      case CONSTANTS.GET_CUSTOMER_DETAIL_ERROR:
        console.log(action.error);
        break;
      // create new
      case CONSTANTS.CREATE_CUSTOMER_SUCCESS:
        draft.data.push(action.payload);
        break;
      case CONSTANTS.CREATE_CUSTOMER_ERROR:
        console.log(action.error);
        break;
      // delete customer
      case CONSTANTS.DELETE_CUSTOMER_SUCCESS:
        break;
      case CONSTANTS.DELETE_CUSTOMER_ERROR:
        console.log(action.error);
        break;
      // edit detail
      case CONSTANTS.EDIT_CUSTOMER_DETAIL_SUCCESS:
        break;
      case CONSTANTS.EDIT_CUSTOMER_DETAIL_ERROR:
        console.log(action.error);
        break;
      default:
        return state;
    }
  });
};
