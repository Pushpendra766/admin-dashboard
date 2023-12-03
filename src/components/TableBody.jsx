import React, { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { FaRegEdit, FaCheck } from "react-icons/fa";
import { deleteEmployee, editEmployeeDetails } from "../utils/helper";

const TableBody = ({
  currentPage,
  selectedEmployees,
  employees,
  filteredEmployees,
  updateEmployees,
  updateSelectedEmployees,
  updateFilteredEmployees,
}) => {
  const [editId, setEditId] = useState(-1);
  const [newName, setNewName] = useState();
  const [newEmail, setNewEmail] = useState();
  const [newRole, setNewRole] = useState();
  return (
    <>
      {filteredEmployees
        .slice((currentPage - 1) * 10, currentPage * 10)
        .map((employee) => {
          const isChecked = selectedEmployees.includes(employee.id);
          return (
            <div
              className={`flex justify-between p-4 border-t border-gray-300 hover:bg-gray-100 hover:cursor-pointer ${
                isChecked && "bg-blue-100"
              }`}
              key={employee.id}
            >
              <input
                type="checkbox"
                className="h-4 w-4 mt-2"
                checked={isChecked}
                onChange={() => {
                  isChecked
                    ? updateSelectedEmployees((prevSelectedEmployees) =>
                        prevSelectedEmployees.filter(
                          (empId) => empId !== employee.id
                        )
                      )
                    : updateSelectedEmployees((prev) => [...prev, employee.id]);
                }}
              />
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
                    className="p-2 rounded-md border border-green-600 text-green-600 save"
                    onClick={() => {
                      updateEmployees(
                        editEmployeeDetails(
                          employee.id,
                          newName,
                          newEmail,
                          newRole,
                          employees
                        )
                      );
                      updateFilteredEmployees(employees);
                      setEditId(-1);
                    }}
                  >
                    <FaCheck />
                  </button>
                ) : (
                  <button
                    className="p-2 rounded-md border border-blue-700 edit text-blue-700"
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
                    updateEmployees(deleteEmployee(employee.id, employees));
                    updateFilteredEmployees(employees);
                  }}
                >
                  <MdDeleteOutline />
                </button>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default TableBody;
