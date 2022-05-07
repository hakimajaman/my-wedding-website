import React from "react";

const Button = ({ children, customClassName, colorClassName, ...props }) => {
  return (
    <button
      className={`border-2 p-2 rounded-lg w-full font-light text-xs transition-colors
    lg:text-2xl lg:px-5
      ${
        colorClassName
          ? colorClassName
          : "border-green-300 text-green-300 hover:bg-green-300 hover:text-white"
      }
    `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
