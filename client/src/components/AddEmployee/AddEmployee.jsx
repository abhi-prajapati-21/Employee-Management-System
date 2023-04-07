import React, { useContext, useRef } from "react";
import { addEmployeeRequest, updateEmpRequest } from "../../API Requests/api";
import { Context } from "../../App";

import "./AddEmployee.css";

const AddEmployee = () => {
  const { 
    setIsActive, 
    updateEmployeePopup, 
    fetchEmployeesContext,  
    updateEmpContext} = useContext(Context);

    const nameRef = useRef(!updateEmpContext.update_Emp_Id ? "" :updateEmpContext?.update_Emp_Id?.email)
    const emailRef = useRef(!updateEmpContext.update_Emp_Id ? "" :updateEmpContext?.update_Emp_Id?.email)
    const salaryRef = useRef(!updateEmpContext.update_Emp_Id ? "" :updateEmpContext?.update_Emp_Id?.salary)
    const dateRef = useRef(!updateEmpContext.update_Emp_Id ? "" :updateEmpContext?.update_Emp_Id?.date)
  
    
    const addEmployee = (e) => {
      e.preventDefault();

      // let name = nameRef.current?.value;
      // let email = emailRef.current?.value;
      // let salary = salaryRef.current?.value;
      // let date = dateRef.current?.value;

     addEmployeeRequest({
      name: nameRef.current?.value, 
      email: emailRef.current?.value, 
      salary: salaryRef.current?.value, 
      date: dateRef.current?.value})
    //  name = ''
    //  email = ''
    //  salary = ''
    //  date = ''
   fetchEmployeesContext?.fetchEmpDetails();
  };

  const updateEmployee = (e) => {

    e.preventDefault();
    
    updateEmpRequest(updateEmpContext?.update_Emp_Id?.id, {
      name: nameRef.current?.value, 
      email: emailRef.current?.value, 
      salary: salaryRef.current?.value, 
      date: dateRef.current?.value});
      setIsActive(false)
    fetchEmployeesContext?.fetchEmpDetails();
  };

  return (
    <div className="add-emp-container">
      <form>
        <label htmlFor="name">Employee Name</label>
        <input
          type="text"
          className="input"
          id="name"
          defaultValue={updateEmpContext.update_Emp_Id && updateEmpContext?.update_Emp_Id?.name}
          ref={nameRef}
      
          placeholder="ex.Alex"
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="input"
          id="email"
          placeholder="abc@gmail.com"
          defaultValue={!updateEmpContext.update_Emp_Id ? "" :updateEmpContext?.update_Emp_Id?.email}
          ref={emailRef}  
        />

        <label htmlFor="salary">Salary</label>
        <input
          type="number"
          className="input"
          id="salary"
          placeholder="$0000"
          ref={salaryRef}
          defaultValue={!updateEmpContext.update_Emp_Id ? "" :updateEmpContext?.update_Emp_Id?.salary}
        />

        <label htmlFor="date">Date</label>
        <input
          type="date"
          className="input"
          ref={dateRef}
          placeholder="dd-mm-yy"
          defaultValue={!updateEmpContext.update_Emp_Id ? "" :updateEmpContext?.update_Emp_Id?.date}
        />

        <div className="form-btns">
          {updateEmployeePopup.isActiveUpdate ? (
            <input type="submit" value="Update" onClick={updateEmployee} />
          ) : (
            <input type="submit" value="Add" onClick={addEmployee} />
          )}
          <input
            type="button"
            value="cancel"
            onClick={() => setIsActive(false)}
            style={{ marginLeft: "10px" }}
          />
        </div>
      </form>
    </div>
  );
};

export default AddEmployee;
