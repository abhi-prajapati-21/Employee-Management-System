import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

import employeeRoutes from './Router/router.js'

const app = express();
const PORT = 5000;
dotenv.config()

app.use(cors())
app.use(express.json({limit: "30mb", extended: true}))
app.use(express.urlencoded({limit: "30mb", extended: true}))

app.use('/employee', employeeRoutes)

app.get('/', (req, res) => {
    res.send('<h1>Hello</h1>')
})

const Connection = process.env.CONNECTION_URL

mongoose.connect(Connection, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((resp) => console.log("resp ==", "success"))
    .catch((error) => console.log(error.message))
    
    app.listen(PORT, () => {
        console.log('server runinggg..');
    })
    
