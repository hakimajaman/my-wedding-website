import React from "react";

const Section6 = ({ isEnglish }) => (
  <>
    <p className="mb-4">
      {isEnglish ? "Du'a for the bride and the groom" : "Do’a untuk Pengantin"}
    </p>
    <p className="mb-4">
      بَارَكَ اللهُ لَكَ وَبَارَكَ عَلَيْكَ وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ
    </p>
    <p className="mb-4">
      Baarokallahu laka wa baaroka ‘alaika wa jama’a baynakumaa fii khoir
    </p>
    <p>
      {isEnglish
        ? '"May Allah bless for you, and may He bless on you, and combine both of you in good (works)." (Sunan Abu Dawood 2130)"'
        : "“Semoga Allah memberkahimu ketika bahagia dan ketika susah, serta mengumpulkan kalian berdua dalam kebaikan.” (HR. Abu Daud, no. 2130)."}
    </p>
  </>
);

export default Section6;
