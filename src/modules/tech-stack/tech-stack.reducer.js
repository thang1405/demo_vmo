import { produce } from "immer";
import * as CONSTANTS from "./tech-stack.constants";
const initState = {
  data: [],
  loading: true,
};

export const techStackReducer = (state = initState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      // get table
      case CONSTANTS.GET_ALL_TECH_STACK:
        draft.data = action.payload;
        draft.loading = false;
        break;
      // create new
      case CONSTANTS.CREATE_TECH_STACK:
        draft.loading = true;
        break;
      default:
        return state;
    }
  });
};
