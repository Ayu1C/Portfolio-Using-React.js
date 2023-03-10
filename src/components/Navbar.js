import "./NavbarStyles.css"
import Project from "./Project.js"
import About from "./About.js"
import Contact from "./Contact.js"

import React, {useState} from 'react'

const Navbar = () => {

  const [color,setColor] = useState(false);
  const changeColor = () =>{
    if(window.scrollY >=100)
      setColor(true);
    else
      setColor(false);
  };

  window.addEventListener("scroll",changeColor);

  return (
    <div className= {color ? "header header-bg" : "header"}>
       <a href="/">
         <h1>Portfolio</h1>
       </a>
       <ul className="nav-menu">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/Project">Project</a>
          </li>
          <li>
            <a href="/About">About</a>
          </li>
          <li>
            <a href="/Contact">Contact</a>
          </li>
       </ul>
    </div>
  )
}

export default Navbar
