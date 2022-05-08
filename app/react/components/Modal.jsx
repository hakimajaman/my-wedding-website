import React from "react";
import Button from "./base/Button";
import Card from "./base/Card";

const Modal = ({ isEnglish, handleClose }) => {
  return (
    <div className="fixed z-50 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
      <Card
        useShadow={true}
        className="text-center"
        customShadowColorClassName="border-red-700 bg-red-700"
      >
        <h2 className="font-bold">
          {isEnglish ? "Error" : "Terjadi Kesalahan"}
        </h2>
        <h5 className="mb-7">
          {isEnglish
            ? "The limit to send a message only 5x every 3 hours"
            : "Batas pengiriman pesan adalah 5x setiap 3 jam"}
        </h5>
        <Button
          colorClassName="border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
          onClick={handleClose}
        >
          OK
        </Button>
      </Card>
    </div>
  );
};

export default Modal;
