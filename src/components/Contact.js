import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import Proj1 from './Proj1';
import Form from './form';

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <Proj1 header="CONTACT." text="Lets have a chat"/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact;
