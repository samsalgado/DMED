import '../App.css';
import Info1 from '../info/info1';
import Topbar from './topbar';
import Footer from '../footer';
import { Helmet } from 'react-helmet'; // Import Helmet
export function Acupuncture() {

    return(
        <div>
        <Helmet>  {/* Add Helmet component */}
        <title>Dry Needling vs Acupuncture        </title>  
        <meta name="description" content="Dry Needling vs Acupuncture: Explore the differences and find the right approach for your pain relief needs. Learn more about these alternative therapies." />
      </Helmet>

            <header>
            <Topbar />
            </header>
            <Info1 />
            <footer>
                <Footer />
            </footer>
        </div>
    )
    }


