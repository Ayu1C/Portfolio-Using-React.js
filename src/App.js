import React from "react";
import Home from './components/Home.js';
import Project from './components/Project.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import "./index.css"

import {Route, Routes} from "react-router-dom";

function App()
{
    return <>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
       </Routes>
    </>
}

export default App;