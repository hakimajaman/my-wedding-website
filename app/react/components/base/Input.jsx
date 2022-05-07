import React from "react";

const Input = ({ label, type, className, ...props }) => {
  return (
    <label
      className={`text-left active:text-fuchsia-400 hover:text-fuchsia-400 flex flex-col items-start ${
        className ? className : ""
      }`}
    >
      <span className="focus:text-fuchsia-400 focus:font-bold ml-1 mb-1">
        {label}:
      </span>
      <input
        placeholder={label}
        className="w-full border-x-2 border-y-2 border-black rounded-lg px-3 py-2 outline-none
	transition-all focus:border-fuchsia-400 focus:shadow-lg focus:shadow-figma-C77F91
	"
        type={type}
        {...props}
      />
    </label>
  );
};

export default Input;
