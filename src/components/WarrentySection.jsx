import React from "react";
import { PiNumberTwoBold } from "react-icons/pi";
import { FaShippingFast } from "react-icons/fa";
import { VscDebugRestart } from "react-icons/vsc";

const WarrentySection = () => {
  return (
    <section id="warrantySection">
      <div className="container mx-auto text-center mb-[30px] sm:mb-[50px] sm:flex justify-between items-center py-[20px] pb-[0px]">
        <div className="flex flex-col sm:flex-row justify-center items-center mb-[30px] sm:mb-[0px]">
          <PiNumberTwoBold className="text-[25px]" /> Two Years of Warranty
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center mb-[30px] sm:mb-[0px]">
          <FaShippingFast className="text-[25px] sm:mr-[10px]" /> Free Shipping
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center">
          <VscDebugRestart className="text-[25px] sm:mr-[10px]" /> Return policy
          in 30 days
        </div>
      </div>
    </section>
  );
};

export default WarrentySection;
