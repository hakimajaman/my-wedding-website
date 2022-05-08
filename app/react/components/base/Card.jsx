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
      ${className}
    `}
      style={{
        background: "white",
        borderRadius: "0.5rem",
        padding: "1.25rem",
        borderWidth: "2px",
        borderColor: "black",
        width: "100%",
        zIndex: "20",
        position: useShadow ? "relative" : "static",
      }}
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
