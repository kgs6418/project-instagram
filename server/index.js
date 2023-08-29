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

app.use((req, res, next) => {
  const allowedOrigins = [
    'https://client-instagram.vercel.app',
       'https://client-instagram.vercel.app/login'
  ];

  const origin = req.headers.origin;
  
  if (allowedOrigins.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
  }
  
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
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
