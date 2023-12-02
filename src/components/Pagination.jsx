import React from "react";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from "react-icons/md";

const Pagination = ({ currentPage, lastPage, updateCurrentPage }) => {
  const btnStyle = "border py-1 px-2 rounded-md hover:bg-gray-100";
  return (
    <div className="md:flex justify-between items-center">
      <div className="flex gap-20 md:gap-10">
        <div>0 of 46 row(s) selected</div>
        <p>
          Page {currentPage} of {lastPage}
        </p>
      </div>
      <div className="flex gap-4 items-center">
        <div className="flex gap-2">
          <button
            className={btnStyle + "first-page"}
            onClick={() => updateCurrentPage(1)}
          >
            <MdKeyboardDoubleArrowLeft />
          </button>
          <button
            className={btnStyle + "previous-page"}
            onClick={() =>
              updateCurrentPage(currentPage > 1 ? currentPage - 1 : 1)
            }
          >
            <MdKeyboardArrowLeft />
          </button>
          {Array(lastPage)
            .fill("")
            .map((_, idx) => {
              return (
                <button
                  className={
                    btnStyle + ` ${idx + 1 === currentPage && "bg-gray-200"}`
                  }
                  key={idx}
                  onClick={() => updateCurrentPage(idx + 1)}
                >
                  {idx + 1}
                </button>
              );
            })}
          <button
            className={btnStyle + "next-page"}
            onClick={() =>
              updateCurrentPage(
                currentPage < lastPage ? currentPage + 1 : lastPage
              )
            }
          >
            <MdKeyboardArrowRight />
          </button>
          <button
            className={btnStyle + "last-page"}
            onClick={() => updateCurrentPage(lastPage)}
          >
            <MdKeyboardDoubleArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
