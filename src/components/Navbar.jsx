// import React from "react";
import { Component } from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom';
import { MenuItems } from './MenuItems';
import logoImage from "../assets/logo.png";



class Navbar extends Component {
    state = { clicked: false };
    handleClick = () =>{
        this.setState({ clicked: !this.state.clicked})
    }

    render() {
        return(
            <nav className="NavItems">
           
            <img src={logoImage} alt="Logo" className="logo"/>
           
           
            <div className="menu-icons" onClick=
                {this.handleClick}>
                <i className={this.state.clicked ? "fa-solid fa-bars" : "fa-solid fa-x"}></i>
            </div>


            <ul className={this.state.clicked ? 
                "nav-menu active" : "nav-menu"}>
            {MenuItems.map((item, index) => {
                return (
                <li key={index}>
                    <Link className={item.cName} to={item.url}>
                        <i className={item.icon}></i>
                        {item.title}
                    </Link>
                </li>
                );
            })}
                
            </ul>
                 <div className="Profile">
                    <img src={logoImage} alt="Logo" className="logo"/>
                 </div>
            

                <div className="Upnav">
                    <button>Sign Up</button><br></br>
                    <button>Search</button><br></br>
                    <button>Notifications</button><br></br>
                    <button>Quick Access</button><br></br>
                </div>
            </nav>
        )
    }
}

export default Navbar;