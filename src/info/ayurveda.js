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

const Ayurvedaa = () => {

  return (
    
    <div className='container'>
              <h1>Ayurveda Experience</h1>
              <img className='gridimag' src={ayurveda} alt='Ayurveda Science' />

      <div className="title-container">
        <table className="collapsibles-table">
          <tbody> 
            <Collapsible trigger={<th className="collapsible-title">Ayurvedic Elements</th>}>
                <img className='gridimage' src={SPACE} alt='' />
                <img className='gridimage' src={AIR} alt='' />
                <img className='gridimage' src={fire} alt='' />
                <img className='gridimage' src={AGUA} alt='' />
                <img className='gridimage' src={EARTH} alt='' />
            <img />
            </Collapsible>

          </tbody>
        </table>
       
      </div>
      <div className="collapsible">

      </div>
<iframe width="100%" height="600px" src="https://www.youtube.com/embed/mlFbTS9wVhE?si=fRt9B7LAT32KK3nX" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    <br></br>
    <div className='pr'>
        <h3>What is Ayurveda?</h3>
      <p>
        Ayurveda is a holistic healing system developed in India based on the delicate balance between mind, body, and spirit. The goal of Ayurveda is promoting good health instead of fighting disease. The goal is to cleanse
        your body of undigested food, which stay in your body and lead to illness. The process is called 'panchakarma', designed to reduce your symptoms and restore harmony and balance. Other processes used are blood purification, massage, medical oils, herbs, enemas, and laxatives. 
        </p>
        <h3>Why Choose Ayurveda</h3>
        <p>
            1. Truly embrace individual
        </p>
        <p>
            2. Foster self-awareness
        </p>
        <p>
            3. Focuses on prevention and the root cause of illness
        </p>
        <p>
            4. Truly intuitive
        </p>
    </div>
    </div>
    
  )
}

export default Ayurvedaa