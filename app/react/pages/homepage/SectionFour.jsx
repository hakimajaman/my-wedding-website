import React from "react";

const wedding = {
  name: "AKAD NIKAH",
  time: "08-00 - Selesai",
  address: "Masjid Al Hidayah, Tembesi Tower",
};

const party = {
  name: "RESEPSI",
  time: "14-00 - Selesai",
  address: "Tembesi Tower, Gang Melati No. 73",
};

const AddressComponent = ({ name, time, address }) => (
  <div>
    <div>
      <h4 className="font-bold text-2xl relative z-10">{name}</h4>
      <hr className="bg-figma-EA4A8D border-figma-EA4A8D border-8 opacity-50 relative bottom-4" />
    </div>
    <h6 className="italic text-xl mb-2">Pukul</h6>
    <h4 className="font-bold text-xl mb-2">{time}</h4>
    <h6 className="text-lg">di {address}</h6>
  </div>
);

const SectionFour = () => (
  <div className="grid grid-cols-3 gap-3">
    <AddressComponent
      name={wedding.name}
      time={wedding.time}
      address={wedding.address}
    />
    <div className="mt-5">
      <h5 className="text-3xl italic font-thin">Ahad,</h5>
      <h1 className="text-7xl">15</h1>
      <h5 className="text-xl italic font-thin">Mei 2022 M/</h5>
      <h5 className="text-xl italic font-thin">13 Syawal 1443 H</h5>
    </div>
    <AddressComponent
      name={party.name}
      time={party.time}
      address={party.address}
    />
  </div>
);

export default SectionFour;
