import React from 'react';
import { Link } from 'react-router-dom'
import logo2 from '../../assets/logo2.png';
import {useLocalStorage} from "react-use-storage";
function Nav() {

  const [isLogin, setIsLogin, removeIsLogin] = useLocalStorage("isLogin", false);
  return (
    <>

      <nav className="navbar navbar-expand-lg  shadow-sm ">

        <div className="container">
          <Link to="/" className="navbar-brand"><img className=""  width="250px" alt='hero' src={logo2} /></Link>

          <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler"><span className="navbar-toggler-icon"></span>
          </button>
      

          <div id="navbarSupportedContent" className="collapse navbar-collapse  justify-content-end">


   
           
    
           <div className="">
           <Link className="btn btn-outline-primary btn-lg" to="/login"> Se connecter </Link>
            <Link className="btn btn-primary btn-lg mx-3 " to="/signin">Inscrivez-vous </Link>
            </div> 
            
          </div>
        
        </div>
      </nav>

    </>
  )
}

export default Nav