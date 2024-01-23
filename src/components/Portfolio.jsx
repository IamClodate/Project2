import React from "react";
import "./Portfolio.css";


import icon from "../assets/sea.jpeg"
import icon1 from "../assets/picc.jpeg"
import icon2 from "../assets/images.jpeg"
import icon3 from "../assets/images4jpeg"



const Portfolio = () => {
  return (
    <div className="portfolio section container">
        <div className="secContainer grid">
            <div className="leftContent">
                <div className="secHeading">
                    <h3>Why Should you Choose Us</h3>
                    <p>We have extensive knowledge and experience in the travel industry....</p>
                </div>

                <div className="grid">
                    <div className="singlePortfolio flex">
                        <div className="iconDiv">
                            <img src={icon1} alt="Icon image" />
                        </div>

                    <div className="infor">
                        <h4>Safety and Support</h4>
                        <p>
                            Our top priority is the safety and well-being of our clients.
                            We maintain high safety standars and have emergency support 
                            available during the trip.
                        </p>
                        </div>
                    </div>

                        <div className="singlePortfolio flex">
                            <div className="iconDiv">
                                <img src={icon2} alt="Icon image" />
                            </div>

                            <div className="infor">
                                <h4>Diverse Range of Destination</h4>
                                <p>
                                    Our top priority is the safety and well-being of our clients.
                                    We maintain high safety standars and have emergency support 
                                    available during the trip.
                                </p>
                            </div>
                        </div>

                        <div className="singlePortfolio flex">
                            <div className="iconDiv">
                                <img src={icon} alt="Icon image" />
                            </div>

                            <div className="infor">
                                <h4>Diverse Range of Destination</h4>
                                <p>
                                    Our top priority is the safety and well-being of our clients.
                                    We maintain high safety standars and have emergency support 
                                    available during the trip.
                                </p>
                            </div>
                        </div>
                        <div className="singlePortfolio flex">
                            <div className="iconDiv">
                                <img src={icon3} alt="Icon image" />
                            </div>

                            <div className="infor">
                                <h4>Diverse Range of Destination</h4>
                                <p>
                                    Our top priority is the safety and well-being of our clients.
                                    We maintain high safety standars and have emergency support 
                                    available during the trip.
                                </p>
                            </div>
                        </div>

                </div>
            </div>
        </div>
     

    </div>
  )
}

export default Portfolio