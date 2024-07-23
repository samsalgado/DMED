import React from 'react'
import TELE from '../images copy/TELE.png'
import { useState } from 'react'; // For managing collapsible state
import Forum from './forum';
import "./homeo.css";
import quote from '../images copy/quote.png';
import homeo from '../images copy/homeo.png';
import b from '../images copy/b.png';
import cys from '../images copy/cys.png';
import gluta from '../images copy/gluta.png';
import polyphenols from '../images copy/polyphenols.png';
import se from '../images copy/se.png';
import peroxidase from '../images copy/peroxidase.png';
import Collapsible from 'react-collapsible';
import CoQ10 from '../images copy/coq10.png';
const Homeo = () => {

  return (
    <div className='thecontainer'>
    <div className='container'>
        <h1>Homeopathy</h1>
      <img src={quote} className="TELEa" alt="logo" />
      <div className="collapsible">
      </div>
    <br></br>
    <img src={homeo} className="HOMEO" alt="logo" />
<br></br>
      <Forum />
    </div>
    </div>
  )
}

export default Homeo