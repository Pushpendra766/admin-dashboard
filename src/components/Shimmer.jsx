import React from "react";

const Shimmer = () => {
  return (
    <div>
      {Array(11)
        .fill("")
        .map((_, idx) => {
          return (
            <div
              className="w-full h-10 bg-gray-100 rounded-md my-2"
              key={idx}
            ></div>
          );
        })}
    </div>
  );
};

export default Shimmer;
