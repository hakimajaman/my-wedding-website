import React from "react";
import LogoBlack from "../../../assets/images/title-black.png";

const Section5 = ({ isEnglish }) => {
  return (
    <>
      <span className="lg:text-xl">
        {isEnglish
          ? "For your kind presence, we would like to say"
          : "Atas kehadirannya, kami ucapkan"}
      </span>
      <h3 className="font-bold text-2xl lg:text-3xl">
        Syukron wa Jazaakumullahu Khairan
      </h3>
      <div className="flex justify-center mt-16">
        <img src={LogoBlack} alt="Hakim&Aqilla" width="430px" />
      </div>
    </>
  );
};

export default Section5;
