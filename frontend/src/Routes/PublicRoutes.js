import React, { useEffect } from 'react'
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import AuthenticaionScreen from '../Screens/Public/AuthenticaionScreen';
import { useSelector} from 'react-redux';

const PublicRoutes = () => {
  const { isLogin,userRole } = useSelector((state) => state.authUser)
  useEffect(()=>{
    console.log('Is login in the public routes is : ',isLogin);
    console.log('User Role in the public routes is : ',userRole);
    
  },[])
  return (
    // <h1>
    //   Public Routes are working
    // </h1>
    // <>
    // <Router>
    //  <Routes>
    //   <Route path='/' element={<AuthenticaionScreen data='Login'></AuthenticaionScreen>}></Route>
    //   <Route path='/Authentication/Register' element={<AuthenticaionScreen data='Register'></AuthenticaionScreen>}></Route>
    //   <Route path='/Authentication/ForgotPassword' element={<AuthenticaionScreen data='ForgotPassword'></AuthenticaionScreen>}></Route>
    //   </Routes>
    // </Router>
    // </>
    <>
    <Router>
     <Routes>
      <Route exact path='/' element={<AuthenticaionScreen data='Login'></AuthenticaionScreen>}></Route>
      {/* <Route path='/Authentication/Register' element={<AuthenticaionScreen data='Register'></AuthenticaionScreen>}></Route>
      <Route path='/Authentication/ForgotPassword' element={<AuthenticaionScreen data='ForgotPassword'></AuthenticaionScreen>}></Route> */}
      </Routes>
    </Router>
    </>
  )
}

export default PublicRoutes