import React from 'react'
import { useState } from 'react'; // For managing collapsible state
import "../App.css";
import Collapsible from 'react-collapsible';
import { Ayurveda } from '../pages/Ayurveda';
import ayurveda from "../images copy/ayurveda-science.png";
import SPACE from "../images copy/SPACE.png";
import AIR from "../images copy/AIR.png";
import fire from "../images copy/fi.png";
import AGUA from "../images copy/AGUA.png";
import EARTH from "../images copy/EARTH.png";
import obese from '../images copy/obese.png';
import drsebi from '../images copy/drsebi.jpeg';
const Nutritionpage = () => {

  return (
    
    <div className='container'>
              <h1>Nutrition</h1>

      <div className="title-container">
        <table className="collapsibles-table">
          <tbody> 
          <Collapsible trigger={<th className="collapsible-title">Obesity Facts</th>}>
              <tr>
                <img />
              <img className='gridimage' src={obese} alt='' />
              <img className='gridimag' src={drsebi} alt='' />
              <img />
              </tr>
            
            </Collapsible>

          </tbody>
        </table>
       
      </div>
      <div className="collapsible">

      </div>
     <iframe width="100%" height="650px" src="https://www.youtube.com/embed/2sZbrRXHJiU?si=kW8BOV3isy3SsQiD" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
    
  )
}

export default Nutritionpage;