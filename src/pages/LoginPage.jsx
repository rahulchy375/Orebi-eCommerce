import React, { useState } from "react";
import HeadingReuse from "../reuse/HeadingReuse";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { Link } from "react-router-dom";

const LoginPage = () => {
  let [showPass, setShowPass] = useState(false);
  const handlePassword = () => {
    setShowPass(!showPass);
  };

  return (
    <section id="loginSection">
      <div className="container mx-auto p-[10px]">
        <div className="my-[50px]">
          <HeadingReuse heading="Login" to="Home" from="Login" toLink="/" />
        </div>
        <p className="text-center pb-[30px] border-b border-[#eeeeed]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea magni
          temporibus ad dicta quisquam, delectus unde numquam hic corporis
          pariatur!
        </p>

        <h2 className="text-[24px] font-bold my-[30px]">Returning Customer</h2>
        <div className="">
          <div className="mb-[20px]">
            <label htmlFor="mail">Email Address</label>
            <input
              type="email"
              id="mail"
              placeholder="Enter your mail..."
              className="bg-[#fff9f9f5] w-full outline-none pb-[5px] 
              border-b border-[#eeeeed]"
            />
          </div>
          <div className="relative">
            <label htmlFor="password">Password</label>
            <input
              type={showPass ? "text" : "password"}
              id="password"
              placeholder="Enter your password..."
              className="bg-[#fff9f9f5] w-full outline-none pb-[5px] 
              border-b border-[#eeeeed]"
            />
            <div
              className="absolute top-[60%] translate-x-[-50%] right-[10px]"
              onClick={handlePassword}
            >
              {showPass ? <IoEye /> : <IoEyeOff />}
            </div>
          </div>
        </div>
        <div className="pb-[40px] border-b border-[#eeeeed]">
          <button className="border border-[#D8D8D8] px-[35px] py-[10px] mt-[30px] font-bold text-[14px] hover:bg-[#262626] hover:text-white duration-300">
            Log In
          </button>
        </div>

        <h2 className="text-[24px] font-bold text-center my-[30px]">
          New Customer
        </h2>
        <p className="text-center mb-[15px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea magni
          temporibus ad dicta quisquam, delectus unde numquam hic corporis
          pariatur!
        </p>

        <div className="flex justify-center items-center">
          <button className="border border-[#D8D8D8] px-[35px] py-[10px] mt-[30px] font-bold text-[14px] hover:bg-[#262626] hover:text-white duration-300">
            <Link to="/signUp">Sign Up</Link>
            
          </button>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
