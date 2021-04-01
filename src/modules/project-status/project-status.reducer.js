import { produce } from "immer";
import * as CONSTANTS from "./project-status.constants";

const initState = {
  data: [],
  loading: true,
};

export const projectStatusReducer = (state = initState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      // get table
      case CONSTANTS.GET_ALL_PROJECT_STATUS:
        draft.data = action.payload;
        draft.loading = false;
        break;
      // create new
      case CONSTANTS.CREATE_PROJECT_STATUS:
        draft.loading = true;
        break;
      default:
        return state;
    }
  });
};
