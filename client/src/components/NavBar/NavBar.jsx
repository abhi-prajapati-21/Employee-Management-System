import React, { useContext, useEffect, useState } from 'react'

import './NavBar.css'
import { Context } from '../../App'
import SearchTable from '../SearchTable/SearchTable';

const NavBar = () => {

  const { fetchEmployeesContext } = useContext(Context);

  useEffect(() => {
    fetchEmployeesContext?.fetchEmpDetails()
  }, [])

  const [searchQuery, setSearchQuery] = useState(null)

  return (
    <nav>
      <h1>Employee Management Software</h1>
      <input 
      type="search" 
      placeholder='search employee'
      onChange={(e) => setSearchQuery(e.target.value)}
      />
      <SearchTable empDetails={{empContext: fetchEmployeesContext?.fetchedEmployees, searchQuery}}/>
    </nav>
  )
}

export default NavBar
