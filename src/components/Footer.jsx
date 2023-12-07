import React from 'react';
import "./Footer.css"

const Footer = () => {
  return (
    <div className="Footer" >
        <div className="top">
            <div>
                <h1>Tranquil</h1>
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
                <h4>Project</h4>
                <a href="/">ChangeLog</a>
                <a href="/">Status</a>
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
                <h4>Company</h4>
                <a href="/">ChangeLog</a>
                <a href="/">Status</a>
                <a href="/">Licence</a>
                <a href="/">All Versions</a>
            </div>
            <div>
                <h4>Project</h4>
                <a href="/">ChangeLog</a>
                <a href="/">Status</a>
                <a href="/">Licence</a>
                <a href="/">All Versions</a>
            </div>
        </div>
    </div>
  )
}

export default Footer