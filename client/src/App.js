import React from 'react'
import {Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from"./component/Navbar"
import Home from "./component/Home"
import About from "./component/About"
import Contact from "./component/Contact"
import Login from "./component/Login"
import Signup from "./component/Signup"
import Logout from "./component/Logout"
import Welcome from"./component/Welcome"


const App = () => {
  return (
    <> 
    <Navbar/>
    <Routes>
    <Route path = '/' element={<Home/>}/>

    <Route path = '/home' element={<Home/>}/>
    <Route path = '/about' element={<About/>}/>
    <Route path = '/contact' element={<Contact/>}/>
    <Route path = '/login' element={<Login/>}/>
    <Route path = '/signup' element={<Signup/>}/>
    <Route path = '/logout' element={<Logout/>}/>
    <Route path = '/welcome' element={<Welcome/>}/>
    

   
    </Routes>
    
   
   
    </>
  )
}

export default App
