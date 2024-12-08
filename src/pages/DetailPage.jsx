import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io";
import { TiMinus } from "react-icons/ti";
import { Link, useParams } from "react-router-dom";
import HeadingReuse from "../reuse/HeadingReuse";
import Feature from "../reuse/Feature";
import { useDispatch } from "react-redux";
import { addToCart } from "../slice/productSlice";

const DetailPage = () => {
  let productID = useParams();
  // console.log(productID);

  let [singleProduct, setSingleProduct] = useState([]);

  let getData = () => {
    axios
      .get(`https://dummyjson.com/products/${productID.id}`)
      .then((response) => {
        setSingleProduct(response.data);
      });
  };

  // console.log(singleProduct);

  useEffect(() => {
    getData();
  }, []);

  const [counter, setCounter] = useState(1);
  let handleDecree = () => {
    if (counter > 1) {
      setCounter((val) => val - 1);
    }
  };
  let handleIncree = () => {
    if (counter < singleProduct.stock) {
      setCounter((val) => val + 1);
    }
  };

  const [feature, setFeature] = useState(false);
  const handleFeature = () => {
    setFeature(!feature);
  };

  const [shipping, setShipping] = useState(false);
  let handleShipping = () => {
    setShipping(!shipping);
  };

  const [description, setDescription] = useState(false);
  let handleDescription = () => {
    setDescription(!description);
  };

  const [review, setReview] = useState(false);
  let handleReview = () => {
    setReview(!review);
  };

  let ratingArr = Array.from({ length: 5 }, (_, index) => {
    return singleProduct.rating > index + 1 ? (
      <IoMdStar key={index} />
    ) : singleProduct.rating > index + 0.5 ? (
      <IoMdStarHalf key={index} />
    ) : (
      <IoMdStarOutline key={index} />
    );
  });


  const dispatch = useDispatch()
  const handleAddToCart = (item) =>{
    dispatch(addToCart({...item, qan:1}));
  }

  return (
    <section id="ProductDetails">
      <div className="container mx-auto p-[10px]">
        <HeadingReuse
          heading="Product"
          to="Shop"
          from="Product"
          toLink="/shop"
        />
        <div className="flex flex-wrap justify-between">
          {singleProduct?.images?.map((item) => (
            <div className="w-[48%]">
              <img src={item} alt="" />
            </div>
          ))}
        </div>

        <h1 className="text-[25px] font-[700] leading-[30px] cursor-default">
          {singleProduct.title}
        </h1>
        <div className="flex text-yellow-400 cursor-default">{ratingArr}</div>

        <div className="flex mt-3 border-b border-[#f1f0f0] pb-[10px] sm:w-[70%] cursor-default">
          <div className="font-semibold">
            <del>
              $
              {Math.floor(
                singleProduct.price + (singleProduct.price / 100) * 50
              ).toFixed(2)}
            </del>{" "}
          </div>
          <div className="ml-[10px] font-semibold">${singleProduct.price}</div>
        </div>

        <div className="flex mt-5 border-b border-[#f1f0f0] pb-[20px] sm:w-[70%] cursor-default">
          <span className="font-bold">Quantity:</span>{" "}
          <div className="flex ml-3">
            <button
              className="px-[10px] border border-[#D8D8D8] font-semibold"
              onClick={handleDecree}
            >
              <TiMinus />
            </button>
            <div className="px-[10px] border border-[#D8D8D8] font-semibold">
              {counter}
            </div>
            <button
              className="px-[10px] border border-[#D8D8D8] font-semibold text-[14px]"
              onClick={handleIncree}
            >
              <FaPlus />
            </button>
          </div>
        </div>

        <div className="font-bold py-[20px] border-b border-[#f1f0f0] sm:w-[70%] cursor-default">
          Status :{" "}
          <span className="font-semibold ml-[5px]">
            {singleProduct.availabilityStatus}
          </span>
        </div>

        <div className="flex flex-col justify-center items-center sm:flex-row sm:justify-start sm:gap-4 border-b border-[#f1f0f0] py-[20px] sm:w-[70%]">
          <button className="border border-[#D8D8D8] px-[20px] py-[5px] font-bold text-[14px] hover:bg-[#262626] hover:text-white duration-300">
            Add to Wish List
          </button>

          <Link to="/cart">
            <button onClick={() =>handleAddToCart(singleProduct)} className="border border-[#D8D8D8] px-[20px] py-[5px] mt-[20px] sm:mt-0 font-bold text-[14px] hover:bg-[#262626] hover:text-white duration-300">
              Add to Cart
            </button>
          </Link>
        </div>

        <div
          className="py-[20px] border-b border-[#f1f0f0] sm:w-[70%]"
          onClick={handleFeature}
        >
          <div className=" flex justify-between items-center">
            <div className="font-bold cursor-default">FEATURES & DETAILS</div>
            <div className="">
              {feature === true ? <TiMinus /> : <FaPlus />}
            </div>
          </div>

          <div
            className={`overflow-hidden ml-[15px] ${
              feature === true ? "h-auto" : "h-0"
            }`}
          >
            <Feature title="Brand:" value={singleProduct.brand} />
            <Feature title="Weight:" value={singleProduct.weight} />
            <Feature title="Width:" value={singleProduct?.dimensions?.width} />
            <Feature
              title="Height:"
              value={singleProduct?.dimensions?.height}
            />
            <Feature title="Depth:" value={singleProduct?.dimensions?.depth} />
          </div>
        </div>

        <div
          className="py-[20px] border-b border-[#f1f0f0] sm:w-[70%]"
          onClick={handleShipping}
        >
          <div className=" flex justify-between items-center">
            <div className="font-bold cursor-default">SHIPPING & RETURNS</div>
            <div className="">
              {shipping === true ? <TiMinus /> : <FaPlus />}
            </div>
          </div>

          <div
            className={`overflow-hidden ml-[15px] ${
              shipping === true ? "h-auto" : "h-0"
            }`}
          >
            <div className="font-semibold">
              {singleProduct.shippingInformation} and{" "}
              {singleProduct.returnPolicy}
            </div>
          </div>
        </div>

        <div className="sm:flex gap-[20px]">
          <div
            className="py-[20px] border-b border-[#f1f0f0] "
            onClick={handleDescription}
          >
            <div className="font-bold text-[18px] text-center sm:text-left cursor-default">
              Description
            </div>
          </div>

          <div
            className="py-[20px] border-b border-[#f1f0f0]"
            onClick={handleReview}
          >
            <div className="font-bold text-[18px] text-center sm:text-left cursor-default">
              Reviews ({singleProduct?.reviews?.length})
            </div>
          </div>
        </div>

        <div
          className={`overflow-hidden text-center sm:text-left ${
            description === true ? "h-auto" : "h-0"
          } `}
        >
          {singleProduct.description}
        </div>

        <div
          className={`overflow-hidden text-center sm:text-left ${
            review === true && description === false ? "h-auto" : "h-0"
          }`}
        >
          <div className="text-[14px] border-b border-[#f1f0f0] mt-[-5px]">
            {singleProduct?.reviews?.length} reviews for this Product
          </div>

          {singleProduct?.reviews?.map((itemArr) => (
            <div className="border-b border-[#f1f0f0] pb-[10px]">
              <div className="mt-[20px] sm:flex justify-between items-center">
                <div className="sm:flex items-center">
                  <div className="font-bold">{itemArr?.reviewerName}</div>
                  <div className="text-[14px] font-semibold sm:ml-[20px] mb-[10px] sm:mb-[0px] flex justify-center text-yellow-400">
                    {Array.from({ length: 5 }, (_, index) => {
                      return itemArr.rating >= index + 1 ? (
                        <IoMdStar key={index} />
                      ) : itemArr.rating >= index + 0.5 ? (
                        <IoMdStarHalf key={index} />
                      ) : (
                        <IoMdStarOutline key={index} />
                      );
                    })}
                  </div>
                </div>
                <div className="text-[10px] font-semibold mt-[-5px]">
                  {itemArr.date}
                </div>
              </div>
              <div className="text-[14px] font-semibold mt-[5px]">
                {itemArr.comment}
              </div>
            </div>
          ))}
        </div>
        <div className="sm:w-[60%]">
          <h3 className="font-bold text-[18px] sm:text-left cursor-default mt-[30px]">
            Add a review
          </h3>

          <div className="mt-[20px] border-b border-[#f1f0f0]">
            <label For="Name" className="block font-bold">
              Name
            </label>
            <input
              type="text"
              className="border-none outline-none py-[7px] pb-[15px] w-full bg-[#fff9f9f5]"
              id="Name"
              placeholder="Enter your name here..."
            />
          </div>
          <div className="mt-[20px] border-b border-[#f1f0f0]">
            <label For="mail" className="block font-bold">
              Email
            </label>
            <input
              type="email"
              className="border-none outline-none py-[7px] pb-[15px] w-full bg-[#fff9f9f5]"
              id="mail"
              placeholder="Enter your Email here..."
            />
          </div>
          <div className="mt-[20px] border-b border-[#f1f0f0]">
            <label For="review" className="block font-bold">
              Review
            </label>
            <textarea
              className="border-none outline-none py-[7px] pb-[15px] w-full bg-[#fff9f9f5]"
              id="review"
              placeholder="Enter your review here..."
            />
          </div>

          <button className="border border-[#D8D8D8] px-[50px] py-[5px] mt-[20px] font-bold text-[14px] hover:bg-[#262626] hover:text-white duration-300">
            Post
          </button>
        </div>
      </div>
    </section>
  );
};

export default DetailPage;
