import '../App.css';
import Topbar from './topbar';
import Info from '../info/info';
import Footer from '../footer';
import { Button } from 'react-bootstrap';

import { Helmet } from'react-helmet'; // Import Helmet
export function Home() {
    const whitepaperUrl = "https://drive.google.com/file/d/18TjsAeWUop5FVIZzert0GhrXI64HVrQM/view?usp=sharing"; // Update with your actual URL

    return (
        <>
        <Helmet>  
        <title>Decent Med</title>  
        <meta name="description" content="Decent Med: explore a holistic approach to healthcare! We focus on natural healing and wellness practices that address the mind, body, and spirit. Learn more about holistic medicine and its benefits." />
      </Helmet>

        <header>
        <Topbar />
        </header>

            <Info />
       <br></br>
        <footer>
            <Footer />
        </footer>
    </>
    )
}
