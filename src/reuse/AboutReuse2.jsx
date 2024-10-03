import React from "react";

const AboutReuse2 = ({heading, para}) => {
  return (
    <>
      <div className="mb-[15px]">
        <h3 className="font-bold text-[19px] mb-[10px]">{heading}</h3>
        <p>
          {para}
        </p>
      </div>
    </>
  );
};

export default AboutReuse2;
