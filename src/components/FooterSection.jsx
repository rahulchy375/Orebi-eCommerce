import React from "react";
import footerLogo from "/Logo.png";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";

const FooterSection = () => {
  return (
    <section id="footerSection" className="bg-[#F5F5F3]">
      <div className="container mx-auto p-[10px]">
        <div className="flex flex-col sm:flex-row sm:justify-between">
          <div className="flex justify-between sm:justify-start order-2 sm:order-1">
            <div className="sm:mr-[60px] lg:mr-[100px] xl:mr-[130px]">
              <h3 className="mb-[7px] font-bold text-[16px]">Menu</h3>
              <ul className="text-[15px] text-[#6D6D6D]">
                <li className="hover:text-black duration-300 mb-[5px]">Home</li>
                <li className="hover:text-black duration-300 mb-[5px]">Shop</li>
                <li className="hover:text-black duration-300 mb-[5px]">
                  About
                </li>
                <li className="hover:text-black duration-300 mb-[5px]">
                  Contact
                </li>
                <li className="hover:text-black duration-300 mb-[5px]">
                  Journal
                </li>
              </ul>
            </div>
            <div className="text-center sm:mr-[60px] lg:mr-[100px] xl:mr-[130px]">
              <h3 className="mb-[7px] font-bold text-[16px]">Shop</h3>
              <ul className="text-[15px] text-[#6D6D6D]">
                <li className="hover:text-black duration-300 mb-[5px]">
                  Category 1
                </li>
                <li className="hover:text-black duration-300 mb-[5px]">
                  Category 2
                </li>
                <li className="hover:text-black duration-300 mb-[5px]">
                  Category 3
                </li>
                <li className="hover:text-black duration-300 mb-[5px]">
                  Category 4
                </li>
                <li className="hover:text-black duration-300 mb-[5px]">
                  Category 5
                </li>
              </ul>
            </div>
            <div className="text-right">
              <h3 className="mb-[7px] font-bold text-[16px]">Help</h3>
              <ul className="text-[15px] text-[#6D6D6D]">
                <li className="hover:text-black duration-300 mb-[5px]">Home</li>
                <li className="hover:text-black duration-300 mb-[5px]">Shop</li>
                <li className="hover:text-black duration-300 mb-[5px]">
                  About
                </li>
                <li className="hover:text-black duration-300 mb-[5px]">
                  Contact
                </li>
                <li className="hover:text-black duration-300 mb-[5px]">
                  Journal
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center md:text-left sm:text-right order-1 sm:order-2 flex flex-col md:flex-row md:justify-between md:items-start">
            <div className="order-2 md:order-1 mb-[20px]">
              <p className="font-semibold text-[15px]">(+88)01884805902 </p>
              <a
                href="https://rahulsportfolioui.netlify.app/"
                className="my-[4px] inline-block font-semibold text-[15px] text-wrap"
              >
                https://rahulsportfolioui.netlify.app/
              </a>
              <p className="font-semibold text-[15px]">
                South Kattali, Pahartali, Chattogram
              </p>
            </div>
            <div className="flex justify-center sm:justify-end items-center order-1 md:order-2 mb-[15px] sm:mt-[10px] md:ml-[70px] lg:mx-[100px] xl:mx-[150px] md:mt-[5px]">
              <img src={footerLogo} alt="Company Logo" />
            </div>
          </div>
        </div>
        <div className="sm:flex justify-between">
          <div className="flex mt-[25px] justify-center text-[20px]">
            <a href="/" className="mx-[10px] sm:ml-0">
              <FaFacebook />
            </a>
            <a href="/" className="mx-[10px]">
              <FaLinkedin />
            </a>
            <a href="/" className="mx-[10px]">
              <IoLogoInstagram />
            </a>
          </div>
          <div className="text-[14px] text-center text-[#6D6D6D] mt-[20px]">
            Copyright by Rahul Chowdhury 17 July, 2024
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
