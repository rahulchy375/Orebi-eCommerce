import React from "react";

const CheckOutReuse = ({label,For, place, id, w, mar, value}) => {
  return (
    <>
      <div className={`mt-[10px] ${w} ${mar}`}>
        <label For={For} className="block font-bold">
          {label}
        </label>
        <input
          type="text"
          value={value}
          id={id}
          placeholder={place}
          required
          readOnly
          className={`bg-[#fff9f9f5] w-full outline-none pb-[5px] 
            border-b border-[#eeeeed] cursor-default`}
        />
      </div>
    </>
  );
};

export default CheckOutReuse;
