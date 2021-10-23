const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const mongoose = require('mongoose')
require('dotenv/config')


const app = express();


//Import routes 
const ordersRoute = require('./routes/orders')
const driversRoute = require('./routes/drivers')



//middleware
app.use(bodyParser.json());
app.use(cors());


//routes
app.use('/orders', ordersRoute)
app.use('/drivers', driversRoute)


//port
const port = 5000;


//connect to DB
mongoose.connect(process.env.DB_CONNECTION, ()=>{
    console.log('connected to db')
})


//listening to server
app.listen(port, ()=>{console.log(`server started on port: ${port}`)})
