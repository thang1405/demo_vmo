import React from "react";
import DetailProjectStatus from "../../../modules/project-status/components/detail-project-status";

function ProjectStatusDetail() {
  return (
    <div className=" flex-1">
      <div className=" w-10/12 flex flex-col mx-auto my-5">
        <DetailProjectStatus />
      </div>
    </div>
  );
}

export default ProjectStatusDetail;
