import React from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

const Table = ({
  isSelectAll,
  handleSelectAll,
  filteredEmployees,
  currentPage,
  selectedEmployees,
  employees,
  updateEmployees,
  updateSelectedEmployees,
  updateFilteredEmployees,
}) => {
  return (
    <div className="border rounded-md">
      <TableHeader
        isSelectAll={isSelectAll}
        handleSelectAll={handleSelectAll}
      />
      {filteredEmployees.length === 0 && (
        <p className="p-3 text-center">No data found</p>
      )}
      <TableBody
        currentPage={currentPage}
        selectedEmployees={selectedEmployees}
        employees={employees}
        filteredEmployees={filteredEmployees}
        updateEmployees={updateEmployees}
        updateSelectedEmployees={updateSelectedEmployees}
        updateFilteredEmployees={updateFilteredEmployees}
      />
    </div>
  );
};

export default Table;
