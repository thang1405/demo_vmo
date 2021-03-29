import { produce } from "immer";
import * as CONSTANTS from "./customers.constants";

const initState = {
  data: [],
  loading: true,
};

export const customerReducer = (state = initState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      // get table
      case CONSTANTS.GET_ALL_CUSTOMER:
        draft.data = action.payload;
        draft.loading = false;
        break;
      case CONSTANTS.CREATE_CUSTOMER:
        // draft.data.push(action.payload);
        draft.loading = true;
        break;

      default:
        return state;
    }
  });
};
