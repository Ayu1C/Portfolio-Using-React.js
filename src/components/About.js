import React from 'react'
import Navbar from './Navbar';
import Proj1 from './Proj1';
import Footer from './Footer';

const About = () => {
  return (
    <div>
      <Navbar/>
      <Proj1 header="ABOUT." text="I'm a Front-End Developer."/>
      <Footer/>
    </div>
  )
}

export default About;
