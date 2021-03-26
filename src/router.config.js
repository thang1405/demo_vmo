import Customers from "./pages/category/customers/Customers";
import CustomerDetail from "./pages/category/customers/Customer-detail";
import CustomerEdit from "../src/pages/category/customers/Customer-edit";

import ProjectStatus from "../src/pages/category/project-status/Project-status";
import ProjectStatusDetail from "../src/pages/category/project-status/Project-status-detail";
import ProjectStatusEdit from "../src/pages/category/project-status/Project-status-edit";

import ProjectType from "../src/pages/category/project-type/Project-type";
import ProjectTypeDetail from "../src/pages/category/project-type/Project-type-detail";
import ProjectTypeEdit from "../src/pages/category/project-type/Project-type-edit";

import TechStack from "../src/pages/category/tech-stack/Tech-stack";
import TechStackDetail from "../src/pages/category/tech-stack/Tech-stack-detail";
import TechStackEdit from "../src/pages/category/tech-stack/Tech-stack-edit";

import Departments from "../src/pages/manager/departments/Departments";
import DepartmentDetail from "../src/pages/manager/departments/Department-detail";
import DepartmentEdit from "../src/pages/manager/departments/Department-edit";

import Staffs from "./pages/manager/staffs/Staffs";
import StaffDetail from "../src/pages/manager/staffs/Staff-detail";
import StaffEdit from "../src/pages/manager/staffs/Staff-edit";

import Projects from "../src/pages/manager/projects/Projects";
import ProjectDetail from "../src/pages/manager/projects/Project-detail";
import ProjectEdit from "../src/pages/manager/projects/Project-edit";
export const routers = [
  {
    path: "/customer",
    exact: true,
    component: Customers,
  },
  {
    path: "/customer/:id",
    exact: true,
    component: CustomerDetail,
  },
  {
    path: "/customer/:id/edit",
    exact: true,
    component: CustomerEdit,
  },
  {
    path: "/project-status",
    exact: true,
    component: ProjectStatus,
  },
  {
    path: "/project-status/:id",
    exact: true,
    component: ProjectStatusDetail,
  },
  {
    path: "/project-status/:id/edit",
    exact: true,
    component: ProjectStatusEdit,
  },
  {
    path: "/project-type",
    exact: true,
    component: ProjectType,
  },
  {
    path: "/project-type/:id",
    exact: true,
    component: ProjectTypeDetail,
  },
  {
    path: "/project-type/:id/edit",
    exact: true,
    component: ProjectTypeEdit,
  },
  {
    path: "/tech-stack",
    exact: true,
    component: TechStack,
  },
  {
    path: "/tech-stack/:id",
    exact: true,
    component: TechStackDetail,
  },
  {
    path: "/tech-stack/:id/edit",
    exact: true,
    component: TechStackEdit,
  },
  {
    path: "/department",
    exact: true,
    component: Departments,
  },
  {
    path: "/department/:id",
    exact: true,
    component: DepartmentDetail,
  },
  {
    path: "/department/:id/edit",
    exact: true,
    component: DepartmentEdit,
  },
  {
    path: "/staff",
    exact: true,
    component: Staffs,
  },
  {
    path: "/staff/:id",
    exact: true,
    component: StaffDetail,
  },
  {
    path: "/staff/:id/edit",
    exact: true,
    component: StaffEdit,
  },
  {
    path: "/project",
    exact: true,
    component: Projects,
  },
  {
    path: "/project/:id",
    exact: true,
    component: ProjectDetail,
  },
  {
    path: "/project/:id/edit",
    exact: true,
    component: ProjectEdit,
  },
];
