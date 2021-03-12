import React from "react";

const Modal = props => {
  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center opacity-0 transition-all pointer-events-none ${
        props.show ? "opacity-100 pointer-events-auto" : ""
      }`}
      onClick={props.onClose}
    >
      <div className="bg-white w-100 mt-24 rounded-md" onClick={e => e.stopPropagation()}>
        <div className="p-3 flex justify-between">
          <h4 className="m-0 text-lg">{props.title}</h4>
          <button className=" text-xl focus:outline-none" onClick={props.onClose}>
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className=" px-5 py-3 border-t border-b border-gray-200">{props.children}</div>
      </div>
    </div>
  );
};

export default Modal;
