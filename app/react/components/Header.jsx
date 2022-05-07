import React from "react";
import ImageLogo from "../../assets/images/logo.png";
import Button from "./base/Button";

const Header = ({ isEnglish, handleButton }) => {
  return (
    <header className="bg-black bg-opacity-40 w-full fixed z-50 px-5 py-2 flex items-center">
      <div>
        <img src={ImageLogo} alt="Hakim&Aqilla" className="w-36" />
      </div>
      <div className="ml-auto">
        <Button
          colorClassName={`
	 ${
     isEnglish
       ? "border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
       : "border-figma-EA4A8D text-figma-EA4A8D hover:bg-figma-EA4A8D hover:text-white"
   }`}
          onClick={handleButton}
        >
          {isEnglish ? "Bahasa" : "English"}
        </Button>
      </div>
    </header>
  );
};

export default Header;
