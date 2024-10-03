import React from "react";
import { Link } from "react-router-dom";
const AboutResue = ({ img, btn, to }) => {
  return (
    <>
      <div className="relative w-[80%] lg:w-[30%]">
        <img src={img} alt="" />
        <Link to={to}>
          <button
            className=" absolute bottom-[0px] left-[50%] translate-x-[-50%] border border-[#D8D8D8] px-[10px] sm:px-[30px] py-[10px] mt-[30px] font-bold text-[14px] hover:bg-[#262626] hover:text-white duration-300"
          >
            {btn}
          </button>
        </Link>
      </div>
    </>
  );
};

export default AboutResue;
