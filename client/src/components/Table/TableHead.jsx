import React from "react";

import './Table.css'

const TableHead = () => {
  return (
      <tr>
        <th width="40">No.</th>
        <th width="170">Employee Name</th>
        <th width="10">Email</th>
        <th width="90">Salary</th>
        <th width="80">Date</th>
        <th width="130">Action</th>
      </tr>
  );
};

export default TableHead;
