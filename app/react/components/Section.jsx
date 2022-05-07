import React from "react";

const Section = ({ children, customMarginClassName, sectionId }) => {
  return (
    <section
      className={`text-center font-google-figma-comic-neue flex flex-col justify-center items-center px-5 text-sm tracking-wide
      md:w-screen md:text-lg
      lg:text-xl
      ${customMarginClassName ? customMarginClassName : "mt-14"}
    `}
      id={sectionId ? `section-${sectionId}` : ""}
    >
      <div className="w-full md:w-1/2">{children}</div>
    </section>
  );
};

export default Section;
