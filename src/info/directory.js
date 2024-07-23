import React from 'react'
import TELE from '../images copy/TELE.png'
import { useState } from 'react'; // For managing collapsible state
import "../App.css";
import Collapsible from 'react-collapsible';
import Grid from './grid';
import graphic from '../images copy/chelation101.png';
import chelationgraphic from '../images copy/chelationgraphic.png';
import chelationbenefits from '../images copy/chelationbenefits.png';
const Directory = () => {

  return (
    <div className='container'>
    <div className="title-container">
      <h1>Telehealth Directory</h1>
     
     
    </div>
    <div className="collapsible">
        <Grid />
    </div>
    <table className="collapsibles-table">
        <tbody> 
        <Collapsible trigger={<th className="collapsible-title">Chelation 101</th>}>
            <tr>
            <img className='pic1' src={graphic} alt='' />
            <img className='dual' src={chelationgraphic} alt='' />
            <img className='dual' src={chelationbenefits} alt='' />

            </tr>
          
          </Collapsible>

        </tbody>
      </table>
  </div>

    
  )
}

export default Directory