import React from 'react'
import "../App.css";
import Collapsible from 'react-collapsible';
import DETOXIMG from '../images copy/detoxpg.png';
import turmeric from '../images copy/tumeric.png';
import ginger from '../images copy/gin.png';
import aloevera from '../images copy/aloevera.png';
import broccoli from '../images copy/broc.png';
import gf from '../images copy/gf.png';
import lemon from '../images copy/lemon.png';
const Info3 = () => {

  return (
    
    <div className='container'>
              <h1>Detox</h1>

      <div className="title-container">
        <table className="collapsibles-table">
          <tbody> 
          <Collapsible trigger={<th className="collapsible-title">Best Fruits and Vegetables for Detox</th>}>
                <img className='gridimage' src={turmeric} alt='' />
                <img className='gridimage' src={ginger} alt='' />
                <img className='gridimage' src={aloevera} alt='' />
                <img className='gridimage' src={broccoli} alt='' />
          
             <img className='gridimage' src={gf} alt='' />

             <img className='gridimage' src={lemon} alt='' />

              <td>Turmeric, Ginger, Aloe Vera, Broccoli, Grapefruit, Lemon</td>

            </Collapsible>
            <Collapsible trigger={<th className="collapsible-title">Detoxification Protocols</th>}>
              <tr>
                <td>Dr. William Kelley: Nutrition detoxification for cancer patients</td>
              </tr>
              <tr>
                <td>Dr Sebi: Detoxification protocol using Sea Moss and an alkaline "green" diet to cleanse the liver and colon.</td>
              </tr>
              <tr>
                <td>Dr. Gerson: Detoxification protocol with raw juices and vegetables and coffee enemas in order to expel toxins accumulated from (dissolved tumor masses). The process is that the tumor is caught in the liver and released in the bile and exits through the kidney.The long dietary program of low-sodium and high potassium foods assisting with Tubercolosis, chronic diseases, asthma, arthritis, diabetes, heart conditions, and many cancers.</td>
              </tr>
            </Collapsible>
            <Collapsible trigger={<th className="collapsible-title">Benefits of Water Detox</th>}>
              <tr>
                <td>Aids in digestion</td>
              </tr>
              <tr>
                <td>Improves circulation</td>
              </tr>
              <tr>
                <td>Relieves constipation</td>
              </tr>
              <tr>
                <td>Reduces inflammation</td>
              </tr>
              <tr>
                <td>Reduces Sugar cravings</td>
              </tr>
              <tr>
                <td>Boosts energy levels</td>
              </tr>
             
            </Collapsible>
          </tbody>
        </table>
       
      </div>
      <div className="collapsible">

      </div>
      <div><img className='FACTS' src={DETOXIMG} alt="logo" /></div>
    <br></br>
    <div className='ppr'>
      <br></br>
        <p>
        A detox cleanses the body. A water detox cleanse can flush out the body's toxins. The 3 day cleanse detox will restore your cells to ketosis. When detoxing, start with a water detox to flush toxins from the kidney and liver (not medical advice). A water detox helps the body to heal itself. Detoxification plays an integral role in Cellular regeneration and cellular rejuvenation - two components of wellness. 
         <a href='https://gerson.org/'> Cancer</a> treatments globally like the Gerson Therapy and <a href='https://drsebiscellfood.com/'>Dr. Sebi diet</a> use forms of Detoxification to cleanse the body from toxins that cause cancer. 
        </p>
        <h4>Detox Cleanse</h4>
        <p>
        Most doctors and nurses have no clue that the Flexner Report outlines the medicine they practice. The Flexner Report is the blueprint for medicine. Throughout the 1900s, small groups of doctors used detoxifications and juice fasting to fight tumors in the body. Doctors like William Koch and Max Gerson are forgotten - two men who used practices from around the world and attacked in the US. Although the food and minerals are depleted and toxic, detoxes assist in restoring the body to its optimal state. Dr. Gerson prescribed coffee enemas to rid the body of the toxins trapped in the body. The green diet plan and coffee enemas prompt the liver to open the bile ducts and rid the body of tumors and toxins. Gerson's diet protocol is not recommended in the US. Furthermore, a 1 to 3 day cleanse detox helps to fight tumors in the body.
        </p>
        <p>
        Dr. Sebi found that disease does not exist in a non-acidic environment. Due to the foods we consume, non-alkaline foods guide the body toward acidity. Dr. Sebi, using plants, vegetables, and detoxifications - cured over 500 cancer cases. Dr. Sebi, like other herbalists, was heavily maligned for his work with detoxification. Dr. Andrew Ivy's medical practice focused on using herbs and detoxification to rid the body of tumors. "Optimal health requires the body's biological systems must be in homeostasis with all environmental stressors". Detoxification is a "reset button" enabling the body to reset and begin the healing process.
        </p>

    </div>
    </div>
    
  )
}

export default Info3