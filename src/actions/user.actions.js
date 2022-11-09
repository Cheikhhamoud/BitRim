import { loginFailure, loginRequest, loginSucces } from "../slices/userSlice";
import axiosIntance from "../utils/axios";


export const loginAction = (userData)=>{

    return async (dispatch)=>{

        dispatch(loginRequest());
        try {
          const res = await axiosIntance.post('register/login',userData);
          
          dispatch(loginSucces(res.data));
        } catch (error) {
            console.log(error)
          dispatch(loginFailure(error.response.data.message));
         
        }
      
            
    };
}