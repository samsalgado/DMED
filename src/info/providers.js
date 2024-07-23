import React from 'react'
import TELE from '../images copy/TELE.png'
import { useState } from 'react'; // For managing collapsible state
import "../App.css";
import Collapsible from 'react-collapsible';
const Provider = () => {

  return (
    
    <div className='container'>
        <table className="collapsibles-table">
          <tbody> 
          <Collapsible trigger={<th className="collapsible-title">Provider Sign Up</th>}>
              <tr>
                <td>Estimated $455 billion spent on healthcare yearly is lost each year to fraud and corruption.</td>
              </tr>
              <tr>
                <td>45% of global citizens believe the healthcare sector is corrupt or very corrupt.</td>
              </tr>
            </Collapsible>
          </tbody>
        </table>
       
      </div>
    
  )
}

export default Provider