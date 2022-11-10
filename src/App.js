
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import About from './pages/About/About';
import { Nav, Footer } from './sections/index';
import Tokens from './sections/suppordetTokens/supportedTokens';
import { Home } from './pages';
import { HowWorks } from './sections/howitswork/HowWorks';
import { Whatsapp } from './components/Whatsapp';




function App() {
  return (



    <Router>
      <Whatsapp />
      <Nav />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/works" element={<HowWorks />} />
        <Route path="about" element={<About />} />
        <Route path="tokens" element={<Tokens />} />



      </Routes>
      <Footer />

    </Router>


  );
}

export default App;
