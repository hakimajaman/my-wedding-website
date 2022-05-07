import React from "react";

const Section1 = ({ isEnglish }) => {
  return (
    <>
      <p>Bismillaahirrohmaanirrohiim</p>
      <br />
      <p>
        {isEnglish
          ? "Glory to Allah ﷻ and all praise is due to Him who created all pairs. With great joy, we would like to hold a celebration of our marriage,"
          : "Maha suci Allah ﷻ dan segala puji baginya, yang telah menciptakan Makhluk-Nya berpasang-pasangan, kami bermaksud menyelenggarakan acara pernikahan kami,"}
      </p>
    </>
  );
};

export default Section1;
