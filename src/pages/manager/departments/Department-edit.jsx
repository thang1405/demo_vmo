import React from "react";
import EditDepartment from "modules/departments/components/edit-department";

function DepartmentEdit() {
  return (
    <div className="flex-1">
      <div className=" w-10/12 flex flex-col mx-auto my-5">
        <EditDepartment />
      </div>
    </div>
  );
}

export default DepartmentEdit;
