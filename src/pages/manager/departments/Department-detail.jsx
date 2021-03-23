import React from "react";
import DetailDepartment from "modules/departments/components/detail-department";

function DepartmentDetail() {
  return (
    <div className=" flex-1">
      <div className=" w-10/12 flex flex-col mx-auto my-5">
        <DetailDepartment />
      </div>
    </div>
  );
}

export default DepartmentDetail;
