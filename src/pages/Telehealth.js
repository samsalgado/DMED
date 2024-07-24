import '../App.css';
import Topbar from './topbar';
import Directory from '../info/telelist';
import Footer from '../footer';
import Info7 from '../info/info7';
import { Helmet } from 'react-helmet'; // Import Helmet
export function Telehealth() {
    return (
        <>
                     <Helmet>  {/* Add Helmet component */}
        <title>Telehealth services</title>  
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Connect with healthcare providers virtually! Explore our Telehealth Directory to find a doctor offering online consultations. Learn more about the benefits of telehealth." />
      </Helmet>

        <header>
        <Topbar />
        </header>
        <h1 className='title'>Telehealth Directory</h1>
        <div>
        <Directory />  
        </div>
        <br></br>
        <Info7 />
        <footer>
            <Footer />
        </footer>
    </>
    )
}
