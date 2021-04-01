import { produce } from "immer";
import * as CONSTANTS from "./projects.constants";

const initState = {
  data: [],
  loading: true,
};

export const projectReducer = (state = initState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      // get table
      case CONSTANTS.GET_ALL_PROJECT:
        draft.data = action.payload;
        draft.loading = false;
        break;
      // create new
      case CONSTANTS.CREATE_PROJECT:
        draft.loading = true;
        break;
      default:
        return state;
    }
  });
};
