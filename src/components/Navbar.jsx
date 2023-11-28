import React from 'react';
import { Component } from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom';
import { MenuItems } from './MenuItems';



class Navbar extends Component {
    state = { clicked: false };
    handleClick = () =>{
        this.setState({ clicked: !this.state.clicked})
    }

    render() {
        return(
            <nav className="NavItems">
            <h1 className="navbar-logo">Tranquil</h1>

           
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

            <button>Sign Up</button>
                
            </ul>
            </nav>
        )
    }
}

export default Navbar;