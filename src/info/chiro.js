import React from 'react'
import "./chiro.css";
import Collapsible from 'react-collapsible';
import DETOXIMG from '../images copy/detox.png';
import turmeric from '../images copy/tumeric.png';
import ginger from '../images copy/gin.png';
import aloevera from '../images copy/aloevera.png';
import broccoli from '../images copy/broc.png';
import gf from '../images copy/gf.png';
import lemon from '../images copy/lemon.png';
import stats from '../images copy/stats.jpg';
import pills from '../images copy/pills.png';
import chirotreat from '../images copy/chirotreats.png';
import chiropractorstats from '../images copy/chiropractor-stats.png';
const Chiro = () => {

  return (
    
    <div className='container'>
              <h1>Chiropractic</h1>

      <div className="title-container">
        <table className="collapsibles-table">
          <tbody> 
          <Collapsible trigger={<th className="collapsible-title">Benefits of Chiropractic</th>}>
              <tr>
                <img />
                <img className='gridimage' src={chiropractorstats} alt='' />        
                <img className='gridimage' src={chirotreat} alt='' />
              <img />
              </tr>

            </Collapsible>
            <Collapsible trigger={<th className="collapsible-title">Myths of Chiropractors</th>}>
              <tr>
                <td> 1. Chiropractors are not trusted by other healthcare professionals 
</td>
              </tr>
              <tr>
                <td>2. Chiropractors are not real MDs</td>
              </tr>
              <tr>
                <td>3. Chiropractic adjustments are dangerous</td>
              </tr>
              <tr>
                <td> 4. Chiropractors crack backs, only for the sake of back pain.
                Cracking backs releases gas bubbles, thus mobilizing joints and increasing joint function.
                </td>
              </tr>
              <tr>
                <td>5. Chiropractors cannot help with sciatica 

</td>
              </tr>
              <tr>
                <td> 6. People view chiropractic care as religion or magic
</td>
              </tr>
              <tr>
                <td>7. Children should NOT get chiropractic care</td>
              </tr>
              <tr><td>8. Adjustments are painful</td></tr>
                  <tr><td>9. Chiropractors are expensive</td></tr> 
                  <tr>
                    <td> 10. Chiropractors do not offer any help with strain or sprain</td>
                    </tr>
            </Collapsible>
          </tbody>
        </table>
       
      </div>
      <div className="collapsible">

      </div>
      <div><img src={stats} className="FACTS" alt="logo" /></div>

    <div className='par'>
        <p>

The war on drugs has been a colossal failure. Since its inception, the drug war has decimated countries, incarcerated black men, and overdose deaths increases. Since 1999, drug overdoses have tripled in the last two decades. Furthermore, the figures are from 2020, a period plagued by a global pandemic. With Fentanyl on the rise in the 2020s, the numbers are only increasing. Alternative treatments like Chiropractic are non-invasive and align the body. An estimated 80% of the population will have significant back pain.
        </p>
        <p>
        An estimated 65% of American adults seek care for neck or back pain in their lifetime. Extrapolating that figure, 36% of Americans do not know if surgery is effective for their pain. Chiropractic care is 40% (estimate) more effective for treating back pain. Chiropractors remove neurological interference and restore proper biomechanics to the spine. Moreover, chiropractic care supports the immune system, improves sleep, improves behavior, improves brain development, and benefits development in both adults and children.
        </p>
    </div>
    </div>
    
  )
}

export default Chiro;