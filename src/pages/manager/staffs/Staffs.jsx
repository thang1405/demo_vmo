import React from "react";
import TableStaff from "../../../modules/staff/components/table-staff";
import CreateNewStaff from "../../../modules/staff/components/create-new-staff";
export default function Staff() {
  return (
    <div className=" flex-1">
      <div className=" w-10/12 flex flex-col mx-auto my-0">
        <CreateNewStaff />
        <TableStaff />
      </div>
    </div>
  );
}
