import React from "react";

const AddressComponent = ({ name, time, address, isEnglish }) => (
  <div>
    <div>
      <h4
        className="font-bold text-xs relative z-10
        sm:text-lg
        lg:text-2xl
      "
      >
        {name}
      </h4>
      <hr className="bg-figma-EA4A8D border-figma-EA4A8D border-8 opacity-50 relative bottom-4" />
    </div>
    <h6 className="italic text-xl mb-2">{isEnglish ? "Time" : "Pukul"}</h6>
    <h4 className="font-bold text-xl mb-2">{time}</h4>
    <h6 className="text-lg">
      {isEnglish ? "at" : "di"} {address}
    </h6>
  </div>
);

const Section4 = ({ isEnglish }) => {
  const wedding = {
    name: isEnglish ? "MARRIAGE" : "AKAD NIKAH",
    time: isEnglish ? "08:00 - Finish" : "08:00 - Selesai",
    address: "Masjid Al Hidayah, Tembesi Tower",
  };

  const party = {
    name: isEnglish ? "RECEPTION" : "RESEPSI",
    time: isEnglish ? "14:00 - Finish" : "14:00 - Selesai",
    address: "Tembesi Tower, Gang Melati No. 73",
  };

  return (
    <div className="grid grid-cols-3 gap-3">
      <AddressComponent
        name={wedding.name}
        time={wedding.time}
        address={wedding.address}
        isEnglish={isEnglish}
      />
      <div className="mt-5">
        <h5 className="text-3xl italic font-thin">
          {isEnglish ? "Sunday" : "Ahad,"}
        </h5>
        <h1 className="text-7xl">15</h1>
        <h5 className="text-xl italic font-thin">
          {isEnglish ? "May 2022" : "Mei 2022 M"}
        </h5>
        <h5 className="text-xl italic font-thin">
          {isEnglish ? "Syawal 14, 1443 H" : "14 Syawal 1443 H"}
        </h5>
      </div>
      <AddressComponent
        name={party.name}
        time={party.time}
        address={party.address}
        isEnglish={isEnglish}
      />
    </div>
  );
};

export default Section4;
