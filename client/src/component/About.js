import React from 'react'
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const callAboutPage = async (req,res)=>{
    try {
      const res = await fetch('http://localhost:8080/about' , {
        method:'GET',
        headers: {
          'Content-Type': 'application/json'
      },
      credentials: 'include',
// we are not giving "body" becoz  we are not sending data rather we are receiving the data from backend.
      })
      const data = await res.json();
      console.log(data)

      if(!res.status ===200){
        throw new Error(res.error);
      }

    } catch (error) {
      console.log(error)
      navigate('/home');
      
    }
  }
  callAboutPage();

  return (
    <>
    <div>
      <h1>About Instagram</h1>
      <p>Instagram is a free photo and video sharing app available on iPhone and Android. People can upload photos or videos to our service and share them with their followers or with a select group of friends. They can also view, comment and like posts shared by their friends on Instagram. Anyone 13 and older can create an account by registering an email address and selecting a username.
      Want to learn more? Here are some of our popular help topics:</p>
    </div>
    <ul>
      <li>Instagram's <a href="https://help.instagram.com/477434105621119/?helpref=uf_share">Community Guidelines</a> and <a href="https://help.instagram.com/581066165581870/?helpref=uf_share">Terms of Use.</a></li>

      <li><a href="https://help.instagram.com/182492381886913?helpref=faq_content">Sign up</a> for an Instagram account.</li>
      <li><a href="https://help.instagram.com/139886812848894/?helpref=uf_share">Delete an account.</a></li>
      <li><a href="https://help.instagram.com/494561080557017/?helpref=uf_share">Information for Law Enforcement.</a></li>
    </ul>
    </>
  )
}

export default About
