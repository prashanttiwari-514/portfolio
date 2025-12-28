import React from 'react'
import "../Styles/Navbar.css"
import img from "../assets/pic.png";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
        <div className="navbar-logo">
       <img src={img} alt="load"></img>
       <span className='brand-text'>WEMADE</span>
        </div>
        <ul className='navbar-links'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/resume">Resume</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/certificates">Certificates</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar
