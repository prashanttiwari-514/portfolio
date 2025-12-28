import React from 'react';
import "../Styles/Footer.css";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <footer className='footer-container'>
        <div className='footer-icons'>
          <a href='#' target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href='#' target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href='#' target='_blank' rel="noopener noreferrer"><FaTwitter /></a>
          <a href="#" target='_blank' rel="noopener noreferrer"><FaInstagram /></a>
        </div>
        <p>{new Date().getFullYear()} All Rights Reserved | Made with ❣️ by <strong>WeMade</strong></p>
      </footer>
    </div>
  );
}

export default Footer;
