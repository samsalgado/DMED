import React from 'react';
import Collapsible from 'react-collapsible';
import acupuncturebenefits from '../images copy/acupuncturebenefits.png';
import acutreats from '../images copy/acupuncturetreats.png';
import spleen from '../images copy/spleen.png';
import kidneyacu from '../images copy/kidneyacu.png';
import acuchart from '../images copy/acu=-chart.png';
import './acu.css'; // Import only acu.css for styling

const Info1 = () => {
  return (
    <div className='container'>
      <h1>Acupuncture</h1>

      <div className="title-container">
        <table className="collapsibles-table">
          <tbody>
            <Collapsible trigger={<th className="collapsible-title">Acupuncture Channels</th>}>
            <img className='gridimage' src={kidneyacu} alt='Kidney Acupuncture' />
                <img className='gridimag' src={spleen} alt='Spleen' />
                <img className='gridimage' src={acutreats} alt='Acupuncture Treats' />
                <img className='gridimag' src={acuchart} alt='Ac ' />
            <img alt='' />
            
            </Collapsible>
          </tbody>
        </table>
      </div>

      <div>
        <img src={acupuncturebenefits} className="AC" alt="Acupuncture Benefits" />
      </div>

    
    <br></br>
    <div className='wpr'>
     <br></br>
     
      <h2>Dry Needling vs Acupuncture </h2>
        <p>
        Acupuncture is a technique for balancing the flow of energy, or life force flowing through pathways in your body. Via little insertions, acupuncture works with the body's connective tissue to alter brain chemistry. The major purpose of acupuncture is pain management. "Increased blood flow equals increased healing time". If an athlete has a prolonged injury or partial tear, they can opt for dry needling and ultrasound therapy as an alternative to steroids. Acupuncturists use more than one technique, dry needling does not directly go into the skin, instead working with the infected area. Another route is acupressure, a manual pressure used instead of fine-needling. Another approach is cupping, an alternative treatment using suction cups to stimulate skin and muscles.

</p>
<p>
  Dry needling serves a purpose for muscoskeletal disorders and diseases, working to relieve the trigger point symptom. Unlike Traditional Chinese medicine, dry needles work with the body's anatomy. There are two types - pistoning (insertion directly into the trigger point) and muscle contraction (insertion directly into the skin). This technique is used more for pain and stiffness of the muscles. Regardless, dry needling and acupuncture are both considered safe via a practitioner.
</p>
<p>
Acupuncture works to increase blood flow, reduce inflammation, and does not alter your brain chemistry or have side effects like pharmaceuticals. Pharmaceuticals disrupt your brain chemistry and do not work with your brain's pathways.
</p>
    </div>
    </div>
    
  )
}

export default Info1
