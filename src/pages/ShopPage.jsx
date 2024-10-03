import React, { useEffect, useRef, useState } from "react";
import { FaHeart } from "react-icons/fa6";
import { MdWindow } from "react-icons/md";
import { Link } from "react-router-dom";
import ShopReuse from "../reuse/ShopReuse";
import CateReuse from "../reuse/CateReuse";
import ShopCateReuse from "../reuse/ShopCateReuse";
import { TiThList, TiTimes } from "react-icons/ti";
import { TbAlignLeft } from "react-icons/tb";
import axios from "axios";
import { LuRefreshCcw } from "react-icons/lu";
import { FaShoppingCart } from "react-icons/fa";
import HeadingReuse from "../reuse/HeadingReuse";
import Pagination from "../reuse/Pagination";
import PostReuse from "../reuse/PostReuse";
import SetPost from "../reuse/SetPost";

const ShopPage = () => {
  let [show, setShow] = useState(true);
  const handleClick = () => {
    setShow(!show);
  };

  const [apiData, setApiData] = useState([]);

  const getData = () => {
    axios.get("https://dummyjson.com/products").then((response) => {
      setApiData(response.data.products);
    });
  };

  useEffect(() => {
    getData();
  }, []);
  // console.log(apiData);

  let [currentPage, setCurrentPage] = useState(1);
  let [totalPost, setTotalPost] = useState(6);

  let endPost = totalPost * currentPage;
  let startPost = endPost - totalPost;
  let setPost = apiData.slice(startPost, endPost);
  // console.log(setPost);

  let pageNum = [];
  for (let i = 0; i < apiData.length / totalPost; i++) {
    pageNum.push(i);
  }
  // console.log(pageNum);

  const paginate = (item) => {
    setCurrentPage(item + 1);
  };

  let prePage = () => {
    if (currentPage > 1) {
      setCurrentPage((state) => state - 1);
    }
  };

  let nextPage = () => {
    if (currentPage < pageNum.length) {
      setCurrentPage((state) => state + 1);
    }
  };

  const handleShowChange = (e) => {
    setTotalPost(e.target.value);
  };

  let [category, setCategory] = useState([]);
  useEffect(() => {
    setCategory([...new Set(apiData.map((item) => item.category))]);
  }, [apiData]);
  // console.log(category);

  let [filteredCategory, setFilteredCategory] = useState([]);

  const handleCategory = (cItem) => {
    let categoryFilter = apiData.filter((item) => item.category == cItem);
    setFilteredCategory(categoryFilter);
  };
  // console.log(filteredCategory);

  let [brand, setBrand] = useState([]);
  useEffect(() => {
    setBrand([...new Set(apiData.map((item) => item.brand))]);
  }, [apiData]);
  // console.log(brand);

  const handleBrand = (bItem) => {
    let brandFiltering = apiData.filter((item) => item.brand === bItem);
    setFilteredCategory(brandFiltering);
  };

  // let [lowPrice, setLowPrice] = useState(null)
  // let [highPrice, setHighPrice] = useState(null)
  const handlePrice = (value) =>{
    const {low, high} = value;
    // setLowPrice(low);
    // setHighPrice(high);
    let priceFiltering = apiData.filter((item) => item.price > low && item.price <= high)
    setFilteredCategory(priceFiltering);
  }

  let [showMore, setShowMore] = useState(false);
  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  let [slicingFilterCategory, setSlicingFilterCategory] = useState([]);

  const handleShowing = () => {
    setSlicingFilterCategory(
      filteredCategory.slice(0, filteredCategory.length)
    );
  };

  const handleHide = () => {
    setSlicingFilterCategory(filteredCategory.slice(0, 6));
  };

  useEffect(() => {
    setSlicingFilterCategory(filteredCategory.slice(0, 6));
  }, [filteredCategory]);

  const handleViewAll = () => {
    setFilteredCategory([]);
  };

  return (
    <section id="shopPage">
      <div className="container mx-auto p-[10px]">
        <HeadingReuse
          heading="Product"
          to="Home"
          from="Shop"
          toLink="/"
          fromLink="/shop"
        />

        <div className="my-[50px] sm:flex">
          <div className="mb-[20px] relative sm:border-r sm:border-[#D8D8D8]">
            <div
              className="cursor-pointer font-bold text-[21px] sm:hidden"
              onClick={handleClick}
            >
              Shop{" "}
              {show === true ? (
                <TbAlignLeft className="inline font-bold" />
              ) : (
                <TiTimes className="inline" />
              )}
            </div>
            <div
              className={`w-[200px] sm:w-[178px] p-[10px] pt-[5px] sm:pt-[0px] rounded-[7px] sm:rounded-[0px] absolute sm:static overflow-x-hidden z-10 bg-slate-200 sm:bg-[#fff9f9f5] ${
                show === true
                  ? "left-[-220px] duration-300"
                  : "left-[0px] duration-300"
              }`}
            >
              <ShopCateReuse title="Shop by Category" mar="!mt-[0px]">
                {category.map((item, i) => (
                  <div
                    className=""
                    key={i}
                    onClick={() => {
                      handleCategory(item);
                    }}
                  >
                    <ShopReuse title={item} />
                  </div>
                ))}
              </ShopCateReuse>
              <ShopCateReuse title="Shop by Brand">
                {brand.map((item, i) => (
                  <div className="" key={i} onClick={() => handleBrand(item)}>
                    <ShopReuse title={item} />
                  </div>
                ))}
              </ShopCateReuse>
              <ShopCateReuse title="Shop by Price">
                <div
                  className=""
                  onClick={() => handlePrice({ low: 0.00, high: 9.99 })}
                >
                  <ShopReuse title="$0.00 - $9.99" />
                </div>
                <div
                  className=""
                  onClick={() => handlePrice({ low: 10.00, high: 99.99 })}
                >
                  <ShopReuse title="$10.00 - $99.99" />
                </div>
                <div
                  className=""
                  onClick={() => handlePrice({ low: 100.00, high: 499.99 })}
                >
                  <ShopReuse title="$100.00 - $499.99" />
                </div>
                <div
                  className=""
                  onClick={() => handlePrice({ low: 500.00, high: 999.99 })}
                >
                  <ShopReuse title="$500.00 - $999.99" />
                </div>
                <div
                  className=""
                  onClick={() => handlePrice({ low: 1000, high: 2000 })}
                >
                  <ShopReuse
                    title="$1000 - $2000"
                    noBorder="border-none"
                  />
                </div>
              </ShopCateReuse>
            </div>
          </div>
          <div className="">
            <div className="mb-[20px] flex justify-between items-center">
              <div className="flex">
                <div className="p-[7px] sm:ml-[20px] hover:bg-black hover:text-white duration-300 border border-[#eeeded]">
                  <MdWindow className="text-[20px]" />
                </div>
                <div className="p-[7px] hover:bg-black hover:text-white duration-300 border border-[#eeeded] ml-[10px]">
                  <TiThList className="text-[20px]" />
                </div>
              </div>
              <div className="sm:flex">
                <div className="">
                  <span className="font-semibold mr-1">Sort by:</span>
                  <select className="border border-[#eeeded] outline-none">
                    <option value="Category">Category</option>
                    <option value="Color">Color</option>
                    <option value="Brand">Brand</option>
                    <option value="Price">Price</option>
                  </select>
                </div>
                <div className="sm:ml-[20px]">
                  <span className=" font-semibold mr-1">Show:</span>
                  <select
                    onChange={handleShowChange}
                    className="border border-[#eeeded] outline-none"
                  >
                    <option value="3">3</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="">
              <PostReuse
                setPost={setPost}
                filteredCategory={filteredCategory}
                slicingFilterCategory={slicingFilterCategory}
              />
            </div>
            <div className="flex">
              {filteredCategory.length > 6 ? (
                <div className="" onClick={handleShowMore}>
                  {showMore === true ? (
                    <button
                      onClick={handleHide}
                      className="font-bold ml-5 hover:text-[#525252]"
                    >
                      Hide
                    </button>
                  ) : (
                    <button
                      onClick={handleShowing}
                      className="font-bold ml-5 hover:text-[#525252]"
                    >
                      Show More
                    </button>
                  )}
                </div>
              ) : (
                ""
              )}
              {filteredCategory.length > 0 ? (
                <button
                  className="mx-auto font-bold hover:text-[#525252]"
                  onClick={handleViewAll}
                >
                  View All
                </button>
              ) : (
                <div className={filteredCategory.length === 0 ? "mx-auto" : ""}>
                  <Pagination
                    page={pageNum}
                    paginating={paginate}
                    prePage={prePage}
                    next={nextPage}
                    currentPage={currentPage}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopPage;
