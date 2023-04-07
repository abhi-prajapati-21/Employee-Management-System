import express from 'express'
import { 
    addEmployee, 
    fetchEmployees, 
    deleteEmp, 
    updateEmp} from '../Controller/empController.js';

const router = express.Router();

router.post('/add', addEmployee)
router.get('/fetchEmployees', fetchEmployees)
router.delete('/delete/:id', deleteEmp)
router.put('/update/:id', updateEmp)

export default router;