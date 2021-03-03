import { produce } from "immer";
import * as CONSTANTS from "./tech-stack.constants";

const initState = {
  page: 1,
  data: [],
  limit: CONSTANTS.LIMIT_TECH_STACK,
};
export const techStackReducer = (state = initState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      // get table
      case CONSTANTS.GET_ALL_TECH_STACK_SUCCESS:
        draft.data = action.payload;
        break;
      case CONSTANTS.GET_ALL_TECH_STACK_ERROR:
        console.log(action.error);
        break;
      // get info cell
      case CONSTANTS.GET_TECH_STACK_DETAIL_SUCCESS:
        break;
      case CONSTANTS.GET_TECH_STACK_DETAIL_ERROR:
        console.log(action.error);
        break;
      // create new
      case CONSTANTS.CREATE_TECH_STACK_SUCCESS:
        draft.data.push(action.payload);
        break;
      case CONSTANTS.CREATE_TECH_STACK_ERROR:
        console.log(action.error);
        break;
      // delete customer
      case CONSTANTS.DELETE_TECH_STACK_SUCCESS:
        break;
      case CONSTANTS.DELETE_TECH_STACK_ERROR:
        console.log(action.error);
        break;
      // edit detail
      case CONSTANTS.EDIT_TECH_STACK_DETAIL_SUCCESS:
        break;
      case CONSTANTS.EDIT_TECH_STACK_DETAIL_ERROR:
        console.log(action.error);
        break;
      default:
        return state;
    }
  });
};
