import React from "react";
import mainImg from "/mainImg.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import Slider from "react-slick";

const MainSection = () => {
  var settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
          position: "absolute",
          top: "50%",
          left: "0px",
          transform: "translateY(-50%)",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "15px",
          color: "transparent",
        }}
      >
        {i + 1}
      </div>
    ),
  };
  return (
    <section id="mainSection" className="bg-[#F5F5F3]">
      <div className="container mx-auto p-[10px]">
        <Slider {...settings}>
          <div className="">
            <div className="contentDiv text-center py-[30px] flex flex-col sm:flex-row justify-center sm:justify-around items-center">
              <div className="sm:text-left sm:ml-[70px] lg:ml-0">
                <div className="order-1">
                  <div className="text-[35px] lg:text-[50px] font-bold">
                    Final Offer!
                  </div>
                  <p className="">
                    Up to <span className="text-[25px] font-bold">50%</span>{" "}
                    sale for all furniture items!
                  </p>
                </div>

                <button className="mt-[10px] sm:mt-[30px] lg:mt-[50px] mb-[40px] sm:mb-0 px-[15px] py-[6px] bg-[#262626] w-[140px] text-white">
                  Shop Now
                </button>
              </div>

              <div className="order-2 sm:order-3 flex flex-col justify-center items-center">
                <img
                  src={mainImg}
                  alt="Wireless bluetooth headphone"
                  className="w-[60%] sm:w-[60%] lg:w-[90%]"
                />

                <div className="">
                  <button className="hover:text-blue-600 mt-[15px] text-[18px] sm:hidden">
                    View More <FaLongArrowAltRight className="inline" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="contentDiv text-center py-[30px] flex flex-col sm:flex-row justify-center sm:justify-around items-center">
              <div className="sm:text-left sm:ml-[70px] lg:ml-0">
                <div className="order-1">
                  <div className="text-[35px] lg:text-[50px] font-bold">
                    Final Offer!
                  </div>
                  <p className="">
                    Up to <span className="text-[25px] font-bold">50%</span>{" "}
                    sale for all furniture items!
                  </p>
                </div>

                <button className="mt-[10px] sm:mt-[30px] lg:mt-[50px] mb-[40px] sm:mb-0 px-[15px] py-[6px] bg-[#262626] w-[140px] text-white">
                  Shop Now
                </button>
              </div>

              <div className="order-2 sm:order-3 flex flex-col justify-center items-center">
                <img
                  src={mainImg}
                  alt="Wireless bluetooth headphone"
                  className="w-[60%] sm:w-[60%] lg:w-[90%]"
                />

                <div className="">
                  <button className="hover:text-blue-600 mt-[15px] text-[18px] sm:hidden">
                    View More <FaLongArrowAltRight className="inline" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="contentDiv text-center py-[30px] flex flex-col sm:flex-row justify-center sm:justify-around items-center">
              <div className="sm:text-left sm:ml-[70px] lg:ml-0">
                <div className="order-1">
                  <div className="text-[35px] lg:text-[50px] font-bold">
                    Final Offer!
                  </div>
                  <p className="">
                    Up to <span className="text-[25px] font-bold">50%</span>{" "}
                    sale for all furniture items!
                  </p>
                </div>

                <button className="mt-[10px] sm:mt-[30px] lg:mt-[50px] mb-[40px] sm:mb-0 px-[15px] py-[6px] bg-[#262626] w-[140px] text-white">
                  Shop Now
                </button>
              </div>

              <div className="order-2 sm:order-3 flex flex-col justify-center items-center">
                <img
                  src={mainImg}
                  alt="Wireless bluetooth headphone"
                  className="w-[60%] sm:w-[60%] lg:w-[90%]"
                />

                <div className="">
                  <button className="hover:text-blue-600 mt-[15px] text-[18px] sm:hidden">
                    View More <FaLongArrowAltRight className="inline" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="contentDiv text-center py-[30px] flex flex-col sm:flex-row justify-center sm:justify-around items-center">
              <div className="sm:text-left sm:ml-[70px] lg:ml-0">
                <div className="order-1">
                  <div className="text-[35px] lg:text-[50px] font-bold">
                    Final Offer!
                  </div>
                  <p className="">
                    Up to <span className="text-[25px] font-bold">50%</span>{" "}
                    sale for all furniture items!
                  </p>
                </div>

                <button className="mt-[10px] sm:mt-[30px] lg:mt-[50px] mb-[40px] sm:mb-0 px-[15px] py-[6px] bg-[#262626] w-[140px] text-white">
                  Shop Now
                </button>
              </div>

              <div className="order-2 sm:order-3 flex flex-col justify-center items-center">
                <img
                  src={mainImg}
                  alt="Wireless bluetooth headphone"
                  className="w-[60%] sm:w-[60%] lg:w-[90%]"
                />

                <div className="">
                  <button className="hover:text-blue-600 mt-[15px] text-[18px] sm:hidden">
                    View More <FaLongArrowAltRight className="inline" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default MainSection;
