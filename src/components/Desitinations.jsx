import React from 'react';
import picture from "../assets/images5.jpeg"
import picture1 from "../assets/images4.jpeg"
import picture2 from "../assets/images3.jpeg"
import picture3 from "../assets/images.jpeg"

const Desitinations = () => {
  return (
    <div className="Destination">
        <h1> Popular Destinations</h1>
        <p>Tours give you the opportunity to see</p>
        
        <div className="First-destination">
            <div className="Des-text">
                <h2>Its our journet</h2>
                    <p>THIS WILL B EOY PARAHRAFSGHBJBHJB NJHKJ JHJH JNKJ BHU JHJI</p>
            </div>

            <div className= "image">
                <img  alt= "img" src={picture}/>
                <img  alt= "img" src={picture1}/>
                <img  alt= "img" src={picture2}/>
                <img  alt= "img" src={picture3}/>

            </div>
        </div>
    </div>
  );
};

export default Desitinations;