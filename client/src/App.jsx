import React, { useState, createContext, useEffect, Suspense, useMemo } from "react";
import { fetchEmployeesRequest } from "./API Requests/api";

import "./App.css";
import AddEmployee from "./components/AddEmployee/AddEmployee";
import NavBar from "./components/NavBar/NavBar";

const Table = React.lazy(() => import("./components/Table/Table"));

export const Context = createContext('');

function App() {
 
  useEffect(() => {
    fetchEmpDetails();
  }, []);

  const [isActive, setIsActive] = useState(false);
  const [isActiveUpdate, setIsActiveUpdate] = useState(false);
  const [fetchedEmployees, setFetchedEmployees] = useState([]);
  const [update_Emp_Id, setupdateEmpId] = useState({});

  const fetchEmpDetails = async () => {
    return setFetchedEmployees(await fetchEmployeesRequest());
  }

  const getEmpIdForUpdate = (empInfo) => {
    setupdateEmpId(empInfo)
  }


  const value =useMemo(() => ({
    isActive,
    setIsActive,
    updateEmployeePopup : { isActiveUpdate, setIsActiveUpdate },
    fetchEmployeesContext : { fetchedEmployees, fetchEmpDetails },
    updateEmpContext : {update_Emp_Id, getEmpIdForUpdate, setupdateEmpId}
  }), [isActive, setIsActive,isActiveUpdate, setIsActiveUpdate, fetchedEmployees, fetchEmpDetails]);

  return (
    <Context.Provider value={value}>
      <div className="App">
        <NavBar />
        {isActive && <AddEmployee />}
        <Suspense fallback="Loading">
          <Table />
        </Suspense>
      </div>
    </Context.Provider>
  );
}

export default App;
