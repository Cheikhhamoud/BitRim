import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  isAuth: false,
  userDate: null,
  loading: false,
  message: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginRequest: (state) => {
        return {...state,
            isAuth: false,
            userDate: null,
            loading: true,
            message: null,
        
        };
    },
    loginSucces: (state,action) => {
        return {...state,
            isAuth: true,
            userDate: action.payload,
            loading: false,
          
        
        };
    },
    loginFailure: (state,action) => {
        return {
            ...state,
            isAuth: false,
            message: action.payload,
            loading: false,
        
        };
    },
  },
})

// Action creators are generated for each case reducer function
export const { loginRequest, loginSucces,loginFailure} = userSlice.actions

export default userSlice.reducer