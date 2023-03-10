import "./HelloStyles.css";
import React from 'react'
import Project from './Project.js'
import Contact from './Contact.js'
import HelloImg from "../assets/HelloImg.jpg";

const Hello = () => {
  return (
    <div className="hello">
      <div className="mask">
        <img className="HelloImg" src={HelloImg} alt="HelloImg" />
      </div>
      <div className="content">
         <h1>HELLO, I'M AYUSHI.</h1>
         <p>Web Developer.</p>
         <div>
            <a href= "Project" className="btn">
                PROJECTS
            </a>
            <a href= "Contact" className="btn btn-light">
                CONTACT
            </a>
         </div>
      </div>
    </div>
  )
}

export default Hello
