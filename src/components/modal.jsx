import React from "react";

const Modal = props => {
  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center opacity-0 transition-all pointer-events-none ${
        props.show ? "opacity-100 pointer-events-auto" : ""
      }`}
      onClick={props.onClose}
    >
      <div
        className="bg-white w-100 sm:w-160 lg:w-180  my-20 rounded-md"
        onClick={e => e.stopPropagation()}
      >
        <div className=" flex justify-end p-3 px-7 text-gray-secondary">
          <button className=" focus:outline-none text-2xl" onClick={props.onClose}>
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className=" lg:px-14 lg:pb-8 px-10 pb-6">
          <div className="m-0 text-3xl pb-5 font-medium">{props.title}</div>
          <div className="">{props.children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
