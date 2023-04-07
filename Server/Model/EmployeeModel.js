import mongoose from "mongoose";

const EmployeeModel = mongoose.Schema({
    employeeName: {type: String, required: true},
    employeeEmail: {type: String, required: true},
    salary: {type: Number, required: true},
    date: {type: Date, default: Date.now(), required: true}

})

export default mongoose.model('Employee', EmployeeModel)