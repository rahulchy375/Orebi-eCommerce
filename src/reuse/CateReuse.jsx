import React from "react";

const CateReuse = ({title , color, noBorder}) => {
  return (
    <>
    <div className={`flex items-center gap-1 ml-[10px] mt-[5px] cursor-default border-b border-[#D8D8D8] pb-[5px] ${noBorder}`}>
      <div className={`w-[10px] h-[10px] rounded-full ${color}`}></div>
      <div className="font-[500]">  {title}</div>
    </div>
    </>
  );
};

export default CateReuse;
