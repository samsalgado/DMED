import { Routes} from 'react-router';
import './App.css';
import { Route } from 'react-router-dom';
import { Home } from './pages/Home';
import {Prevent} from './pages/Prevent';
import { Detox } from './pages/Detox';
import {StemCell} from './pages/Stemcell';
import {NotFound} from './pages/NotFound';
import { Nutrition } from './pages/Nutrition';
import {Homeopathy} from './pages/Homeopathy';
import { Acupuncture } from './pages/Acupuncture';
import { Ayurveda } from './pages/Ayurveda';
import { Chiropractic } from './pages/Chiropractic';
import { Chelation } from './pages/Chelation';
import { Telehealth } from './pages/Telehealth';
import { Apoth } from './pages/Apoth';
function App() {

  return( 

  <Routes>
    <Route exact path="/" element={<Home />} />
    <Route path="/404" element={<NotFound />} />
    <Route path="/stemcell" element={<StemCell />}/>
    <Route path="/ayurveda" element={<Ayurveda />} />
    <Route path="/prevent" element={<Prevent />}/>
    <Route path="/detox" element={<Detox />}/>
    <Route path="/nutrition" element={<Nutrition />}/>
    <Route path="/chiropractic" element={<Chiropractic />}/>
    <Route path="/acu" element={<Acupuncture />}/>
    <Route path="/chelation" element={<Chelation />}/>
    <Route path="/homeopathy" element={<Homeopathy />} />
    <Route path="/telehealth" element={<Telehealth />} />
    <Route path="/apoth" element={<Apoth />} />

</Routes>
    
  )
}

export default App;
