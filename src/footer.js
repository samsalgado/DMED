import React from 'react'
import LOGO from "./images copy/LOGO.png";
import Grid from './info/grid';
import { Navbar } from'react-bootstrap';
import './App.css';

const Footer = () => {
  return (
<div className="footer-container">
<Navbar.Brand href="/">
          <div><img src={LOGO} className="Logo" alt="logo" /></div>
        </Navbar.Brand>        
        <Grid />  
        </div>
    )
}

export default Footer;
