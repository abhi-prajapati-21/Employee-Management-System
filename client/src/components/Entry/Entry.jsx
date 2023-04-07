import React, { useContext, memo } from "react";

import { Context } from "../../App";

import "./Entry.css";
import { deleteEmpRequest } from "../../API Requests/api";
import { useDateFormat } from "../../Custom Hook/useFormate";

const Entry = ({ emp, index }) => {
  const {
    setIsActive,
    updateEmployeePopup,
    fetchEmployeesContext,
    updateEmpContext,
  } = useContext(Context);

  const editHandler = () => {
    updateEmployeePopup.setIsActiveUpdate(true);
    setIsActive(true);
    updateEmpContext?.getEmpIdForUpdate({
      id: emp._id,
      name: emp.employeeName,
      email: emp.employeeEmail,
      salary: emp.salary,
      date: emp.date,
    });
  };

  const deleteHandler = () => {
    window.confirm("you want to delete this Entry??") &&
      deleteEmpRequest(emp._id);
    fetchEmployeesContext?.fetchEmpDetails();
  };

  return (
    <tr>
      <td>{index + 1}.</td>
      <td>{emp.employeeName}</td>
      <td>{emp.employeeEmail}</td>
      <td>${emp.salary}</td>
      <td>{useDateFormat(emp.date)}</td>
      <td>
        <button onClick={editHandler}>Edit</button>
        <button className="dlt-btn" onClick={deleteHandler}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default memo(Entry);
