import React, { useEffect, useRef, useState } from "react";
import HeadingReuse from "../reuse/HeadingReuse";
import CheckOutReuse from "../reuse/CheckOutReuse";
import { useSelector } from "react-redux";
import { RiArrowDropDownLine } from "react-icons/ri";
import axios from "axios";

const CheckOutPage = () => {
  let cartInfo = useSelector((state) => state.product.cartItem);
  let userInfo = useSelector((state) => state.user.value.user);
  // console.log(userInfo.email);
  let userData = useSelector((state) => state.userData.value);
  console.log(userData);

  let { subTotal } = cartInfo.reduce(
    (acc, curPrice) => {
      acc.subTotal += curPrice.price * curPrice.qan;
      return acc;
    },
    { subTotal: 0 }
  );

  return (
    <section id="checkOutSection">
      <div className="container mx-auto p-[10px]">
        <div className="my-[50px]">
          <HeadingReuse
            heading="Checkout"
            to="Shop"
            from="Checkout"
            toLink="/shop"
            className=""
          />
        </div>
        <div className="md:w-[60%] lg:w-[50%] mb-[50px]">
          <h2 className="text-[35px] font-bold">Billing Details</h2>

          <div className="sm:flex">
            <CheckOutReuse
              For="firstName"
              label="First Name*"
              place="First Name"
              id="firstName"
              w="w-[50%]"
              mar="mr-[20px]"
              value={userData.firstName}
            />
            <CheckOutReuse
              For="lastName"
              label="Last Name*"
              place="Last Name"
              id="lastName"
              w="w-[50%]"
              value={userData.lastName}
            />
          </div>
          <div className="">
            <label For="companyName" className="block font-bold">
              Company Name(Optional)
            </label>
            <input
              type="text"
              id="companyName"
              placeholder="Company Name"
              className="bg-[#fff9f9f5] w-full outline-none pb-[5px] border-b border-[#eeeeed]"
            />
          </div>
          <div className=" border-b border-[#eeeeed] relative">
            <div className="flex justify-between items-center user-select-none">
              <div className="">
                <label For="country" className="block font-bold">
                  Country*
                </label>
                <input
                  type="text"
                  id="country"
                  placeholder="Please select"
                  className="bg-[#fff9f9f5] w-full outline-none pb-[5px] cursor-default"
                  required
                  readOnly
                  value={userData.country}
                />
              </div>
            </div>
          </div>

          <CheckOutReuse
            For="street"
            label="Street Address*"
            place="House number and street name"
            id="street"
            value={userData.street}
          />
          <CheckOutReuse
            For="town"
            label="Town/City*"
            place="Town/City"
            id="town"
            value={userData.city}
          />
          <CheckOutReuse
            For="postCode"
            label="Post Code*"
            place="Post Code"
            id="postCode"
            value={userData.postCode}
          />
          <CheckOutReuse
            For="phone"
            label="Phone*"
            place="Phone"
            id="phone"
            value={userData.phone}
          />
          <div className="">
            <label For="mail" className="block font-bold">
              Email Address*
            </label>
            <input
              type="email"
              value={userInfo.email}
              id="mail"
              placeholder="Email Address"
              className="bg-[#fff9f9f5] cursor-default w-full outline-none pb-[5px] border-b border-[#eeeeed]"
              required
              readOnly
            />
          </div>
        </div>

        <div className="mb-[50px]">
          <h4 className="font-bold text-[30px] mb-[25px]">Your Order</h4>
          <div className="flex flex-col  text-left items-start justify-start mt-[15px]">
            <div className="w-[250px] md:w-[350px] border border-[#eeeeed]">
              <div className="flex  border-b border-[#eeeeed] py-[5px]">
                <div className="border-r border-[#eeeeed] w-[50%] pl-[10px] font-semibold">
                  Subtotal
                </div>
                <div className="w-[50%] pl-[10px] font-[490]">
                  ${subTotal.toFixed(2)}
                </div>
              </div>
              <div className="flex border-b border-[#eeeeed] py-[5px]">
                <div className="border-r border-[#eeeeed] w-[50%] pl-[10px] font-semibold">
                  Vat
                </div>
                <div className="w-[50%] pl-[10px] font-[490]">+5%</div>
              </div>
              <div className="flex py-[5px]">
                <div className="border-r border-[#eeeeed] w-[50%] pl-[10px] font-semibold">
                  Total
                </div>
                <div className="w-[50%] pl-[10px] font-[490]">
                  ${(subTotal + (subTotal / 100) * 5).toFixed(2)}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-[20px]">
            <div>
              <input
                type="radio"
                id="bank1"
                name="bank"
                value="bank1"
                checked
              />
              <label for="bank1" className="pl-[15px] font-bold">
                Bank 1
              </label>
            </div>
            <div>
              <input type="radio" id="bank2" name="bank" value="bank2" />
              <label for="bank2" className="pl-[15px] font-bold">
                Bank 2
              </label>
            </div>
            <p className="md:w-[60%] mt-[10px]">
              Your personal data will be used to process your order, support
              your experience throughout this website, and for other purposes
              described in our{" "}
              <span className="font-semibold">privacy policy</span>.
            </p>
          </div>
          <button className="border border-[#D8D8D8] px-[15px] py-[10px] mt-[20px] font-bold text-[14px] hover:bg-[#262626] hover:text-white duration-300">
            Proceed to Bank
          </button>
        </div>
      </div>
    </section>
  );
};

export default CheckOutPage;
