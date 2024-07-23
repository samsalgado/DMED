import React from 'react'
import LOGO from "../images copy/LOGO.png";
import '../App.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import homeopathy from '../images copy/homeopathy.png';
import Treatment from './treatment';
import telehealth from "../images copy/TELE.png";
import apothecary from "../images copy/pills.png";
const Topbar = () => {
  return (
 <div className='topbar'>
  <Navbar bg="light" variant="light">
          <Navbar.Brand href="/" >
            
                  <div><img src={LOGO} className="Logo" alt="logo" /> </div>
            </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/homeopathy">
              Homeopathy
              <img className='coursepic' src={homeopathy} alt="" />
              </Nav.Link>
            <Nav.Link href="/prevent">
              Preventive Medicine
              <img className='preventpic' src={Treatment.prevent} alt="" />

            </Nav.Link>
            <Nav.Link href="/detox">Detox
            
            <img className='coursepic' src={Treatment.detox} alt="" />
        
            </Nav.Link>            
            <Nav.Link href="/acu">Acupuncture
               <img className='coursepic' src={Treatment.acupuncture} alt="" />

            </Nav.Link>
            <Nav.Link href="/stemcell"> Stem Cell Therapy
                          <img className='coursepic' src={Treatment.stemcell} alt="" />

            </Nav.Link>
            <Nav.Link href="/ayurveda">Ayurveda
                          <img className='coursepic' src={Treatment.ayurveda} alt="" />

            </Nav.Link>
            <Nav.Link href="/nutrition">Nutrition
                          <img className='coursepic' src={Treatment.nutriton} alt="" />

            </Nav.Link>
            <Nav.Link href="/chiropractic">Chiropractic
                          <img className='coursepic' src={Treatment.chiro} alt="" />

            </Nav.Link>
            <Nav.Link href="/chelation">Chelation
                          <img className='coursepic' src={Treatment.chelation} alt="" />

            </Nav.Link>
            <Nav.Link href="/telehealth"> Telehealth
                          <img className='coursepic' src={telehealth} alt="" />

            </Nav.Link>
            <Nav.Link href="/apoth"> Apothecary
                          <img className='coursepic' src={apothecary} alt="" />

            </Nav.Link>
          </Nav>

      </Navbar>
        </div>
    )
}

export default Topbar
