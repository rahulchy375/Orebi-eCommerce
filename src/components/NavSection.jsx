import React, { useState } from "react";
import logo from "/Logo.png";
import { FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

const NavSection = () => {
  let [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  return (
    <section id="navSection">
      <div className="container mx-auto flex justify-between items-center sm:justify-normal sm:gap-[100px] md:gap-[150px] lg:gap-[265px] xl:gap-[400px] p-[10px]">
        <div className="logoDiv">
          <Link to="/">
            <img src={logo} alt="Company logo" />
          </Link>
        </div>
        <div className="navDiv">
          <ul
            className={`${
              show === true
                ? "right-[10px] duration-300"
                : "right-[-100px] duration-300"
            } sm:flex fixed z-10 top-[36px] sm:static overflow-x-hidden bg-slate-400 sm:bg-transparent`}
          >
            <Link>
              <li className="font-semibold mx-[15px] sm:mr-[0px] sm:ml-[30px] mb-[10px] sm:mb-0">
                Home
              </li>
            </Link>
            <Link to="/shop">
              <li className="font-semibold mx-[15px] sm:mr-[0px] sm:ml-[30px] mb-[10px] sm:mb-0">
                Shop
              </li>
            </Link>
            <Link to="/about">
              <li className="font-semibold mx-[15px] sm:mr-[0px] sm:ml-[30px] mb-[10px] sm:mb-0">
                About
              </li>
            </Link>
            <Link to="/contact">
              <li className="font-semibold mx-[15px] sm:mr-[0px] sm:ml-[30px] mb-[10px] sm:mb-0">
                Contacts
              </li>
            </Link>
            <Link to="/journal">
              <li className="font-semibold mx-[15px] sm:mr-[0px] sm:ml-[30px] mb-[10px] sm:mb-0">
                Journal
              </li>
            </Link>
          </ul>
        </div>
        <div className="navIcons visible sm:hidden" onClick={handleShow}>
          {show === true ? <RxCross2 /> : <FaBars />}
        </div>
      </div>
    </section>
  );
};

export default NavSection;
