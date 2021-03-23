import React from "react";
import DetailProjectType from "modules/project-type/components/detail-project-type";

function ProjectStatusDetail() {
  return (
    <div className=" flex-1">
      <div className=" w-10/12 flex flex-col mx-auto my-5">
        <DetailProjectType />
      </div>
    </div>
  );
}

export default ProjectStatusDetail;
