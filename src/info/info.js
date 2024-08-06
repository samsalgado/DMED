import React from 'react'
import TELE from '../images copy/TELE.png'
import "./Info.css";
import { Button } from'react-bootstrap';

import Collapsible from 'react-collapsible';
const Info = () => {
  const whitepaperUrl = "https://drive.google.com/file/d/18TjsAeWUop5FVIZzert0GhrXI64HVrQM/view?usp=sharing"; // Update with your actual URL

  return (
    
    <div className='container'>
              <h1>Decent Med</h1>
              <Button  variant="primary" size="sm" href={whitepaperUrl} target="_blank" rel="noopener noreferrer">
        Read Whitepaper
      </Button> 

      <div className="title-container">
        <table className="collapsibles-table">
          <tbody> 
          <Collapsible trigger={<th className="collapsible-title">Healthcare Realities</th>}>
              <tr>
                <td>Estimated $455 billion spent on healthcare yearly is lost each year to fraud and corruption.</td>
              </tr>
              <tr>
                <td>45% of global citizens believe the healthcare sector is corrupt or very corrupt.</td>
              </tr>
            </Collapsible>
            <Collapsible trigger={<th className="collapsible-title">Obesity Statistics</th>}>
              <tr>
                <td>1/3 Adults in the United States are obese.</td>
              </tr>
              <tr>
                <td>32.5% of American adults are overweight, obesity is linked to at least 60 chronic diseases.</td>
              </tr>
              <tr>
                <td>Obesity affects 1/6 children in the United States. Obesity costs Americans an estimated $147 billion a year.</td>
              </tr>
            </Collapsible>
            <Collapsible trigger={<th className="collapsible-title">Water and Degenerative Disease</th>}>
              <tr>
                <td>Our current water supply is processed and does not hydrate, because the molecules are too big for capillaries.</td>
              </tr>
              <tr>
                <td>Blood is 83% water, we need access to charged water, or electrically/sunlight charged water.</td>
              </tr>
              <tr>
                <td>The 3 leading causes of degenerative disease: oxidized stress, dehydration, and acidity.</td>
              </tr>
            </Collapsible>
          </tbody>
        </table>
       
      </div>
      <div className="collapsible">

      </div>
      <div><img src={TELE} className="TELE" alt="logo" /></div>
    <br></br>
    <div className='pr'>
      <p>
      Have you ever wondered how people used to live healthier and longer lives?
Before traditional medicine, there was wellness. Our ancestors experienced vitality - living off the land.
      
 This decade has uncovered the hidden truth about traditional healthcare. Medicine is not about surviving; it is about wellness. Medicine should cure sometimes, relieve often, and comfort always. Our goal is to promote vitality. We are personally and professionally invested in the re-emergence of regenerative medicine and broadening access to revolutionary therapies. 
 Treatments like homeopathy operate on the belief that the body can heal via plants and minerals to stimulate the healing process. 
        </p>
        <p>
        As distrust of Organized Medicine continues to grow globally, we recognize a reawakening of the immense regenerative potential of the human body. The people's interest in "alternatives" is exploding! In the age of open source and spirit of collaboration, we are developing a broad network of reputable and ethical clinicians, dieticians, and practitioners across the alternative spectrum: Acupuncture, Regenerative Medicine, Chiropractic, Nutrition, Chelation, Homeopathy, Ayurveda, and so much more. 
        </p>
        <h4>Monetization of Medicine</h4>
        <p>
        Why is there no cure for cancer? Why is obesity and prescription overdose only getting worse? Is profit worth life? Promoting wellness begins with education. The current system monetizes medicine, conversely, treatments deemed alternatives, are cheaper and heavily used in the healthiest nations in the world. The body has an immense regenerative potential to heal itself, but when fighting itself, it's hard for the body to heal itself. Prevention is the initial step, eating a diet high in fruits and vegetables provides the essential antioxidants and nutrients to prevent disease. Pairing a "green" diet with exercise goes a long way in preventing a trip to the doctor.
        </p>
        <p>
        A detox cleanses the body. A water detox is a way to flush out the body's toxins. A water detox ranges from 1-3 days and restores the cells into ketosis. Furthermore, start with a water detox to flush toxins from the kidney and liver (not medical advice). A water detox helps the body to heal itself. Detoxification plays an integral role in Cellular regeneration and cellular rejuvenation - two components of wellness.
         <a href='https://gerson.org/'> Cancer</a> treatments globally like the Gerson Therapy and <a href='https://drsebiscellfood.com/'>Dr. Sebi diet</a> use forms of Detoxification to cleanse the body from toxins that cause cancer. 
        </p>
        <p>
        Why are countries with smaller healthcare budgets than the U.S. have healthier people? 
 Because they strive for alternatives to pills, using elements of Traditional Chinese Medicine (TCM) like Acupuncture or Ayurveda. The healthiest people in the world utilize functional medicine for peak performance. Aaron Rodgers (NFL Quarterback) has gone on record highlighting the benefits of <a href='https://www.packersnews.com/story/sports/nfl/packers/2022/02/22/aaron-rodgers-cleanse-12-day-panchakarma-pat-mcafee-show-tuesday-february-22-2022/6895971001/'>Ayurveda(Panchakarma cleanse)</a>. Stars like Kobe Bryant, Peyton Manning, Ryan Tannehill, Desean Jackson, and Jamaal Charles (among others) have all used Stem Cell Therapy for ailments.

        </p>
        <h4>Showcasing Holistic Medicine</h4>
        <p>
        Supermarkets have more chemicals than a chemistry lab. Understanding nutrition goes a long way in fighting disease. Conversely, nutrition fights obesity, and Chiropractic care fights against pain and dispels opioid usage. 
 The number one cause of death in America is heart disease. Chelation Therapy (a practice most have never heard of) is a less invasive preventive measure for stable and unstable plaque. Chelation Therapy removes toxic metals from the bloodstream via EDTA.
 Thus, improving 
 circulation, enhancing the immune system and inhibiting the creation of "free radicals".
 The most essential element of wellness is education. This platform is a canvas for holistic providers to showcase their expertise and educate the public on how to tap into wellness.
        </p>

    </div>
    </div>
    
  )
}

export default Info