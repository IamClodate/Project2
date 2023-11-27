import React from "react";
import "./Hero.css";
import herpImg from '../assets/image2.jpeg'; 

function Hero(props) {
    return (
      <div className={props.cName}>
         <img alt="HerpImg" src= {props.herpImg}/>
      // <img src={herpImg} alt="Hero Image" />

  
          <div className="hero-text"></div>
          <h1>props.title</h1>
          <p>props.text</p>
          <a href="/">
            Travel Plan
          </a>
      </div>
    );
  }
  
  export default Hero;

  