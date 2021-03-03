import React from "react";
import TableProjectType from "../../../modules/project-type/components/table-project-type";
import CreateNewProjectType from "../../../modules/project-type/components/create-new-project-type";

function ProjectType() {
  return (
    <div className="flex-1">
      <div className=" w-11/12 flex flex-col mx-auto my-0">
        <CreateNewProjectType />
        <TableProjectType />
      </div>
    </div>
  );
}

export default ProjectType;
