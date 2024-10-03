import React from "react";
import { FaGreaterThan } from "react-icons/fa6";
import { Link } from "react-router-dom";

const HeadingReuse = ({heading, to, from, toLink, fromLink}) => {
  return (
    <>
      <div className="">
        <h1 className="text-[35px] font-bold mt-[10px] leading-[30px] text-center sm:text-left">
          {heading}
        </h1>
        <p className="text-center sm:text-left">
          <Link to={toLink} className="text-[14px]">
            {to}
          </Link>{" "}
          <FaGreaterThan className="inline text-[10px] font-[100]" />
          <Link to={fromLink} className="text-[14px] ml-[3px]">
            {from}
          </Link>
        </p>
      </div>
    </>
  );
};

export default HeadingReuse;
