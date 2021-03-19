import React from "react";
import TableTechStack from "../../../modules/tech-stack/components/table-tech-stack";
import CreateNewTechStack from "../../../modules/tech-stack/components/create-new-tech-stack";

function TechStack() {
  return (
    <div className=" flex-1">
      <div className=" w-10/12 flex flex-col mx-auto my-0">
        <CreateNewTechStack />
        <TableTechStack />
      </div>
    </div>
  );
}

export default TechStack;
