import React, { useEffect, useState } from "react";
import { useEmployee } from "../utils/useEmployee";
import Shimmer from "./Shimmer";
import Pagination from "./Pagination";
import { searchEmployees, deleteSelected } from "../utils/helper";
import Header from "./Header";
import useOnline from "../utils/useOnline";
import Table from "./Table";

const Body = () => {
  const isOnline = useOnline();
  const [employees, setEmployees] = useEmployee();
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedEmployees, setSelectedEmployees] = useState([]);
  const [isSelectAll, setIsSelectAll] = useState(false);

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      setFilteredEmployees(searchEmployees(searchText, employees));
      setCurrentPage(1);
    }
  }

  const handleSelectAll = () => {
    if (!isSelectAll) {
      const empIdsToAdd = filteredEmployees
        .slice((currentPage - 1) * 10, (currentPage - 1) * 10 + 10)
        .map((emp) => emp.id);
      setSelectedEmployees(empIdsToAdd);
      setIsSelectAll(true);
    } else {
      setSelectedEmployees([]);
      setIsSelectAll(false);
    }
  };

  const handleDeleteSelected = () => {
    setEmployees(deleteSelected(selectedEmployees, employees));
    setFilteredEmployees(employees);
    setSelectedEmployees([]);
    setIsSelectAll(false);
  };

  useEffect(() => {
    setFilteredEmployees(employees);
  }, [employees]);

  return (
    <div className="my-8 mx-4 md:mx-16 lg:mx-40 xl:mx-60 flex flex-col gap-8">
      <Header
        searchText={searchText}
        updateSearchText={(text) => setSearchText(text)}
        handleKeyDown={handleKeyDown}
        updateEmployees={(emps) => setEmployees(emps)}
        updateFilteredEmployees={(emps) => setFilteredEmployees(emps)}
      />
      {!isOnline && <h1>Check your internet connection</h1>}
      {!filteredEmployees ? (
        <Shimmer />
      ) : (
        <Table
          isSelectAll={isSelectAll}
          handleSelectAll={handleSelectAll}
          filteredEmployees={filteredEmployees}
          currentPage={currentPage}
          selectedEmployees={selectedEmployees}
          employees={employees}
          updateEmployees={(emps) => setEmployees(emps)}
          updateSelectedEmployees={(emps) => setSelectedEmployees(emps)}
          updateFilteredEmployees={(emps) => setFilteredEmployees(emps)}
        />
      )}
      {selectedEmployees.length !== 0 && (
        <button
          className="bg-red-500 text-white w-40 rounded-md py-1"
          onClick={handleDeleteSelected}
        >
          Delete Selected
        </button>
      )}

      <Pagination
        currentPage={currentPage}
        lastPage={
          !filteredEmployees
            ? 1
            : parseInt((filteredEmployees.length - 1) / 10) + 1
        }
        updateCurrentPage={(pageNumber) => setCurrentPage(pageNumber)}
        selectedEmployees={selectedEmployees.length}
        totalEmployees={!filteredEmployees ? 0 : filteredEmployees.length}
      />
    </div>
  );
};

export default Body;
