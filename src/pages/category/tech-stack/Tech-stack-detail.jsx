import React from "react";
import DetailTechStack from "../../../modules/tech-stack/components/detail-tech-stack";

function TechStackDetail() {
  return (
    <div className=" flex-1">
      <div className=" w-11/12 flex flex-col mx-auto my-5">
        <DetailTechStack />
      </div>
    </div>
  );
}

export default TechStackDetail;
