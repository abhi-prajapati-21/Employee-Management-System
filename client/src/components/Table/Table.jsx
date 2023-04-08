import React, { memo, useContext} from "react";
import { Context } from "../../App";
import Entry from "../Entry/Entry";

import "./Table.css";
import TableHead from "./TableHead";

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
        <TableHead />
        <tbody>
          { fetchEmployeesContext?.fetchedEmployees?.map(
            (emp, index )=> <Entry  key={emp._id} emp={emp} index={index} />)}   
        </tbody>
      </table>
    </div>
  );
};

export default memo(Table);
