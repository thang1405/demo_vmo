import { combineReducers } from "redux";
import { customerReducer } from "../../modules/customers/customers.reducer";
import { projectStatusReducer } from "../../modules/project-status/project-status.reducer";
import { projectTypeReducer } from "../../modules/project-type/project-type.reducer";
import { techStackReducer } from "../../modules/tech-stack/tech-stack.reducer";

import { departmentReducer } from "../../modules/departments/departments.reducer";
export const rootReducer = combineReducers({
  customers: customerReducer,
  projectStatus: projectStatusReducer,
  projectTypes: projectTypeReducer,
  departments: departmentReducer,
  techStacks: techStackReducer,
});
