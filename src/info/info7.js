import React from 'react'
import Collapsible from 'react-collapsible';
import Offer from '../offers/offer';
import './Info7.css';
const Info7 = () => {

  return (
    
    <div className='container'>
      <div className="title-container">
        <table className="collapsibles-table">
          <tbody> 
          <Collapsible trigger={<th className="collapsible-title">Benefits of Joining Telehealth Directory</th>}>
              <tr>
                <td>Access to Patient Database</td>
              </tr>
              <tr>
              <td>Live Digital Business Card</td>
              </tr>
              <tr>
                <td>Access to Admin Permissions in Mobile and Web App</td>
              </tr>
            </Collapsible>
            <Collapsible trigger={<th className="collapsible-title">Elements of Directory</th>}>
              <tr>
                <td>Subscription Service providing Telehealth Directory via Web App and Mobile App</td>
                <td>Subscribers will have Admin Permissions and access to Telehealth Database in mobile app</td>
              </tr>
            </Collapsible>

            <Collapsible trigger={<th className="collapsible-title">Join Telehealth Directory</th>}>
            <Offer />
            </Collapsible>
          </tbody>
        </table>
       
      </div>
      <div className="collapsible">

      </div>
      
   <iframe width="100%" height="450px" src="https://www.youtube.com/embed/ZGbdyBU5mQI?si=LwqxZST18v8517dJ"  title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

    <br></br>
    <div className='parc'>
    <h4>Attention Holistic Practitioners</h4>
    <p>
    Welcome to Decent Med: the showcase of Functional Medicine and its revolutionary impact on the lives of billions. Moreover, notice that some of the pages on the website are not robust with information - this is by design. This platform is your canvas. I want beneficial and relevant information from practitioners experienced in the field. This platform gives industry experts a voice to patients globally, and grow their practice in a new streamlined manner.
    </p>
      <p>
      This platform educates on wellness, providing you access to more patients worldwide. We use innovative tactics to bring more patients to your site. This platform is a global Telehealth Directory.       Furthermore, this is the new standard in healthcare post-pandemic.

      Telehealth, an innovative way to connect patients with providers no matter where you are in the world. 
       Healthcare Finance says, “Telehealth is expected to drive $29 billion in healthcare services in 2020”(Healthcare Finance).
      </p>
      <h4>The Process</h4>
      <p>
      Conversely, this Directory showcases wellness practitioners. The images above are the practices(more to come) showcased on this application.
       The images above are links to webpages showcasing your digital business card(built by us or you). Practitioners will add additional content to the informational pages on the website. This site will be a backlink service highlighting both written and video content from practitioners worldwide.  
        </p>
        <p>
        This Telehealth Directory is different, built upon a custom Bitcoin Lightning Node. Bitcoin is freedom, ensuring that the content and payment networks are secure.  
         The practitioners showcased in the Directory lay the groundwork for what the application evolves into. This project is adaptive, providing social network capablities for practitioners around the world to showcase their work. Decent Med is open source science, we will change the world together.
        </p>

    </div>
    </div>
    
  )
}

export default Info7