import React from "react";
import Card from "./base/Card";

const Pagination = ({ totalPages, page, handleButton }) => {
  return Array.from(Array(totalPages), (e, i) => {
    return (
      <Card
        key={i}
        rootClassName={`inline-block mb-3 ${
          page === i + 1 ? "mr-7 cursor-default" : "mr-2 cursor-pointer"
        }`}
        useShadow={page === i + 1 ? true : false}
        onClick={() => handleButton(i + 1)}
      >
        {i + 1}
      </Card>
    );
  });
};

export default Pagination;
