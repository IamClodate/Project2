// import React from 'react';
import "./Destination.css";
import picture from "../assets/images5.jpeg"
import picture1 from "../assets/images4.jpeg"
import picture2 from "../assets/images3.jpeg"
import picture3 from "../assets/images.jpeg"

const Desitination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Tours give you the opportunity to be a person you wish to be</p>
    

      <div className="first-dev">
        <div className="des-text">
          <h2>This will be our Destinationss of the tour</h2>
            <p>We ARE EXICITED to have everyone here in ofor our travel log app to come and dine with our friends and loved</p>
        </div>

        <div className="image"> 
          <img alt="img" src={picture}/>
        </div>
      </div>
    </div>

  );
};

export default Desitination;