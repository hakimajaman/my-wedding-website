import React from "react";

const Section2 = ({ isEnglish }) => {
  const family = [
    {
      gender: "m",
      future: "Rifqi Taufiqul Hakim",
      numberInFamily: isEnglish ? "second" : "kedua",
      father: "Zulherman",
      mother: "Indrawati",
    },
    {
      gender: "f",
      future: "Aqilla Fidiya Haya Yusuf",
      numberInFamily: isEnglish ? "eldest" : "pertama",
      father: "Ahmad Faisol Yusuf",
      mother: "Rina Marlina(Rahimahallah)",
    },
  ];

  return family.map((x, index) => (
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
        {isEnglish
          ? x.gender === "m"
            ? `The ${x.numberInFamily} child  of Mr. ${x.father} and Mrs. ${x.mother}`
            : `The ${x.numberInFamily} child of Mr. ${x.father} and Mrs. ${x.mother}`
          : x.gender === "m"
          ? `Putra ${x.numberInFamily} dari bapak ${x.father} dan ibu ${x.mother}`
          : `Putri ${x.numberInFamily} dari bapak ${x.father} dan ibu ${x.mother}`}
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
};

export default Section2;
