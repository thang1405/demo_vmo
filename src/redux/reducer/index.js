import { combineReducers } from "redux";
import { customerReducer } from "../../modules/customers/customers.reducer";
import { projectStatusReducer } from "../../modules/project-status/project-status.reducer";
import { projectTypeReducer } from "../../modules/project-type/project-type.reducer";
export const rootReducer = combineReducers({
  customers: customerReducer,
  projectStatus: projectStatusReducer,
  projectType: projectTypeReducer,
});
