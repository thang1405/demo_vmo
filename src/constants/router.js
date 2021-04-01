import React from "react";
import * as PATH from "./pathName";

export const routerMenu = {
  Category: [
    {
      name: "Project type",
      path: PATH.PATH_PROJECT_TYPE,
      value: "project-type",
      icon: <i className="fas fa-list"></i>,
    },
    {
      name: "Project status",
      path: PATH.PATH_PROJECT_STATUS,
      value: "project-status",
      icon: <i className="fas fa-check-circle"></i>,
    },
    {
      name: "Tech stack",
      path: PATH.PATH_TECH_STACK,
      value: "tech-stack",
      icon: <i className="fas fa-code"></i>,
    },
    {
      name: "Customers",
      path: PATH.PATH_CUSTOMER,
      value: "customer",
      icon: <i className="fas fa-user-circle"></i>,
    },
  ],
  Manage: [
    {
      name: "Department",
      path: PATH.PATH_DEPARTMENT,
      value: "department",
      icon: <i className="fas fa-map-marker-alt"></i>,
    },
    {
      name: "Staff",
      path: PATH.PATH_STAFF,
      value: "staff",
      icon: <i className="fab fa-black-tie"></i>,
    },
    {
      name: "Projects",
      path: PATH.PATH_PROJECT,
      value: "project",
      icon: <i className="fas fa-briefcase"></i>,
    },
  ],
};

export const menu = [
  { name: "Category", icon: <i className="fas fa-database"></i> },
  { name: "Manage", icon: <i className="fas fa-chart-pie"></i> },
];
