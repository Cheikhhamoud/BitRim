import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useFetch from 'use-http'
import { useForm  } from 'react-hook-form';
function Registration() {
  
    const {post,response,get } = useFetch('http://localhost:3000')
  // const FORM_ENDPOINT = "http://localhost:8000/register"

  const {handleSubmit,register,formState:{error}}= useForm();
  const onSubmit =  (data) => {
   fetch("/register", {
      method: 'POST',           
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
    })
    console.log(data)
  }
  
  // const [name ,setName]= useState('')
  // const [email ,setEmail]= useState('')
  // const [password ,setPassword]= useState('')
  // const [message ,setMessage]= useState('')

    return (
        <>
  <div className="container">
    <div className="row">
      <div className="col-lg-10 col-xl-9 mx-auto">
        <div className="card flex-row my-5 border-0 shadow rounded-3 overflow-hidden">
          <div className="card-img-left d-none d-md-flex">
            
          </div>
          <div className="card-body p-4 p-sm-5">
            <h5 className="card-title text-center mb-5 fw-bold fs-3">Register</h5>
          <form onSubmit={handleSubmit(onSubmit)} >


              <div className="form-floating mb-3">
                <input type="text" 
                className="form-control" 
                  placeholder="myusername" autoFocus
                  {...register("name")}
                // onChange={(e)=>{ setName(e.target.value)}}
                 />
                <label htmlFor="floatingInputUsername" >Username</label>
              </div>

              <div className="form-floating mb-3">
                <input type="email" className="form-control" 
                 
                   placeholder="name@example.com" 
                   {...register("email", { required: true })}
                  //  onChange={(e)=> {setEmail(e.target.value) }}    
                   />
                  
                <label htmlFor="floatingInputEmail">Email address</label>
              </div>

              <hr/>

              <div className="form-floating mb-3">
                <input type="password"
                 className="form-control" 
                 placeholder="Password" 
                 {...register("password")}
                //  onChange={(e)=>{ setPassword(e.target.value)}}
                 />
                <label htmlFor="floatingPassword">Password</label>
              </div>

            

              <div className="d-grid mb-2">
                <button className="btn btn-lg btn-primary btn-login fw-bold text-uppercase" 

                    // onClick={ async () => {
                    // const registration = await post('/register',{
                    // name, 
                    // email,
                    // password,  
                    // })
                    // setMessage(registration.msg)
                    // if (registration.ok)
                    // {  window.location= '/login'
                    
                    //  }
                    // }}
                
                >Register</button>
              </div>
            

              <Link className="d-block text-center mt-2 small" to='/login'>Have an account? Sign In</Link>

              <hr className="my-4"/>

          </form>
          </div>
        </div>
      </div>
    </div>
  </div>

</>
    )
}

export default Registration