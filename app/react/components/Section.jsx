import React from "react";

const Section = ({ component }) => {
  return (
    <section
      className="text-center font-google-figma-comic-neue flex flex-col justify-center items-center px-5 mt-10 text-sm
      md:w-screen md:text-lg
      lg:text-xl
    "
    >
      <div className="md:w-1/2">{component}</div>
    </section>
  );
};

export default Section;
