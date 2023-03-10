import "./FooterStyles.css"
import "react-icons/fa";
import React from 'react'
import {FaHome, FaLinkedin, FaMailBulk, FaPhone,FaTwitter, FaGithub} from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
            <div className="location">
             <FaHome size={20} style={
                {color:"#fff",marginRight: "2rem"}
             }/>
             <div>
                <p>Swastik Vihar Colony.</p>
                <p>India.</p>
             </div>
             </div>
             <div className="phone">
               <h4><FaPhone size={20} style={
                {color:"#fff",marginRight: "2rem"}
             }/> 9302780473</h4>
            </div>
            <div className="email">
               <h4><FaMailBulk size={20} style={
                {color:"#fff",marginRight: "2rem"}
             }/> ayushichouhan2003@gmail.com</h4>
            </div>
        </div>


        <div className="right">
           <h4>About Me</h4>
           <p>
              This is me Ayushi Chouhan, currently a sophomore at Medi-Caps University.
              I enjoy discussing new projects and design challenges. Also, I am interested in exploring other tech domains apart from web development.
           </p>
           <div className="social">
             <a href="https://github.com/Ayu1C">
             <FaGithub size={20} style={
                {color:"#fff",marginRight: "2rem"}
             }/>
             </a>
             <a href="https://twitter.com/AyushiC53476011">
             <FaTwitter size={20} style={
                {color:"#fff",marginRight: "2rem"}
             }/>
             </a>
             <a href="https://www.linkedin.com/in/ayushi-chouhan-074758221/">
             <FaLinkedin size={20} style={
                {color:"#fff",marginRight: "2rem"}
             }/>
             </a>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
