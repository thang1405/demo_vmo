import React from "react";
import EditProject from "modules/projects/components/edit-project";

function ProjectEdit() {
  return (
    <div className="flex-1">
      <div className=" w-10/12 flex flex-col mx-auto my-5">
        <EditProject />
      </div>
    </div>
  );
}

export default ProjectEdit;
