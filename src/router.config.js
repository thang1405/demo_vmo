import Customers from "./pages/category/customers/Customers";
import CustomerDetail from "./pages/category/customers/Customer-detail";

import ProjectStatus from "../src/pages/category/project-status/Project-status";
import ProjectStatusDetail from "../src/pages/category/project-status/Project-status-detail";

import ProjectType from "../src/pages/category/project-type/Project-type";
import ProjectTypeDetail from "../src/pages/category/project-type/Project-type-detail";

import TechStack from "../src/pages/category/tech-stack/Tech-stack";
import TechStackDetail from "../src/pages/category/tech-stack/Tech-stack-detail";

import Departments from "../src/pages/manager/departments/Departments";
import Personnel from "../src/pages/manager/personnel/Personnel";
import Projects from "../src/pages/manager/projects/Projects";

import Login from "../src/pages/login/Login";

export const routers = [
  { path: "/customers", exact: true, component: Customers },
  { path: "/customers/:id", exact: true, component: CustomerDetail },
  { path: "/project-status", exact: true, component: ProjectStatus },
  { path: "/project-status/:id", exact: true, component: ProjectStatusDetail },
  { path: "/project-type", exact: true, component: ProjectType },
  { path: "/project-type/:id", exact: true, component: ProjectTypeDetail },
  { path: "/tech-stack", exact: true, component: TechStack },
  { path: "/tech-stack/:id", exact: true, component: TechStackDetail },
  { path: "/department", exact: true, component: Departments },
  { path: "/personnel", exact: true, component: Personnel },
  { path: "/projects", exact: true, component: Projects },
  { path: "/login", exact: true, component: Login },
];
