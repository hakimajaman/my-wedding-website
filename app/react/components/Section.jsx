import React from "react";

const Section = ({ component, customMarginClassName, sectionId }) => {
  return (
    <section
      className={`text-center font-google-figma-comic-neue flex flex-col justify-center items-center px-5 text-sm tracking-wide
      md:w-screen md:text-lg
      lg:text-xl
      ${customMarginClassName ? customMarginClassName : "mt-14"}
    `}
      id={sectionId ? `section-${sectionId}` : ""}
    >
      <div className="md:w-1/2">{component}</div>
    </section>
  );
};

export default Section;
