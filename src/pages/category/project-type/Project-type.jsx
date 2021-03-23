import React from "react";
import ListProjectType from "modules/project-type/components/list-project-type";
import CreateNewProjectType from "modules/project-type/components/create-new-project-type";

function ProjectType() {
  return (
    <div className="flex-1">
      <div className=" w-10/12 flex flex-col mx-auto my-0">
        <CreateNewProjectType />
        <ListProjectType />
      </div>
    </div>
  );
}

export default ProjectType;
