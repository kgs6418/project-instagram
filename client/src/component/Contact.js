import React from 'react'
import logo1 from "../image/face.png"
import logo2 from "../image/insta.png"
import logo3 from "../image/link.png"
import logo4 from "../image/twi.png"
const Contact = () => {
  return (

   <>
    <div className='contact'>
        
          <h4>Phone</h4>
          <span>+99-1234512345</span><br /><br />

          <h4>mail-us</h4>
          <span>insta_corporate@gmail.com</span><br /><br />
          
          <h4>Social media</h4>
          <img src={logo1} alt="" /><br />
          <img src={logo2} alt="" /><br />
          <img src={logo3} alt="" /><br />
          <img src={logo4} alt="" />

       
        </div>
   </>

       
  )
}

export default Contact
