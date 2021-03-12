import React from "react";
import TableProject from "../../../modules/projects/components/table-projects";
import CreateNewProject from "../../../modules/projects/components/create-new-project";
export default function Project() {
  return (
    <div className=" flex-1">
      <div className=" w-11/12 flex flex-col mx-auto my-0">
        <CreateNewProject />
        <TableProject />
      </div>
    </div>
  );
}
