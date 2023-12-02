import React, { useState } from "react";
import { MdDelete, MdDeleteOutline } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { useEmployee } from "../utils/useEmployee";
import Shimmer from "./Shimmer";
import Pagination from "./Pagination";

const Body = () => {
  const employees = useEmployee();
  const [searchText, setSearchText] = useState("");
  return (
    <div className="my-8 mx-4 md:mx-16 lg:mx-40 xl:mx-60 flex flex-col gap-8">
      <div className="flex justify-between">
        <input
          className="border pl-3 p-1 rounded-md"
          type="text"
          placeholder="Enter value"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className="bg-red-500 hover:bg-red-600 p-2 rounded-md text-white">
          <MdDelete />
        </button>
      </div>

      {!employees ? (
        <Shimmer />
      ) : (
        <div className="border rounded-md">
          <div className="flex justify-between px-4 py-3 bg-gray-200 font-semibold">
            <input type="radio" className="h-4 w-4 mt-2" />
            <p>Name</p>
            <p>Email</p>
            <p>Role</p>
            <p>Action</p>
          </div>
          {employees.slice(0, 10).map((employee) => {
            return (
              <div
                className="flex justify-between p-4 border-t hover:bg-gray-100 hover:cursor-pointer"
                key={employee.id}
              >
                <input type="radio" className="h-4 w-4 mt-2" />
                <p>{employee.name}</p>
                <p>{employee.email}</p>
                <p>{employee.role}</p>
                <div className="flex gap-2">
                  <button className="p-2 rounded-md border border-blue-500">
                    <FaRegEdit />
                  </button>
                  <button className="p-2 rounded-md text-red-500 border border-red-500">
                    <MdDeleteOutline />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
      <Pagination />
    </div>
  );
};

export default Body;
