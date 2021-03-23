import React from "react";
import ListProjectStatus from "modules/project-status/components/list-project-status";
import CreateNewProjectStatus from "modules/project-status/components/create-new-project-status";

function ProjectStatus() {
  return (
    <div className="flex-1">
      <div className=" w-10/12 flex flex-col mx-auto my-0">
        <CreateNewProjectStatus />
        <ListProjectStatus />
      </div>
    </div>
  );
}

export default ProjectStatus;
