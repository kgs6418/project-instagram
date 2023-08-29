import React from 'react'
import image from '../image/homepage.jpg'


const Home = () => {
  return (
  <>
   <div className='home-page'>
   <div className='welcome'>
      <h1>Welcome To Instagram. Let's Connect</h1>
      <div className='homepage-image'>
      <img src={image} alt=''/>
      </div>
     
       
      </div>
   </div>
      
  </>
  )
}

export default Home
