import React, { useEffect, useMemo, useRef, useState } from "react";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { FaSearch } from "react-icons/fa";
import { HiUser } from "react-icons/hi2";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { removeProduct } from "../slice/productSlice";
import axios from "axios";
import newImg from "/newImg.png";

const HeaderSection = () => {
  let [apiData, setApiData] = useState([]);
  let [catShow, setCatShow] = useState(false);
  let [accShow, setAccShow] = useState(false);
  let [cartShow, setCartShow] = useState(false);
  let catRef = useRef();
  let accRef = useRef();
  let cartRef = useRef();
  let cartClicking = useRef();
  let navigate = useNavigate();

  let getData = () => {
    axios.get("https://dummyjson.com/products").then((response) => {
      setApiData(response.data.products);
    });
  };

  useEffect(() => {
    getData();
    const handleUseEffectClick = (e) => {
      // console.log(catRef.current.contains(e.target));
      if (catRef.current && catRef.current.contains(e.target) === true) {
        setCatShow(!catShow);
      } else {
        setCatShow(false);
      }
      // console.log(accRef);

      if (accRef.current && accRef.current.contains(e.target) === true) {
        setAccShow(!accShow);
      } else {
        setAccShow(false);
      }
      if (cartRef.current && cartRef.current.contains(e.target) === true) {
        setCartShow(!cartShow);
      } else {
        setCartShow(false);
      }
      if (cartClicking.current && cartClicking.current.contains(e.target)) {
        setCartShow(true);
      }
    };
    window.addEventListener("click", handleUseEffectClick);
    return () => window.removeEventListener("click", handleUseEffectClick);
  }, [catShow, accShow, cartShow]);

  let cartInfo = useSelector((state) => state.product.cartItem);
  let dispatch = useDispatch();

  const subTotal = useMemo(() => {
    return cartInfo.reduce((acc, curPrice) => {
      acc += curPrice.price * curPrice.qan;
      return acc;
    }, 0);
  }, [cartInfo]);

  const handleCart = () => {
    navigate(`/cart`);
    setCartShow(false);
  };
  const handleCheckOut = () => {
    navigate(`/checkout`);
    setCartShow(false);
  };

  let [searchValue, setSearchValue] = useState([]);
  let [searchInputValue, setSearchInputValue] = useState("");
  const handleSearch = (e) => {
    setSearchInputValue(e.target.value);
    if (e.target.value === "") {
      setSearchValue("");
    } else {
      let searching = apiData.filter((item) =>
        item.title.toLowerCase().includes(e.target.value.toLowerCase())
      
      
      );
      setSearchValue(searching);
    }
  };
// console.log(searchValue);



  const handleSearchClick = (id) => {
    navigate(`/shop/${id}`);
    setSearchValue("");
    setSearchInputValue("");
  };


  // ordering with keys:
  let [keySearching, setKeySearching] = useState(-1);
  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      setKeySearching((index) =>
        index < searchValue.length - 1 ? index + 1 : index
      );
    } else if (e.key === "ArrowUp") {
      setKeySearching((index) => (index > 0 ? index - 1 : index));
    } else if (e.key === "Enter" && keySearching >= 0) {
      handleSearchClick(searchValue[keySearching].id);
    }
  };

  // Effect to handle scroll on ArrowUp/ArrowDown
  let searchResultRefs = useRef([]);
  useEffect(() => {
    if (keySearching >= 0 && searchResultRefs.current[keySearching]) {
      searchResultRefs.current[keySearching].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [keySearching]);

  return (
    <section id="headerSection" className="bg-[#F5F5F3]">
      <div className="container mx-auto p-[10px]">
        <header className="flex justify-between items-center relative">
          <div className="sortAndSearch flex flex-col sm:flex-row sm:items-center">
            <div
              className="sortDiv mb-[10px] sm:mb-0 sm:text-[15px] md:text-[16px] cursor-pointer"
              ref={catRef}
            >
              <HiBars3BottomLeft className="inline" /> Sort by Category
            </div>
            <div className="searchDiv relative sm:ml-[75px] md:ml-[135px] lg:ml-[230px] xl:ml-[335px]">
              <input
                type="text"
                className="px-[5px] rounded-[3px] border-none outline-none sm:w-[250px] md:w-[280px] lg:w-[350px] xl:w-[400px] lg:py-[6px]"
                placeholder="Search Product..."
                onChange={handleSearch}
                value={searchInputValue}
                onKeyDown={handleKeyDown}
              />
              <FaSearch className="absolute top-[50%] right-[20px] translate-y-[-50%]" />

              {searchValue.length > 1 ? (
                <div
                  className={` absolute z-[1] left-[0px] sm:left-[50%] top-[50px] sm:translate-x-[-50%] bg-[#F5F5F3] w-[270px] h-[100px] rounded-[10px] overflow-y-scroll`}
                >
                  {searchValue.map((item, i) => (
                    <div
                      className=""
                      key={i}
                      onClick={() => handleSearchClick(item.id)}
                      ref={(el) => (searchResultRefs.current[i] = el)}
                    >
                      <div
                        className={`flex items-center ${
                          i === keySearching ? "bg-gray-200" : ""
                        }`}
                      >
                        <div className="ml-[10px] ">
                          <img
                            src={item.thumbnail}
                            alt=""
                            className="w-[60px]"
                          />
                        </div>
                        <h2 className="ml-[20px] font-semibold">
                          {item.title}
                        </h2>
                      </div>
                    </div>
                  ))}
                </div>
              ) : searchValue.length === 1 ? (
                <div className="absolute z-[1] left-[0px] sm:left-[50%] top-[50px] sm:translate-x-[-50%] bg-[#F5F5F3] w-[270px] h-auto rounded-[10px]">
                  {searchValue.map((item, i) => (
                    <div
                      className=""
                      key={i}
                      onClick={() => handleSearchClick(item.id)}
                    >
                      <div className="flex items-center">
                        <div className="ml-[10px] ">
                          <img
                            src={item.thumbnail}
                            alt=""
                            className="w-[60px]"
                          />
                        </div>
                        <h2 className="ml-[20px] font-semibold">
                          {item.title}
                        </h2>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                ""
              )}
            </div>
          </div>

          {catShow && (
            <div className="absolute top-[30px] left-[3px] z-20">
              <ul>
                <li className="bg-[#262626] text-[#ffffffb1] py-[7px] px-[7px] hover:text-white hover:pl-[12px] duration-300 ease-in-out text-[14px] w-[180px] border-b-[1px] border-[#2D2D2D]">
                  Accessories
                </li>
                <li className="bg-[#262626] text-[#ffffffb1] py-[7px] px-[7px] hover:text-white hover:pl-[12px] duration-300 ease-in-out text-[14px] w-[180px] border-b-[1px] border-[#2D2D2D]">
                  Furniture
                </li>
                <li className="bg-[#262626] text-[#ffffffb1] py-[7px] px-[7px] hover:text-white hover:pl-[12px] duration-300 ease-in-out text-[14px] w-[180px] border-b-[1px] border-[#2D2D2D]">
                  Electronics
                </li>
                <li className="bg-[#262626] text-[#ffffffb1] py-[7px] px-[7px] hover:text-white hover:pl-[12px] duration-300 ease-in-out text-[14px] w-[180px] border-b-[1px] border-[#2D2D2D]">
                  Clothes
                </li>
                <li className="bg-[#262626] text-[#ffffffb1] py-[7px] px-[7px] hover:text-white hover:pl-[12px] duration-300 ease-in-out text-[14px] w-[180px] border-b-[1px] border-[#2D2D2D]">
                  Bags
                </li>
                <li className="bg-[#262626] text-[#ffffffb1] py-[7px] px-[7px] hover:text-white hover:pl-[12px] duration-300 ease-in-out text-[14px] w-[180px] border-b-[1px] border-[#2D2D2D]">
                  Home appliances
                </li>
              </ul>
            </div>
          )}

          <div className="userBttn order-3 flex flex-col sm:flex-row justify-center items-start sm:items-center">
            <button
              className="userDiv flex justify-center items-center mb-[10px] sm:mb-[0px]"
              ref={accRef}
            >
              <HiUser />
              <IoMdArrowDropdown className="ml-[-7px]" />
            </button>
            <button className="sm:ml-[10px] relative" ref={cartRef}>
              {cartInfo.length >= 1 ? (
                <div className="absolute top-[-15px] right-[-20px] flex justify-center items-center bg-slate-400 font-bold h-[25px] w-[25px] rounded-full text-center">
                  {cartInfo.length}
                </div>
              ) : (
                ""
              )}
              <FaCartShopping />
            </button>
          </div>

          {accShow && (
            <div className="absolute top-[60px] right-0 z-20">
              <div className="bg-white py-[10px] px-[20px] hover:bg-[#2B2B2B] hover:text-white font-semibold duration-300 ease-in-out">
                My Account
              </div>
              <div className="bg-white py-[10px] px-[20px] hover:bg-[#2B2B2B] hover:text-white font-semibold duration-300 ease-in-out">
                <Link to="/login">Log In</Link>
                
              </div>
            </div>
          )}

          {cartShow && (
            <div className="" ref={cartClicking}>
              <div className="absolute top-[30px] right-0 bg-[#F5F5F3] w-[275px] shadow z-20">
                {cartInfo.map((item, i) => (
                  <div
                    className=" flex justify-between items-center p-[15px] py-[10px]"
                    key={i}
                  >
                    <div className="flex items-center cursor-default">
                      <div className="">
                        <Link to={`/shop/${item.id}`}>
                          <img
                            src={item.thumbnail}
                            alt=""
                            className="w-[60px]"
                          />
                        </Link>
                      </div>
                      <div className="details">
                        <Link to={`/shop/${item.id}`}>
                          <h4 className="text-[14px] font-[500] mb-[5px]">
                            {item.title}
                          </h4>
                          <p className="text-[14px] font-[500]">{`$${item.price}`}</p>
                        </Link>
                      </div>
                    </div>
                    <div
                      className=""
                      onClick={() => {
                        dispatch(removeProduct(i));
                      }}
                    >
                      <RxCross2 />
                    </div>
                  </div>
                ))}
                <div className="cartBttns bg-white p-[15px]">
                  <p className="text-[14px] text-[#999898] font-semibold mb-[15px]">
                    Subtotal:{" "}
                    <span className="text-black">{`$${subTotal.toFixed(
                      2
                    )}`}</span>
                  </p>
                  <div className="flex justify-between">
                    <button
                      onClick={handleCart}
                      className="py-[8px] px-[25px] text-[14px] font-semibold border border-[#262626] hover:bg-[#262626] hover:text-white duration-300 ease-in-out"
                    >
                      View Cart
                    </button>

                    <button
                      onClick={handleCheckOut}
                      className="py-[8px] px-[25px] text-[14px] font-semibold border border-[#262626] hover:bg-[#262626] hover:text-white duration-300 ease-in-out"
                    >
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </header>
      </div>
    </section>
  );
};

export default HeaderSection;
