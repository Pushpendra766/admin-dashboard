import { useState, useEffect } from "react";
import { EMPLOYEE_API_URL } from "../constants";

export const useEmployee = () => {
  const [employees, setEmployees] = useState(null);
  useEffect(() => {
    fetchEmplyees();
  }, []);
  async function fetchEmplyees() {
    const res = await fetch(EMPLOYEE_API_URL);
    const data = await res.json();
    setEmployees(data);
  }
  return [employees, setEmployees];
};
