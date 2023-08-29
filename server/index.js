const dotenv = require('dotenv')
const mongoose = require('mongoose')
const express = require('express')
const app = express();
const User= require('./model/userSchema.js')
const cors = require('cors')

//path for .env file
dotenv.config({path:'./.env'})
//database connection
require('./db/conn.js')

app.use(express.json());

app.use(function (req, res, next) {
res.setHeader('Access-Control-Allow-Origin', 'https://client-instagram.vercel.app');
res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
res.setHeader('Access-Control-Allow-Credentials', true);

next();
});

app.use(require('./router/auth.js'))

const PORT = process.env.PORT || 8000;


//connecting to database


//this is home route
// app.get('/',(req,res) =>{
//     res.send("hello GAURAV from server")
// })

//listening app on the PORT
app.listen(PORT,()=>{
    console.log("YOUR SERVER IS UP ON PORT:",PORT)
})
