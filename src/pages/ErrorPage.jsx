import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section id="errorPage">
      <div className="container mx-auto p-[10px]">
        <div className="w-full md:w-[70%] xl:w-[50%]">
          <h1 className="text-[80px] sm:text-[100px] lg:text-[130px] font-bold text-slate-400">404</h1>
          <p className="text-slate-600 text-[15px] lg:text-[18px]">
            The page you were looking for couldn't be found. The page could be
            removed or you misspelled the word while searching for it. Maybe try
            a search?
          </p>
          <Link to="/">
            <button className="border border-[#D8D8D8] px-[40px] lg:px-[50px] py-[5px] my-[50px] font-bold text-[14px] hover:bg-[#262626] hover:text-white duration-300">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
