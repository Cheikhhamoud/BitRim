import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useFetch from 'use-http';
import { useDispatch} from "react-redux";
import {useLocalStorage} from "react-use-storage";
import { loginAction } from '../../actions/user.actions';

function Login() {
  const {post,response} = useFetch('http://localhost:3000')

  const dispatch = useDispatch();

  const [isLogin, setIsLogin, removeIsLogin] = useLocalStorage("isLogin", false);
  const [userId, setUserId, removeUserId] = useLocalStorage("userId", '');
  
  const [formData, setFormData] = useState({email:"",password:""});
  const handleChange = ( {target} ) =>{
    setFormData({...formData,[target.name]:target.value})
  };
  
  const handleSubmit= (e)=>{
    e.preventDefault();
    dispatch(loginAction(formData))

    // async () => {
    //   const login = await post('/register/login',{
  
    //   })
    //   if (login.ok){

    //   setIsLogin(true)
    //   window.location= '/'
    //   setUserId(login._id)
      
    //    }
    //   }
 
  }

  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')


  return (
    <>

      <div className=" mx-5">
   
          <div className="col-lg-10 col-xl-9 ">
            <div className=" flex-row my-5 border-0 shadow rounded-3 overflow-hidden">
        
              <div className="card-body p-4 p-sm-5">
                <h2 className="fw-bold fs-4">Se connecter</h2>

             
                  <div className="form-floating mb-3 w-50 border border-black">
                    <input type="email" className="form-control "
                  name='email'
                   value ={formData.email}
                      onChange={handleChange}
                      placeholder="email" required />
                    <label htmlFor="floatingInputUsername" >e-mail</label>
                  </div>

                  <div className="form-floating mb-3 w-50">
                    <input type="password" className="form-control "
                     
                      placeholder="Password"
                      name='password'
                       value ={formData.password}
                      onChange={handleChange}
                    />
                    <label htmlFor="floatingPassword">Mot de passe</label>
                  </div>
                  <div className=" mb-2">
                    <button className="btn btn-md btn-primary  fw-bold text-uppercase"
                     onClick={handleSubmit }
                    >Login</button>
                  </div>
               
                <div className="my-3 "><Link  to="/signin">Mot de passe oublié ?</Link>  </div> 
                <div className="mt-5 "><span>Nouveau sur Bitrim? </span><Link  to="/signin">Inscrivez-vous maintenant!</Link>  </div> 

                <hr className="my-4" />
              </div>
            </div>
          </div>
      
      </div>



    </>
  )
}

export default Login