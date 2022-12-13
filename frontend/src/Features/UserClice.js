import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  isLogin: false,
  userJWTToken:'',
  // userRole:'SuperAdmin'
  userRole:localStorage.getItem('userRole')=== null?'Public':localStorage.getItem('userRole')
}
// Creating the thunk for login the register
 export const UserLogin = createAsyncThunk('user/login',async(userCredentials)=>{
  console.log('data before sending the api request is : ',userCredentials);
  debugger
  const response = await fetch('http://nodebackend.vetechapp.com/signin/admin',{
    method:"POST",
    'Content-Type':'application/json',
    body:JSON.stringify(userCredentials)
  });
  const data = await response.json();
  console.log('Data from the api is : ',data);
 })


export const authenticateUse = createSlice({
  name: 'UserAuth',
  initialState:initialState,
  reducers: {
    isLogin: (state) => {
      state.isLogin = true;
      state.userRole='SuperAdmin';
      localStorage.setItem('userRole','SuperAdmin')
    },
    Logout: (state) => {
      state.isLogin = false
      state.userRole='Public';
      localStorage.setItem('userRole','Public')
    }
  },
})

// Public Action creators are generated for each case reducer function
export const { isLogin,Logout } = authenticateUse.actions

export default authenticateUse.reducer