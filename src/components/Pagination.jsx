import React from "react";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from "react-icons/md";

const Pagination = () => {
  const btnStyle = "border py-1 px-2 rounded-md hover:bg-gray-100";
  return (
    <div className="flex justify-between items-center">
      <div>0 of 46 row(s) selected</div>
      <div className="flex gap-4 items-center">
        <p>Page 1 of 5</p>
        <div className="flex gap-4">
          <button className={btnStyle}>
            <MdKeyboardDoubleArrowLeft />
          </button>
          <button className={btnStyle}>
            <MdKeyboardArrowLeft />
          </button>
          {Array(5)
            .fill("")
            .map((_, idx) => {
              return <button className={btnStyle}>{idx + 1}</button>;
            })}
          <button className={btnStyle}>
            <MdKeyboardArrowRight />
          </button>
          <button className={btnStyle}>
            <MdKeyboardDoubleArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
