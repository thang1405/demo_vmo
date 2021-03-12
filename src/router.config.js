import Customers from "./pages/category/customers/Customers";
import CustomerDetail from "./pages/category/customers/Customer-detail";

import ProjectStatus from "../src/pages/category/project-status/Project-status";
import ProjectStatusDetail from "../src/pages/category/project-status/Project-status-detail";

import ProjectType from "../src/pages/category/project-type/Project-type";
import ProjectTypeDetail from "../src/pages/category/project-type/Project-type-detail";

import TechStack from "../src/pages/category/tech-stack/Tech-stack";
import TechStackDetail from "../src/pages/category/tech-stack/Tech-stack-detail";

import Departments from "../src/pages/manager/departments/Departments";
import DepartmentDetail from "../src/pages/manager/departments/Department-detail";

import Staffs from "./pages/manager/staffs/Staffs";
import StaffDetail from "../src/pages/manager/staffs/Staff-detail";

import Projects from "../src/pages/manager/projects/Projects";
import ProjectDetail from "../src/pages/manager/projects/Project-detail";
import Login from "../src/pages/login/Login";

export const routers = [
  { path: "/customer", exact: true, component: Customers },
  { path: "/customer/:id", exact: true, component: CustomerDetail },
  { path: "/project-status", exact: true, component: ProjectStatus },
  { path: "/project-status/:id", exact: true, component: ProjectStatusDetail },
  { path: "/project-type", exact: true, component: ProjectType },
  { path: "/project-type/:id", exact: true, component: ProjectTypeDetail },
  { path: "/tech-stack", exact: true, component: TechStack },
  { path: "/tech-stack/:id", exact: true, component: TechStackDetail },
  { path: "/department", exact: true, component: Departments },
  { path: "/department/:id", exact: true, component: DepartmentDetail },
  { path: "/staff", exact: true, component: Staffs },
  { path: "/staff/:id", exact: true, component: StaffDetail },
  { path: "/project", exact: true, component: Projects },
  { path: "/project/:id", exact: true, component: ProjectDetail },
  { path: "/login", exact: true, component: Login },
];
