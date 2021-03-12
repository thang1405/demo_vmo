import React from "react";
// import bean from "../assets/img/Bean Eater-0.7s-157px.svg";
// import eclipse from "../assets/img/Eclipse-0.6s-197px.svg";
// import gear from "../assets/img/Gear-0.2s-200px.svg";
// import pulse from "../assets/img/Pulse-0.7s-263px.svg";
import welges from "../assets/img/Wedges-2.3s-203px.svg";

export default function Loader() {
  return (
    <div className=" w-full h-screen flex justify-center relative">
      <img src={welges} alt="loading" className="absolute top-40" />
    </div>
  );
}
