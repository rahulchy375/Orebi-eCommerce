import React from "react";

const Pagination = ({ page, paginating, prePage, next, currentPage }) => {
  return (
    <>
      <div className="flex justify-center items-center">
        <nav aria-label="Page navigation example">
          <ul className="inline-flex -space-x-px text-sm">
            <li onClick={prePage}>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700"
              >
                Previous
              </a>
            </li>
            {page.map((item, i) => (
              <li key={i} onClick={() => paginating(item)}>
                <a
                  href="#"
                  className={`flex items-center justify-center px-3 h-8 leading-tight  hover:text-gray-100 border border-gray-300 hover:bg-slate-800 ${
                    currentPage == i + 1
                      ? "bg-slate-800 text-white"
                      : "text-gray-500 bg-white "
                  } `}
                >
                  {item + 1}
                </a>
              </li>
            ))}

            <li onClick={next}>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700"
              >
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Pagination;
