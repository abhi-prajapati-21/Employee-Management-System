
export const addEmployeeRequest = async (formData) => {

    try {

      await fetch("https://employee-management-system-omqz.onrender.com/employee/add", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
      })
    } catch (error) {
        console.log(error);
    }
}
export const fetchEmployeesRequest = async () => {

    try {
      return await fetch("https://employee-management-system-omqz.onrender.com/employee/fetchEmployees")
      .then((data) => data.json())
      .then((result) =>  result);
    } catch (error) {
      console.log(error);
      return [];
    }
}

export const deleteEmpRequest = async (id) => {

  try {
    return await fetch(`https://employee-management-system-omqz.onrender.com/employee/delete/${id}`, { method: 'DELETE' } );
  } catch (error) {
    console.log(error);
    return [];
  }
}
export const updateEmpRequest = async (id, formData) => {

  try {

    await fetch(`https://employee-management-system-omqz.onrender.com/employee/update/${id}`, {
    method: "PUT",
    body: JSON.stringify(formData),
    headers: {
      "Content-Type": "application/json",
    },
    })
  } catch (error) {
    console.log(error);
  }
}
