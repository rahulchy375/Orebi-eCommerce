import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { LuRefreshCcw } from "react-icons/lu";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const FilteredPost = ({filteredCategory, slicingFilterCategory}) => {
  // console.log(slicingFilterCategory);

  let dispatch = useDispatch()
    let handleAddToCart = (item) =>{
      dispatch(addToCart({...item, qan:1}));
    }
  
  return (
    <>
      <div className="sm:flex flex-wrap md:gap-2">
        {slicingFilterCategory?.map((item) => (
          <div className="sm:flex" key={item.id}>
            
              <div
                className="mx-[10px] ml-0 sm:ml-[10px] px-[10px] w-[100%] sm:w-[200px] md:w-[260px] lg:w-[248px] xl:w-[330px]"
                // id={item.id}
              >
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

                <div className="flex justify-between items-center mt-[10px] mb-[40px]">
                  <h3 className="text-[16px] font-semibold">{item.title}</h3>
                  <p className="text-[14px] font-semibold text-[#767676]">
                    {`$${item.price}`}
                  </p>
                </div>
              </div>
            
          </div>
        ))}{" "}
      </div>
    </>
  );
};

export default FilteredPost;
