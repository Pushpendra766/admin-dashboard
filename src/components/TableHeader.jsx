import React from "react";

const TableHeader = ({isSelectAll, handleSelectAll}) => {
  return (
    <div className="flex justify-between px-4 py-3 bg-gray-200 font-semibold">
      <input
        type="checkbox"
        className="h-4 w-4 mt-2"
        checked={isSelectAll}
        onChange={handleSelectAll}
      />
      <p>Name</p>
      <p>Email</p>
      <p>Role</p>
      <p>Action</p>
    </div>
  );
};

export default TableHeader;
