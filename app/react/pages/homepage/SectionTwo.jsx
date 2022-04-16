import React from "react";

const family = [
  {
    gender: "m",
    future: "Rifqi Taufiqul Hakim",
    numberInFamily: "kedua",
    father: "Zulherman",
    mother: "Indrawati",
  },
  {
    gender: "f",
    future: "Aqilla Fidiya Haya Yusuf",
    numberInFamily: "pertama",
    father: "Ahmad Faisol Yusuf",
    mother: "Rina Marlina(Rahimahallah)",
  },
];

const SectionTwo = () =>
  family.map((x, index) => (
    <div key={index} className={`${index !== family.length - 1 ? "mb-2" : ""}`}>
      <h2
        className="font-google-figma-Parisienne text-figma-C77F91 text-3xl
        md:text-4xl
        lg:text-5xl lg:mb-2
      "
      >
        {x.future}
      </h2>
      <span>
        {x.gender === "m" ? "Putra" : "Putri"} {x.numberInFamily} dari bapak{" "}
        {x.father} dan ibu {x.mother}
      </span>
      {index !== family.length - 1 ? (
        <h2 className="font-google-figma-Parisienne text-figma-C77F91 text-3xl mt-2">
          &
        </h2>
      ) : (
        <></>
      )}
    </div>
  ));

export default SectionTwo;
