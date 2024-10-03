import React, { useEffect, useState } from "react";
import newImg from "/newImg.png";
import { FaHeart } from "react-icons/fa";
import { LuRefreshCcw } from "react-icons/lu";
import { FaShoppingCart } from "react-icons/fa";
import axios from "axios";
import Slider from "react-slick";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";
import phoneImg from "/phoneImg.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../slice/productSlice";
import { toast } from "react-toastify";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute right-[-10px] top-[50%] translate-y-[-110%] inline-block rounded-full bg-[#979797] text-white p-[10px] text-[13px] z-10"
      onClick={onClick}
    >
      <FaLongArrowAltRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute left-[-10px] top-[50%] translate-y-[-110%] inline-block rounded-full bg-[#979797] text-white p-[10px] text-[13px] z-10"
      onClick={onClick}
    >
      <FaLongArrowAltLeft />
    </div>
  );
}

const NewArriSection = () => {
  let [apiData, setApiData] = useState([]);

  let getData = () => {
    axios.get("https://dummyjson.com/products").then((response) => {
      setApiData(response.data.products);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  let dispatch = useDispatch();
  const handleAddToCart = (item) =>{
    dispatch(addToCart({...item, qan:1}));
  }

  return (
    <section id="newArrivalSection">
      <div className="container mx-auto px-[20px] sm:px-0">
        <h2 className="mb-[35px] text-[30px] font-bold">New Arrivals</h2>
        <Slider {...settings}>
          {apiData.map((item) => (
            <div className="flex gap-2" key={item.id}>
              <div className="mx-[10px]" id={item.id}>
                <div className="group relative flex justify-center items-center shadow">
                  <Link to={`/shop/${item.id}`}>
                    <img src={item.thumbnail} alt="" />
                  </Link>

                  <div className="absolute right-0 bottom-0 text-right bg-[#F5F5F5] w-full h-0 group-hover:h-[60%] overflow-hidden duration-300 ease-in-out">
                    <p className="my-[20px] text-[14px] text-black hover:text-[#767676] font-semibold">
                      Add to wish list <FaHeart className="inline ml-[10px]" />
                    </p>
                    <p className="my-[20px] text-[14px] text-black hover:text-[#767676] font-semibold">
                      Compare <LuRefreshCcw className="inline ml-[10px]" />
                    </p>
                    <p className="my-[20px] text-[14px] text-black hover:text-[#767676] font-semibold" onClick={()=>handleAddToCart(item)}>
                      Add to cart
                      <FaShoppingCart className="inline ml-[10px]" />
                    </p>
                  </div>
                  <div className="absolute top-0 left-[10px] bg-black text-white inline-block px-[8px] rounded-[5px] text-[13px] leading-[2]">
                    New
                  </div>
                </div>

                <div className="flex justify-between items-center mt-[10px]">
                  <h3 className="text-[16px] font-semibold">{item.title}</h3>
                  <p className="text-[14px] font-semibold text-[#767676]">
                    {`$${item.price}`}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        <Slider {...settings} className="mt-[100px] sm:mt-[150px]">
          {apiData.map((item) => (
            <div className="flex gap-2">
              <div className="mx-[10px]">
                <div className="group relative flex justify-center items-center shadow">
                  <Link to={`/shop/${item.id}`}>
                  <img src={item.thumbnail} alt="" />
                  </Link>
                  
                  <div className="absolute right-0 bottom-0 text-right bg-[#F5F5F5] w-full h-0 group-hover:h-[60%] overflow-hidden duration-300 ease-in-out">
                    <p className="my-[20px] text-[14px] text-black hover:text-[#767676] font-semibold">
                      Add to wish list <FaHeart className="inline ml-[10px]" />
                    </p>
                    <p className="my-[20px] text-[14px] text-black hover:text-[#767676] font-semibold">
                      Compare <LuRefreshCcw className="inline ml-[10px]" />
                    </p>
                    <p className="my-[20px] text-[14px] text-black hover:text-[#767676] font-semibold" onClick={() =>{handleAddToCart(item)}}>
                      Add to cart
                      <FaShoppingCart className="inline ml-[10px]" />
                    </p>
                  </div>
                  <div className="absolute top-0 left-[10px] bg-black text-white inline-block px-[8px] rounded-[5px] text-[13px] leading-[2]">
                    New
                  </div>
                </div>

                <div className="flex justify-between items-center mt-[10px]">
                  <h3 className="text-[16px] font-semibold">{item.title}</h3>
                  <p className="text-[14px] font-semibold text-[#767676]">
                    {`$${item.price}`}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="my-[50px] sm:my-[70px]">
        <img src={phoneImg} alt="" />
      </div>
    </section>
  );
};

export default NewArriSection;
