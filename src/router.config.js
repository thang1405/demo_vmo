import Customers from "./pages/category/customers/Customers";
import CustomerDetail from "./pages/category/customers/Customer-detail";
import ProjectStatus from "../src/pages/category/project-status/ProjectStatus";
import ProjectType from "../src/pages/category/project-type/ProjectType";
import TechStack from "../src/pages/category/tech-stack/TechStack";

import Department from "../src/pages/manager/department/Department";
import Personnel from "../src/pages/manager/personnel/Personnel";
import Projects from "../src/pages/manager/projects/Projects";

import Login from "../src/pages/login/Login";

export const routers = [
  { path: "/customers", exact: true, component: Customers },
  { path: "/customers/:id", exact: true, component: CustomerDetail },
  { path: "/project-status", exact: true, component: ProjectStatus },
  { path: "/project-type", exact: true, component: ProjectType },
  { path: "/tech-stack", exact: true, component: TechStack },
  { path: "/department", exact: true, component: Department },
  { path: "/personnel", exact: true, component: Personnel },
  { path: "/projects", exact: true, component: Projects },
  { path: "/login", exact: true, component: Login },
];
