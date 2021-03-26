import React from "react";
import EditProjectStatus from "modules/project-status/components/edit-project-status";

function ProjectStatusEdit() {
  return (
    <div className="flex-1">
      <div className=" w-10/12 flex flex-col mx-auto my-5">
        <EditProjectStatus />
      </div>
    </div>
  );
}

export default ProjectStatusEdit;
