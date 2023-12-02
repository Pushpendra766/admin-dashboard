import React from "react";
import { MdDelete } from "react-icons/md";

const Header = ({
  searchText,
  updateSearchText,
  handleKeyDown,
  updateEmployees,
  updateFilteredEmployees,
}) => {
  const handleDelete = () => {
    updateEmployees([]);
    updateFilteredEmployees([]);
  };
  return (
    <div className="flex justify-between">
      <input
        className="border pl-3 p-1 rounded-md search-icon"
        type="text"
        placeholder="Search"
        value={searchText}
        onChange={(e) => updateSearchText(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button
        className="bg-red-500 hover:bg-red-600 p-2 rounded-md text-white"
        onClick={handleDelete}
      >
        <MdDelete />
      </button>
    </div>
  );
};

export default Header;
