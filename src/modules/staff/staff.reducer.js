import { produce } from "immer";
import * as CONSTANTS from "./staff.constants";
import { totalPage } from "../../utils/pagination";
import { deleteApi } from "../../utils/api";

const initState = {
  page: 1,
  data: [],
  totalPage: 1,
};

export const staffReducer = (state = initState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      // get table
      case CONSTANTS.GET_ALL_STAFF_SUCCESS:
        draft.data = action.payload;
        draft.totalPage = totalPage(draft.data, CONSTANTS.LIMIT_STAFF);
        break;
      case CONSTANTS.GET_ALL_STAFF_ERROR:
        console.log(action.error);
        break;
      // get info cell
      case CONSTANTS.GET_STAFF_DETAIL_SUCCESS:
        break;
      case CONSTANTS.GET_STAFF_DETAIL_ERROR:
        console.log(action.error);
        break;
      // create new
      case CONSTANTS.CREATE_STAFF_SUCCESS:
        draft.data.push(action.payload);
        draft.totalPage = totalPage(draft.data, CONSTANTS.LIMIT_STAFF);
        break;
      case CONSTANTS.CREATE_STAFF_ERROR:
        console.log(action.error);
        break;
      // delete customer
      case CONSTANTS.DELETE_STAFF_SUCCESS:
        draft.data = deleteApi(draft.data, action.payload);
        draft.totalPage = totalPage(draft.data, CONSTANTS.LIMIT_STAFF);
        draft.page = draft.totalPage < draft.page ? draft.page - 1 : draft.page;
        break;
      case CONSTANTS.DELETE_STAFF_ERROR:
        console.log(action.error);
        break;
      // edit detail
      case CONSTANTS.EDIT_STAFF_DETAIL_SUCCESS:
        break;
      case CONSTANTS.EDIT_STAFF_DETAIL_ERROR:
        console.log(action.error);
        break;
      // pagination
      case CONSTANTS.MOVE_TO_NEXT_PAGE:
        draft.page = draft.page >= draft.totalPage ? draft.page : ++draft.page;
        break;
      case CONSTANTS.MOVE_TO_PREVIOUS_PAGE:
        draft.page = draft.page <= 1 ? draft.page : --draft.page;
        break;
      default:
        return state;
    }
  });
};