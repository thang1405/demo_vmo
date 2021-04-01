import React from "react";
import ListDepartment from "modules/departments/components/list-departments";
import CreateNewDepartment from "modules/departments/components/create-new-department";
export default function Departments() {
  return (
    <div className=" flex-1">
      <div className=" w-10/12 flex flex-col mx-auto my-0">
        <CreateNewDepartment />
        <ListDepartment />
      </div>
    </div>
  );
}
