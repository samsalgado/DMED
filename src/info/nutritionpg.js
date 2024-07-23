import React from 'react'
import "../App.css";
import Collapsible from 'react-collapsible';
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
                <img alt='' />
              <img className='gridimage' src={obese} alt='' />
              <img className='gridimag' src={drsebi} alt='' />
              <img alt='' />
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