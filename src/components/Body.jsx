import React, { useEffect, useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { FaRegEdit, FaCheck } from "react-icons/fa";
import { useEmployee } from "../utils/useEmployee";
import Shimmer from "./Shimmer";
import Pagination from "./Pagination";
import {
  searchEmployees,
  deleteEmployee,
  editEmployeeDetails,
} from "../utils/helper";
import Header from "./Header";

const Body = () => {
  const employees = useEmployee();
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [editId, setEditId] = useState(-1);
  const [newName, setNewName] = useState();
  const [newEmail, setNewEmail] = useState();
  const [newRole, setNewRole] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      setFilteredEmployees(searchEmployees(searchText, employees));
    }
  }

  const updateSearchText = (text) => {
    setSearchText(text);
  };

  const updateCurrentPage = (page) => {
    setCurrentPage(page);
  };

  const updateFilteredEmployees = (emps) => {
    setFilteredEmployees(emps);
  };

  useEffect(() => {
    setFilteredEmployees(employees);
  }, [employees]);

  return (
    <div className="my-8 mx-4 md:mx-16 lg:mx-40 xl:mx-60 flex flex-col gap-8">
      <Header
        searchText={searchText}
        updateSearchText={updateSearchText}
        handleKeyDown={handleKeyDown}
        updateFilteredEmployees={updateFilteredEmployees}
      />
      {!filteredEmployees ? (
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
          {filteredEmployees.length === 0 && (
            <p className="p-3 text-center">No result found</p>
          )}
          {filteredEmployees
            .slice((currentPage - 1) * 10, currentPage * 10)
            .map((employee) => {
              return (
                <div
                  className="flex justify-between p-4 border-t hover:bg-gray-100 hover:cursor-pointer"
                  key={employee.id}
                >
                  <input type="radio" className="h-4 w-4 mt-2" />
                  {editId === employee.id ? (
                    <input
                      type="text"
                      value={newName}
                      onChange={(e) => setNewName(e.target.value)}
                    />
                  ) : (
                    <p>{employee.name}</p>
                  )}
                  {editId === employee.id ? (
                    <input
                      type="text"
                      value={newEmail}
                      onChange={(e) => setNewEmail(e.target.value)}
                    />
                  ) : (
                    <p>{employee.email}</p>
                  )}
                  {editId === employee.id ? (
                    <select onChange={(e) => setNewRole(e.target.value)}>
                      <option value="admin">admin</option>
                      <option value="member">member</option>
                    </select>
                  ) : (
                    <p>{employee.role}</p>
                  )}
                  <div className="flex gap-2">
                    {editId === employee.id ? (
                      <button
                        className="p-2 rounded-md border border-blue-500 save"
                        onClick={() => {
                          setFilteredEmployees(
                            editEmployeeDetails(
                              employee.id,
                              newName,
                              newEmail,
                              newRole,
                              filteredEmployees
                            )
                          );
                          setEditId(-1);
                        }}
                      >
                        <FaCheck />
                      </button>
                    ) : (
                      <button
                        className="p-2 rounded-md border border-blue-500 edit"
                        onClick={() => {
                          setEditId(employee.id);
                          setNewName(employee.name);
                          setNewEmail(employee.email);
                          setNewRole(employee.role);
                        }}
                      >
                        <FaRegEdit />
                      </button>
                    )}

                    <button
                      className="p-2 rounded-md text-red-500 border border-red-500 delete"
                      onClick={() => {
                        setFilteredEmployees(
                          deleteEmployee(employee.id, filteredEmployees)
                        );
                      }}
                    >
                      <MdDeleteOutline />
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      )}
      <button className="bg-red-500 text-white w-40 rounded-md py-1">
        Delete Selected
      </button>
      <Pagination
        currentPage={currentPage}
        lastPage={
          !filteredEmployees ? 0 : parseInt(filteredEmployees.length / 10) + 1
        }
        updateCurrentPage={updateCurrentPage}
      />
    </div>
  );
};

export default Body;
