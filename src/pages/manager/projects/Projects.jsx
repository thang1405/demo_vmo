import React from "react";
import ListProject from "modules/projects/components/list-projects";
import CreateNewProject from "modules/projects/components/create-new-project";
export default function Project() {
  return (
    <div className=" flex-1">
      <div className=" w-10/12 flex flex-col mx-auto my-0">
        <CreateNewProject />
        <ListProject />
      </div>
    </div>
  );
}
