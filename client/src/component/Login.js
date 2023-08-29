import React ,{useState} from 'react'
import { NavLink,useNavigate } from 'react-router-dom'


const Login = () => {

  const navigate = useNavigate();

const [username,setUsername]= useState("");
const [password,setPassword]= useState("");


const loginuser = async(e) =>{
  e.preventDefault();

  const res = await fetch('https://project-instagram-server.vercel.app/login' ,{
     mode: 'cors',
    method:"POST",   
    headers:{'Content-Type': 'application/json'},
    credentials:'include',
    body: JSON.stringify({username,password})
  } )

  const data = await res.json();
  

  if(res.status === 400 || !data){
    window.alert("Unsuccessfull login")
    console.log("Unsuccessfull login")}
    else{
      window.alert(" login successfull")
         console.log(" login successfull")
         navigate('/welcome');
    }

  }


  return (
    <>
  <div className="login-container">
    <h1 className="head">Instagram Login</h1>
 
    <div className="username">
    <label htmlFor="">Username</label><br />
       <input type="text" name="" id="box1" value={username}  onChange={(e)=>setUsername(e.target.value)}/><br />
    </div>

    <div className="password">
    <label htmlFor="">password</label><br />
       <input type="text" name="" id="box1" value={password}  onChange={(e)=>setPassword(e.target.value)} /><br /><br />
    </div>

    
    <button id='btn' onClick={loginuser}>login</button>
   

    <div className='foot'>
    <span> forgot password?</span>

      <NavLink  to="/signup"><span>SignUp</span></NavLink>
    
    </div>
    
  </div>
    </>
  )
}

export default Login
