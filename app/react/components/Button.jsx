import React from "react";

const Button = ({ name, customClassName, className, ...props }) => {
  return (
    <div
      className={
        customClassName
          ? customClassName
          : `z-10 border px-2 rounded-sm border-green-700 text-green-700 font-light text-xs hover:bg-green-700 hover:text-white transition-all
          lg:text-2xl lg:px-5
          ${className}`
      }
      {...props}
    >
      <button>{name}</button>
    </div>
  );
};

export default Button;
