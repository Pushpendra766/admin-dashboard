import React, { useState } from "react";

const Try = () => {
  const rowsData = [
    { id: 1, content: "Row 1" },
    { id: 2, content: "Row 2" },
    { id: 3, content: "Row 3" },
    // Add more rows as needed
  ];

  const [selectedRows, setSelectedRows] = useState([]);

  const handleRowToggle = (rowId) => {
    if (selectedRows.includes(rowId)) {
      // If the row is already selected, remove it
      setSelectedRows((prevSelectedRows) =>
        prevSelectedRows.filter((id) => id !== rowId)
      );
    } else {
      // If the row is not selected, add it
      setSelectedRows((prevSelectedRows) => [...prevSelectedRows, rowId]);
    }
  };

  const handleSelectAll = () => {
    // Select all rows
    const allRowIds = rowsData.map((row) => row.id);
    setSelectedRows(allRowIds);
  };

  const handleClearSelection = () => {
    // Clear all selected rows
    setSelectedRows([]);
  };

  return (
    <div>
      <button onClick={handleSelectAll}>Select All</button>
      <button onClick={handleClearSelection}>Clear Selection</button>

      <ul>
        {rowsData.map((row) => (
          <li key={row.id}>
            <input
              type="checkbox"
              checked={selectedRows.includes(row.id)}
              onChange={() => handleRowToggle(row.id)}
            />
            {row.content}
          </li>
        ))}
      </ul>

      <p>Selected Rows: {JSON.stringify(selectedRows)}</p>
    </div>
  );
};

export default Try;
