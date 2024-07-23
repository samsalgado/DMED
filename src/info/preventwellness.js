import React from 'react'
import TELE from '../images copy/TELE.png'
import { useState } from 'react'; // For managing collapsible state
import preventchart from '../images copy/prevemt.png';
import Collapsible from 'react-collapsible';
import "./prevent.css";
const PreventWellness = () => {

  return (
    
    <div className='thecontainer'>
      <div className="title-container">
        <h1>Preventive Wellness</h1>
      </div>
      <div className="collapsible">

      </div>
      <img src={preventchart} className="chart" alt="logo" />

    <br></br>
    <div className='pr'>
      <p>
      Disease deteriorates people over time. For instance, Parkinson's reduced my grandmother to trembling, hunched over without uttering a word. African Americans are 3x more likely to to die from asthma than whites. Medicine has used black bodies without consent. As distrust of Organized Medicine intensifies people need to understand Prevention.
        </p>
        <p>
        The body has an immense regenerative potential to heal itself. "Let thy food be medicine, and thy medicine be food", Hippocrates, this quote illustrates that fighting disease begins with food. Prevention starts with eating foods that boost the immune system. Consumption of antioxidants like Polyphenols or Beta Carotene assists the immune system in fighting disease before they arrive. Renowed healers, Dr. Sebi and Dr. Gerson found that a mixture of a plant-based diet and detoxification aids in fighting cancer. 
        </p>
        <h4>Cellular Regeneration</h4>
        <p>
         A detox cleanses the body. A water detox is a way to flush out the body's toxins. A water detox ranges from 1-3 days to restore the cells to ketosis. Furthermore, when detoxing, start with a water detox to flush toxins from the kidney and liver (not medical advice). A water detox helps the body to heal itself. Detoxification plays an integral role in Cellular regeneration and cellular rejuvenation - two components of wellness. 
         <a href='https://gerson.org/'> Cancer</a> treatments globally like the Gerson Therapy and <a href='https://drsebiscellfood.com/'>Dr. Sebi diet</a> use forms of Green Diets and Detoxification to cleanse the body from toxins that cause cancer. 
        </p>
        <p>
            All people have innate healing powers. Effective healing addresses all aspects of a person's life. Preventive wellness is a state of health characterized by a positive emotional state of mind. The smallest ailment can effect you internally and externally, ruining your mood for the day. 
        </p>
        <h4>Plants for Wellness</h4>
        <p>
          Supermarkets have more chemicals than a chemistry lab. Avoid soybean, and other oils that build up toxins in the body. Every pill begins with a plant. Plants, however, are cleaner and do not have the side effects that pills bring. Plants are not addictive, working with the body to initiate healing. Preventive wellness helps people live their optimal lives. 
        Throughout history, diets have played an integral role in healing. For instance, Dr. Charles Peres used a 
        a vegetarian macrobiotic diet to put his cancer into remission. Alternative therapies are not well-funded, rather, they 
        are heavily maligned for using plants to help the body heal itself. Furthermore, Dr. Bill McAnnally used Aloe Vera juice to improve symptoms in his AIDS patients. His discovery of "acemannan" assisted patients with AIDS. 

        </p>
        <h4>How does the world get cheaper and less invasive healthcare?</h4>
        <p>
            It starts with a diet rich in antioxidants and vitamins. Food is medicine, their is more benefit from the plant than the supplement. Second, utilize plants instead of pills 
            to work in conjunction with the body instead of being reliant on pills. An estimated 30 million Americans do not have access to health insurance. Preventive wellness, plants as medicine, and holistic care provide a distinct level of healthcare that keeps the body healthy instead of constantly sick.
        </p>
    </div>
    <table className="collapsibles-table">
          <tbody> 
          <Collapsible trigger={<th className="collapsible-title">Best Vitamins & Antioxidants for Health</th>}>
              <tr>
                <td> Vitamin C, Vitamin D, B Complex Vitamin</td>
              </tr>
              <tr>
                <td>Glutamine, CoQ10, Omega 3, Selenium</td>
              </tr>
            </Collapsible>
            
            <Collapsible trigger={<th className="collapsible-title">Benefits of Preventive Wellness</th>}>
              <tr>
                <td>Make well-informed lifestyle choices</td>
              </tr>
              <tr>
                <td>Detect early and better manage diseases</td>
              </tr>
              <tr>
                <td>Avoid expensive treatments</td>
              </tr>

            </Collapsible>
          </tbody>
        </table>

    </div>
    
  )
}
export default PreventWellness