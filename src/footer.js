import React from 'react'
import LOGO from "./images copy/LOGO.png";
import Grid from './info/grid';
import './App.css';

const Footer = () => {
  return (
<div className="footer-container">
        <div><img src={LOGO} className="Logo" alt="logo" /> </div>
        <Grid />
        </div>
    )
}

export default Footer;
