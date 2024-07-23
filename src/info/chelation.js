import React from 'react'
import TELE from '../images copy/TELE.png'
import { useState } from 'react'; // For managing collapsible state
import "../App.css";
import Collapsible from 'react-collapsible';
import graphic from '../images copy/chelation101.png';
import chelationgraphic from '../images copy/chelationgraphic.png';
import chelationbenefits from '../images copy/chelationbenefits.png';
const Pgchelation = () => {

  return (
    <div className='container'>
            <h1>Chelation</h1> 

            <div className="title-container">

    <div className="collapsible">

    </div>
    <table className="collapsibles-table">
        <tbody> 
        <Collapsible trigger={<th className="collapsible-title">Chelation 101 (Heavy Metal Detox)</th>}>
            <tr>
              <img />
            <img className='gridimag' src={graphic} alt='' />
            <img className='gridimag' src={chelationgraphic} alt='' />
            <img className='dual' src={chelationbenefits} alt='' />
            <img />
            </tr>
          
          </Collapsible>

        </tbody>
      </table>

  </div>
  <iframe width="100%" height="500px" src="https://www.youtube.com/embed/MLNGwB26M5k?si=mC7cdIxG3bRR8RQ9"  title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

  </div>
    
  )
}

export default Pgchelation