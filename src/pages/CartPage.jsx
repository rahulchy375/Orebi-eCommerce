import React from "react";
import HeadingReuse from "../reuse/HeadingReuse";
import newImg from "/newImg.png";
import { FaPlus } from "react-icons/fa6";
import { TiMinus, TiTimes } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, removeProduct } from "../slice/productSlice";
import { Link } from "react-router-dom";

const CartPage = () => {
  let dispatch = useDispatch();
  let cartDetails = useSelector((cartState) => cartState.product.cartItem);
  // console.log(cartDetails);

  let { subTotal } = cartDetails.reduce(
    (acc, curPrice) => {
      acc.subTotal += curPrice.price * curPrice.qan;
      return acc;
    },
    { subTotal: 0 }
  );
  // console.log(subTotal);

  return (
    <section id="cartSection">
      <div className="container mx-auto p-[10px]">
        <HeadingReuse
          heading="Cart"
          to="Shop"
          from="Cart"
          toLink="/shop"
        />

        {cartDetails.length > 0 ? (
          <div className="border border-[#F5F5F3] mb-[50px] mt-[50px]">
            <div className="flex text-center sm:text-left bg-[#F5F5F3] py-[15px] px-[10px]">
              <div className="w-[25%] text-[15px] font-semibold">Product</div>
              <div className="w-[25%] text-[15px] font-semibold">Price</div>
              <div className="w-[25%] text-[15px] font-semibold">Quantity</div>
              <div className="w-[25%] text-[15px] font-semibold">Total</div>
            </div>

            {cartDetails.map((item, i) => (
              <div
                className="flex items-center mt-[10px] text-center sm:text-left sm:px-[10px] relative"
                key={i}
              >
                <div className="w-[25%] flex justify-center sm:justify-start items-center">
                  <Link to={`/shop/${item.id}`}>
                    <img
                      src={item.thumbnail}
                      alt="xyz"
                      className="w-[50px] ml-[10px] lg:ml-[25px]"
                    />
                  </Link>
                  <Link to={`/shop/${item.id}`}>
                    <p className="text-[13px] lg:text-[15px] lg:ml-[10px] font-semibold my-auto hidden sm:block text-center">
                      {item.title}
                    </p>
                  </Link>
                </div>

                <div className="w-[25%] font-semibold">{`$${item.price}`}</div>
                <div className="w-[25%] flex justify-center sm:justify-start">
                  <div className="flex justify-between border border-[#eeeeed] w-auto">
                    <button
                      className="py-[2px] px-[7px] sm:px-[20px]"
                      onClick={() => {
                        dispatch(decrement(i));
                      }}
                    >
                      <TiMinus className="text-[12px]" />
                    </button>{" "}
                    <div className="font-semibold">{item.qan}</div>{" "}
                    <button
                      className="py-[2px] px-[7px] sm:px-[20px]"
                      onClick={() => {
                        dispatch(increment(i));
                      }}
                    >
                      {" "}
                      <FaPlus className="text-[12px]" />{" "}
                    </button>
                  </div>
                </div>
                <div className="w-[25%] font-semibold">{`$${(
                  item.price * item.qan
                ).toFixed(2)}`}</div>
                {/* cross product */}
                <div
                  className="absolute top-[50%] left-[4px] lg:left-[10px] translate-y-[-50%] text-[17px]"
                  onClick={() => dispatch(removeProduct(i))}
                >
                  <TiTimes />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-[25px] sm:text-[30px] md:text-[35px] font-bold text-center text-slate-300 my-[30px]">
            No product here
          </p>
        )}

        <div className="text-right mb-[50px]">
          <h4 className="font-bold">Cart totals</h4>
          <div className="flex flex-col  text-left items-end justify-end mt-[15px]">
            <div className="w-[250px] md:w-[350px] border border-[#eeeeed]">
              <div className="flex  border-b border-[#eeeeed] py-[5px]">
                <div className="border-r border-[#eeeeed] w-[50%] pl-[10px] font-semibold">
                  Subtotal
                </div>
                <div className="w-[50%] pl-[10px] font-[490]">{`$${subTotal.toFixed(
                  2
                )}`}</div>
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
                <div className="w-[50%] pl-[10px] font-[490]">{`$${(
                  subTotal +
                  (subTotal / 100) * 5
                ).toFixed(2)}`}</div>
              </div>
            </div>
          </div>
          <button className="border border-[#D8D8D8] px-[15px] py-[10px] mt-[20px] font-bold text-[14px] hover:bg-[#262626] hover:text-white duration-300">
            <Link to="/checkout">Proceed to Checkout</Link> 
          </button>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
