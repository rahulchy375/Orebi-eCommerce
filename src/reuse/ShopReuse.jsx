import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";

const ShopReuse = ({ title, children, color, hide }) => {
  let [show, setShow] = useState(true);
  const handleShow = () => {
    setShow(!show);
  };
  
  
  return (
    <>
      <div className="mt-[10px] border-b border-[#D8D8D8] pb-[10px]">
        <div className="flex justify-between items-center" onClick={handleShow}>
          <div className="flex items-center gap-1">
            <div className={`w-[10px] h-[10px] rounded-full ${color}`}></div>
            <div className="font-[600] capitalize">{title}</div>
          </div>
        </div>

        <div
          className={` ${
            show === true
              ? "h-[0px] overflow-hidden"
              : "h-auto"
          }`}
        >
        </div>
      </div>
    </>
  );
};

export default ShopReuse;
