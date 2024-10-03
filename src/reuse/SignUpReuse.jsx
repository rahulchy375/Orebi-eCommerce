import React from "react";

const SignUpReuse = ({For, label, id, placeholder, type, onChange}) => {
  return (
    <>
      <div className="mb-[10px] sm:w-[50%]">
        <label htmlFor={For}>{label}</label>
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          className={`bg-[#fff9f9f5] w-full outline-none pb-[5px] 
            border-b border-[#eeeeed]`}
          required
          onChange={onChange}
        />
      </div>
    </>
  );
};

export default SignUpReuse;
