import React from "react";
import DetailProject from "modules/projects/components/detail-project";

function ProjectDetail() {
  return (
    <div className=" flex-1">
      <div className=" w-10/12 flex flex-col mx-auto my-5">
        <DetailProject />
      </div>
    </div>
  );
}

export default ProjectDetail;
