import React, { memo, useContext} from "react";
import { Context } from "../../App";
import Entry from "../Entry/Entry";

import "./Table.css";

const Table = () => {
  
  const { 
    isActive, 
    setIsActive,
    updateEmployeePopup,
    fetchEmployeesContext,
    updateEmpContext } = useContext(Context);
 
  const addHandler = () => {
    setIsActive(!isActive)
    updateEmpContext.setupdateEmpId({});
    updateEmployeePopup?.setIsActiveUpdate(false)
  }

  return (
    <div className="table-main">
      <button onClick={addHandler}>Add Employee</button>
      <table className="table-container">
        <thead>
          <tr>
            <th width="40">No.</th>
            <th width="170">Employee Name</th>
            <th width="10">Email</th>
            <th width="90">Salary</th>
            <th width="80">Date</th>
            <th width="130">Action</th>
          </tr>
        </thead>
        <tbody>
          { fetchEmployeesContext?.fetchedEmployees?.map(
            (emp, index )=> <Entry  key={emp._id} emp={emp} index={index} />)}   
        </tbody>
      </table>
    </div>
  );
};

export default memo(Table);
