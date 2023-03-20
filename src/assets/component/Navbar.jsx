import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Logo from '../images/blueLogo.png';
import '../styles/NavBar.css'

const Navbar = () => {
    return (
        <div className='NavBar'>
            <div className="navbar-content">
                <div className="logo">
                    <Link to="/"> <img src={Logo} alt="logo" /> </Link>
                </div>
                <div className="list-nav">
                    <ul>
                        <li><NavLink activeClassName="active" to="/">INICIO</NavLink></li>
                        <li><NavLink activeClassName="active" to="/winners">GANADORES</NavLink></li>
                        <li><NavLink activeClassName="active" to="/refunds">REEMBOLSOS</NavLink></li>
                        <li><NavLink activeClassName="active" to="/instructions">INSTRUCCIONES</NavLink></li>
                        <li><NavLink activeClassName="active" to="/about">ACERCA DE</NavLink></li>
                        <li><NavLink activeClassName="closed" to="/login"><i className="fa-solid fa-right-to-bracket"></i> </NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;