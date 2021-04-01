import React from "react";
import EditProjectType from "modules/project-type/components/edit-project-type";

function ProjectTypeEdit() {
  return (
    <div className="flex-1">
      <div className=" w-10/12 flex flex-col mx-auto my-5">
        <EditProjectType />
      </div>
    </div>
  );
}

export default ProjectTypeEdit;
