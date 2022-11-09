
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import { BrowserRouter as Router , Routes ,Route} from 'react-router-dom';
import {Home ,SignIn,Conf} from './pages/index';
// import { useSelector} from "react-redux";

import {Nav,Footer } from './sections/index';
import Login from './sections/registration/Login';




function App() {
  // const{isAuth} =useSelector((state)=>state.user)
  return ( 
  
        
   <> 
   <Router> 
      <Nav/>
      <Routes>
       
          <Route path="/" element={<Home />} />
          <Route path="signin" element={<SignIn/> } />
          <Route path="login" element={<Login/> } />
          <Route path="conf" element={<Conf/> } />
      
      </Routes>

    
     
  
      <Footer />
      </Router>
</>
  
  );
}

export default App;
