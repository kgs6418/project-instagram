import React,{useState} from 'react'
import { NavLink, useNavigate } from 'react-router-dom'


const Signup = () => {

   const navigate = useNavigate();

   const [user,setUser]=useState({
      name:"", username:"", email:"", password:"", bio:""
   });

   let name,value;
   const handleInputs = (e)=>{
      // console.log(e)
      name= e.target.name;
      value=e.target.value;

      setUser({...user, [name]:value});
   }

   const postdata = async(e)=>{
      e.preventDefault();

      const{name, username, email, password, bio} = user;

      const res = await fetch('http://localhost:8080/register' , {
         method: "POST",
         credentials:'include',
         headers:{'Content-Type': 'application/json'},
         body: JSON.stringify({name, username, email, password, bio})
      });

      const data = await res.json();

      if( res.status === 422 || !data ){
         window.alert("Unsuccessfull registration")
         console.log("Unsuccessfull registration")}
         
      else{
         window.alert(" Registration successfull")
         console.log(" registration successfull")
         navigate('/Login');
      }

   
   }

  return (
    <>
    <div className="login-container">
      <h1 className="head">Instagram Signup</h1>
   
      <div className="name">
      <label htmlFor="">name</label><br />
         <input type="text" name="name" id="box1"   value = {user.name} onChange={handleInputs} /> 
      </div>

      <div className="username">
      <label htmlFor="">username</label><br />
         <input type="text" name="username" id="box1" value = {user.username} onChange={handleInputs} /> 
      </div>

      <div className="email">
      <label htmlFor="">email</label><br />
         <input type="text" name="email" id="box1"   value = {user.email} onChange={handleInputs} /> 
      </div>

      
      <div className="password2">
      <label htmlFor="">password</label><br />
         <input type="text" name="password" id="box1" value = {user.password} onChange={handleInputs} /> 
      </div>

      <div className="bio">
      <label htmlFor="">bio</label><br />
         <input type="text" name="bio" id="box1" value = {user.bio} onChange={handleInputs} /> 
      </div><br />

      
  
      
      <button id='btn' onClick={postdata}>Signup</button>
     
  
      <div className='foot2'>
      
      <NavLink to="/Login"><span>Login</span></NavLink>
      </div>
      
    </div>
      </>
  )
}

export default Signup
