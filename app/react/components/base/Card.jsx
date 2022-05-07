import React from "react";

const Card = ({
  children,
  useShadow,
  customShadowColorClassName,
  className,
}) => (
  <div className={`${useShadow ? "relative mb-2" : ""}`}>
    <div
      className={`
      rounded-lg p-5
      border-2
      border-black bg-white
        w-full z-20 ${useShadow ? "relative" : ""}
      ${className}
    `}
    >
      {children}
    </div>
    {useShadow ? (
      <div
        className={`
      rounded-lg
      ${
        customShadowColorClassName
          ? customShadowColorClassName
          : "border-figma-EA4A8D bg-figma-EA4A8D"
      }
        w-full h-full absolute left-3 top-3 z-10
    `}
      ></div>
    ) : (
      <></>
    )}
  </div>
);

export default Card;
