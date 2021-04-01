import { produce } from "immer";
import * as CONSTANTS from "./project-type.constants";

const initState = {
  data: [],
  loading: false,
};

export const projectTypeReducer = (state = initState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      // get table
      case CONSTANTS.GET_ALL_PROJECT_TYPE:
        draft.data = action.payload;
        draft.loading = false;
        break;
      // create new
      case CONSTANTS.CREATE_PROJECT_TYPE:
        draft.loading = true;
        break;
      default:
        return state;
    }
  });
};
