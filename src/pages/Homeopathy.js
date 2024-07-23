import "../App.css";
import Topbar from "./topbar";
import Footer from '../footer';
import Homeo from "../info/homeopathypg";
import LOGO from '../images copy/LOGO.png';
import { Helmet } from 'react-helmet'; // Import Helmet
export function Homeopathy() {
    return( 
    <div>
        <Helmet>  {/* Add Helmet component */}
        <title>Homeopathy Near Me</title>  
        <meta name="description" content="When searching homeopathy near me, remember that the body has an immense regenerative potential to heal itself. Find a homeopathic practitioner near you! Explore how homeopathy can support your body's natural healing potential. Learn more about homeopathy and its benefits." />
      </Helmet>
        <header>
            <Topbar />
        </header>
        <Homeo />
        <footer>
            <Footer />
        </footer>
    </div>
    )
}

