// import React from 'react';
import "./Footer.css"
import logoImage from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="Footer" >
        <div className="top">
            <div>
                <h1>Tranquil</h1>
                <img src={logoImage} alt="Logo" className="logo"/>
                <p>Thank you for choosing Tranquil Tours</p>
            </div>
            <div>
                <a href="/">
                    <i className="fa-brands fa-facebook-square"></i>
                </a>
                <a href="/">
                    <i className="fa-brands fa-instagram-square"></i>
                </a>
                <a href="/">
                    <i className="fa-brands fa-behance-square"></i>
                </a>
                <a href="/">
                    <i className="fa-brands fa-twitter-square"></i>
                </a>
            </div>
        </div>

        <div className="bottom">
            <div>
                <h4>Information</h4>
                <a href="/">About Us</a>
                <a href="/">Project</a>
                <a href="/">Licence</a>
                <a href="/">All Versions</a>
            </div>
            <div>
                <h4>Community</h4>
                <a href="/">ChangeLog</a>
                <a href="/">Status</a>
                <a href="/">Licence</a>
                <a href="/">All Versions</a>
            </div>
            <div>
            <h4>Helpful Links</h4>
                <a href="/">Company</a>
                <a href="/">Status</a>
                <a href="/">Licence</a>
                <a href="/">All Versions</a>
            </div>
            <div>
            <form>
                    <input placeholder="Name"/><br></br>
                    <textarea placeholder="Subscribion Message" rows="4"></textarea><br></br>
                    <button>Subscribe</button>

                </form> 

                
            
            </div>
        </div>
        <div className="rights">
            <p>All rights reserverd</p>
        </div>
    </div>
  )
}

export default Footer