import { produce } from "immer";
import * as CONSTANTS from "./staff.constants";

const initState = {
  data: [],
  loading: true,
};

export const staffReducer = (state = initState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      // get table
      case CONSTANTS.GET_ALL_STAFF:
        draft.data = action.payload;
        draft.loading = false;
        break;
      // create new
      case CONSTANTS.CREATE_STAFF:
        draft.loading = true;
        break;
      default:
        return state;
    }
  });
};
