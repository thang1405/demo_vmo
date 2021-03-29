import { produce } from "immer";
import * as CONSTANTS from "./departments.constants";

const initState = {
  data: [],
  loading: true,
};

export const departmentReducer = (state = initState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      // get table
      case CONSTANTS.GET_ALL_DEPARTMENT:
        draft.data = action.payload;
        draft.loading = false;
        break;
      // create new
      case CONSTANTS.CREATE_DEPARTMENT:
        draft.loading = true;
        break;
      default:
        return state;
    }
  });
};
