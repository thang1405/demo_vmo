import React from "react";
import TableDepartment from "../../../modules/departments/components/table-departments";
import CreateNewDepartment from "../../../modules/departments/components/create-new-department";
export default function Departments() {
  return (
    <div className=" flex-1">
      <div className=" w-11/12 flex flex-col mx-auto my-0">
        <CreateNewDepartment />
        <TableDepartment />
      </div>
    </div>
  );
}
