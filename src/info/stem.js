import React from 'react';
import Collapsible from 'react-collapsible';
import "./stem.css"; // Adjusted path for stem.css
import ryantannehill from '../images copy/ryantannehillgraphic.png';
import jamaalcharles from '../images copy/JamaalCharles.png';
import whystemcell from '../images copy/whystemcell.png';
import whatisastemcell from '../images copy/what-is-a-stem-cell-illustration.jpg';
import stembenefits from '../images copy/stembenefits.png';
import stemtype from '../images copy/stem-type.jpg';

const Stem = () => {
  return (
    <div className='container'>
      <h1>Stem Cell Therapy</h1>
      <div className="title-container">
        <table className="collapsibles-table">
          <tbody>
            <Collapsible trigger={<th className="collapsible-title">Stem Cell Therapy Explained</th>}>
                    <img alt='' />
                    <img className='gridima' src={whatisastemcell} alt='What is a stem cell' />
                    <img className='gridimag' src={stemtype} alt='Stem cell types' />
                    <img className='gridimag' src={whystemcell} alt='Why stem cell' />
            <img alt='' />
            </Collapsible>
          </tbody>
        </table>
      </div>

      <div>
        <img src={stembenefits} className="AC" alt="Stem cell benefits" />
      </div>

      <div className="case-studies">
        <img src={ryantannehill} className="CASESTUDY" alt="Ryan Tannehill" />
        <img src={jamaalcharles} className="CASESTUDY" alt="Jamaal Charles" />
      </div>
    </div>
  );
}

export default Stem;
