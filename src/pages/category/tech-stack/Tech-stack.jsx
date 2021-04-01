import React from "react";
import ListTechStack from "modules/tech-stack/components/list-tech-stack";
import CreateNewTechStack from "modules/tech-stack/components/create-new-tech-stack";

function TechStack() {
  return (
    <div className=" flex-1">
      <div className=" w-10/12 flex flex-col mx-auto my-0">
        <CreateNewTechStack />
        <ListTechStack />
      </div>
    </div>
  );
}

export default TechStack;
