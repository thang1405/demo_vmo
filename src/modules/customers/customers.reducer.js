import { produce } from "immer";
import * as CONSTANTS from "./customers.constants";
import { setData } from "../../services/set-info";
const initState = {
  page: 1,
  data: [],
  limit: CONSTANTS.LIMIT_CUSTOMER,
};

export const customerReducer = (state = initState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case CONSTANTS.GET_INFO_ALL_CUSTOMER_SUCCESS:
        draft.data = action.payload;
        break;
      case CONSTANTS.GET_INFO_ALL_CUSTOMER_ERROR:
        console.log(action.error);
        break;
      case CONSTANTS.GET_INFO_CUSTOMER_SUCCESS:
        break;
      case CONSTANTS.CREATE_CUSTOMER_SUCCESS:
        draft.data.push(action.payload);
        setData(CONSTANTS.TABLE_NAME, draft.data);
        break;
      case CONSTANTS.CREATE_CUSTOMER_ERROR:
        console.log(action.error);
        break;
      case CONSTANTS.DELETE_CUSTOMER_SUCCESS:
        break;
      case CONSTANTS.DELETE_CUSTOMER_ERROR:
        break;
      default:
        return state;
    }
  });
};
