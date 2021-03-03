import React from "react";
import CreateNewProjectType from "../../../modules/project-type/components/create-new-project-type";
import DetailProjectType from "../../../modules/project-type/components/detail-project-type";

function ProjectStatusDetail() {
  return (
    <div className=" flex-1">
      <div className=" w-11/12 flex flex-col mx-auto my-5">
        <CreateNewProjectType />
        <DetailProjectType />
      </div>
    </div>
  );
}

export default ProjectStatusDetail;
