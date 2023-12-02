export function searchEmployees(searchText, employees) {
  const filtered = employees.filter(
    (employee) =>
      employee.name.toLowerCase().includes(searchText.toLowerCase()) ||
      employee.email.toLowerCase().includes(searchText.toLowerCase()) ||
      employee.role.toLowerCase().includes(searchText.toLowerCase())
  );
  return filtered;
}

export function deleteEmployee(id, filteredEmployees) {
  const filtered = filteredEmployees.filter((employee) => employee.id !== id);
  return filtered;
}

export function editEmployeeDetails(
  editId,
  newName,
  newEmail,
  newRole,
  filteredEmployees
) {
  const changedEmployees = filteredEmployees.map((employee) => {
    if (employee.id === editId) {
      return { id: editId, name: newName, email: newEmail, role: newRole };
    }
    return employee;
  });
  return changedEmployees;
}
