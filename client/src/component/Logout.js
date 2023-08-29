import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
const Logout = () => {
    const navigate = useNavigate();
    // we are using promices;
    useEffect(()=>{
        fetch('https://project-instagram-server.vercel.app/logout' ,{
            method:"GET",
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
        }).then((res) =>{
            navigate('/login');
            if(!res.status ===200){
                throw new Error(res.error);
              }
        
        }).catch((err)=>{
            console.log(err)
        })
        
    })

  return (
    <>
      <h1> You have been Logged Out. </h1>
      
    </>
  )
}

export default Logout
