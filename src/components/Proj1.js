import "./Proj1Styles.css";

import React, { Component } from 'react'

class Proj1 extends Component {
  render(){
    return (
      <div className="proj1">
        <div className="heading"> 
           <h1>{this.props.header}</h1>
           <p>{this.props.text}</p>
        </div> 
      </div>
    )
  }
}

export default Proj1
