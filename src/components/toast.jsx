import React from "react";
const Toast = ({ title, message, type, show = true, onClose }) => {
  const icons = {
    success: "fa-check-circle",
    info: "fa-info-circle",
    error: "fa-exclamation-circle",
  };
  const colors = {
    success: "green-primary",
    info: "red-primary",
    error: "orange-primary",
  };

  const timeClose = 4000;

  const autoRemove = () => {
    if (show) {
      setTimeout(function () {
        onClose();
      }, timeClose);
    }
  };

  autoRemove();

  return show ? (
    <div className=" text-sm box-border fixed top-3 right-3 z-10 ">
      <div
        className={`flex items-center bg-white rounded-md border-l-4 py-5 pr-3
        mt-6 shadow-md transition-all duration-300
        animate-slideInLeftAndFadeOut border-${colors[type]}`}
      >
        <div className={`text-2xl px-4 text-${colors[type]}`}>
          <i className={`fas ${icons[type]}`}></i>
        </div>
        <div className=" flex-grow px-2">
          <div className=" text-lg font-semibold">{title}</div>
          <p className=" text-sm mt-1 text-gray-500 font-medium">{message}</p>
        </div>
        <div
          className=" text-xl px-2 text-black-secondary hover:text-black-primary"
          onClick={onClose}
        >
          <i className="fas fa-times"></i>
        </div>
      </div>
    </div>
  ) : null;
};
export default Toast;
