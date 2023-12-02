import { useState, useEffect } from "react";

export const useEmployee = () => {
  const [employees, setEmployees] = useState(null);
  useEffect(() => {
    setTimeout(fetchEmplyees, 500);
    // fetchEmplyees();
  }, []);
  async function fetchEmplyees() {
    const res = await fetch(
      "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
    );
    const data = await res.json();
    setEmployees(data);
  }
  return employees;
};
