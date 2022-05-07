import React from "react";
import Card from "../../components/base/Card";

const Section8 = ({ isEnglish, messages }) => {
  return (
    <Card className="text-left min-h-0">
      <h1 className="text-4xl mb-5 font-sans">
        {isEnglish ? "Messages" : "Pesan teman-teman:"}
      </h1>
      {messages.map((x, index) => (
        <div className="mb-6">
          <Card useShadow={true} key={index}>
            <p className="underline mb-3 font-mono font-bold">
              {x?.name ? x.name : ""}
            </p>
            <p>{x?.message ? x.message : ""}</p>
          </Card>
        </div>
      ))}
    </Card>
  );
};

export default Section8;
