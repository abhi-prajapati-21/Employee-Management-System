import employee from '../Model/EmployeeModel.js'

export const addEmployee = async (req, res) => {

    const {name, email, salary, date} = req.body;
      
    try {
        await employee.create({employeeName: name, employeeEmail: email, salary: salary, date: date})
        res.status(200).json('employee created')
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const fetchEmployees = async (req, res) => {

  try {
      const allEmp = await employee.find();
      const empDetails = []

      allEmp.forEach(emp => {
        empDetails.push({
            _id: emp._id,
            employeeName: emp.employeeName,
            employeeEmail: emp.employeeEmail,
            salary: emp.salary,
            date: emp.date,
        })
      })
      res.status(200).json(empDetails)
  } catch (error) {
      res.status(500).json({message: error.message})
  }
}

export const deleteEmp = async (req, res) => {

    const { id: _id } = req.params;
    try {
        await employee.findByIdAndRemove(_id)
        res.status(200).json('employee deleted')
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const updateEmp = async (req, res) => {

    const {id: _id} = req.params;
    const { name, email, salary, date } = req.body;
    console.log(_id);
     
    try {
        await employee.findByIdAndUpdate(_id, {
            employeeName: name,
            employeeEmail: email,
            salary: salary,
            date: date,
        })
        res.status(200).json('employee updated')
    } catch (error) {
        res.status(405).json({message: error.message})
    }
}