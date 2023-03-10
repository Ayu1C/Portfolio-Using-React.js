import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import Proj1 from './Proj1';
import Work from './Work';

const Project = () => {
  return (
    <div>
      <Navbar/>
      <Proj1 header="PROJECTS." text="Some of my most recent works" />
      <Work/>
      <Footer/>
    </div>
  )
}

export default Project;
