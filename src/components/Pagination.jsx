import React from "react";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from "react-icons/md";

const Pagination = ({
  currentPage,
  lastPage,
  updateCurrentPage,
  selectedEmployees,
  totalEmployees,
}) => {
  const btnStyle = "border py-1 px-2 rounded-md hover:bg-gray-100";
  if (currentPage > lastPage) {
    updateCurrentPage(lastPage);
  }
  return (
    <div className="md:flex justify-between items-center">
      <div className="flex gap-20 md:gap-10">
        <div>
          {selectedEmployees} of {totalEmployees} row(s) selected
        </div>
        <p>
          Page {currentPage} of {lastPage}
        </p>
      </div>
      <div className="flex gap-4 items-center">
        <div className="flex gap-2">
          <button
            className={`first-page ${btnStyle}`}
            onClick={() => updateCurrentPage(1)}
          >
            <MdKeyboardDoubleArrowLeft />
          </button>
          <button
            className={`previous-page ${btnStyle}`}
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
            className={`next-page ${btnStyle}`}
            onClick={() =>
              updateCurrentPage(
                currentPage < lastPage ? currentPage + 1 : lastPage
              )
            }
          >
            <MdKeyboardArrowRight />
          </button>
          <button
            className={`last-page ${btnStyle}`}
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
