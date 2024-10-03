import React from "react";
import discount1Img from "/discount1.png";
import discount2Img from "/discount2.png";
import discount3Img from "/discount3.png";

const DiscountSection = () => {
  return (
    <section id="discountSection">
      <div className="container mx-auto pt-0 pb-[50px] sm:py-[50px]">
        <div className="sm:flex p-[10px] sm:p-0">
          <div className="discount-1 mb-[10px] sm:mb-0 sm:mr-[20px]">
            <img src={discount1Img} alt="Offer 1" />
          </div>
          <div className="">
            <div className="discount-2 mb-[10px] sm:mb-[13px] lg:mb-[23px] xl:mb-[29px]">
              <img src={discount2Img} alt="Offer 2" />
            </div>
            <div className="discount-3">
              <img src={discount3Img} alt="Offer 3" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscountSection;
