import React from "react";
import "./Hero.css";
import herpImg from '../assets/image2.jpeg'; 

function Hero() {
    return (
      <div className="hero">
         <img alt="HerpImg" src= "https://images.unsplash.com/photo-1504150558240-0b4fd8946624?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D"/>
      //  <img src={herpImg} alt="Hero Image" />

          <h1>This is Hero section</h1>
          <div className="hero-text"></div>
          <h1>Tranquil Tours</h1>
          <p>Explore your heart desires.</p>
          <a href="/">
            Travel Plan
          </a>
      </div>
    );
  }
  
  export default Hero;

  