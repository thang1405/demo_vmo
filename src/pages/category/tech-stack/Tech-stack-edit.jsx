import React from "react";
import EditTechStack from "modules/tech-stack/components/edit-tech-stack";

function TechStackEdit() {
  return (
    <div className="flex-1">
      <div className=" w-10/12 flex flex-col mx-auto my-5">
        <EditTechStack />
      </div>
    </div>
  );
}

export default TechStackEdit;
