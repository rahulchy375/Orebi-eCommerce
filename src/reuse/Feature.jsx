import React from "react";

const Feature = ({title, value}) => {
  return (
    <>
      <div className="font-bold">
        {title}{" "}
        <span className="font-semibold ml-[5px]">{value}</span>
      </div>
    </>
  );
};

export default Feature;
