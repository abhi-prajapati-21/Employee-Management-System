import React from "react";

import "./SearchTable.css";
import TableHead from "../Table/TableHead";
import Entry from "../Entry/Entry";

const SearchTable = ({ empDetails }) => {
  const { empContext, searchQuery } = empDetails;

  const searchArray = empContext?.filter((emp) =>
    emp?.employeeName?.toLowerCase().includes(searchQuery?.toLowerCase())
  );

  return (
    <table className={`search-table ${!searchQuery && "d-none"}`}>
      <thead>
        <TableHead />
      </thead>
      <tbody>
        {searchArray.map((emp, index) => (
          <Entry key={emp._id} emp={emp} index={index} />
        ))}
      </tbody>
    </table>
  );
};

export default SearchTable;
