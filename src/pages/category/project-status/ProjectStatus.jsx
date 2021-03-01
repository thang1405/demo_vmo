import React from "react";
import TableProjectStatus from "../../../modules/project-status/components/table-project-status";
import CreateNewProjectStatus from "../../../modules/project-status/components/create-new-project-status";

function ProjectStatus() {
  return (
    <div className="flex-1">
      <div className=" w-11/12 flex flex-col mx-auto my-0">
        <CreateNewProjectStatus />
        <TableProjectStatus />
      </div>
    </div>
  );
}

export default ProjectStatus;
