import React from "react";
import { MdArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";
import { useState } from "react";

const ShopCateReuse = ({ title, children, mar}) => {
  let [show, setShow] = useState(true);
  const handleClick = () => {
    setShow(!show);
  };
  return (
    <>
      <div className={`mt-[20px] cursor-default ${mar}`} >
        <div className="flex flex-col" onClick={handleClick}>
          <div className="flex justify-between items-center cursor-default">
            <div className="font-[700]">{title}</div>
            <div className="">
              {show === true ? <MdArrowDropDown /> : <MdOutlineArrowDropUp />}
            </div>
          </div>
        </div>
        <div className={show === true ? "h-0 overflow-hidden" : "h-auto"}>
          {children}
        </div>
      </div>
    </>
  );
};

export default ShopCateReuse;
