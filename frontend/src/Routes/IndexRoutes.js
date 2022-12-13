import React, { useState,useEffect } from 'react'
import SuperAdminRoutes from './SuperAdminRoutes'
import AdminRoutes from './AdminRoutes'
import StafRoutes from './StafRoutes'
import PublicRoutes from './PublicRoutes'
import { useSelector} from 'react-redux'
// import {Login,Logout} from '../Features/UserClice'
const IndexRoutes = () => {

    const { isLogin,userRole } = useSelector((state) => state.authUser)
  // console.log('Login status of the user is : ',isLogin); 
  useEffect(()=>{
    console.log(userRole,isLogin);
   
    // let user = localStorage.getItem('userRole')
    // console.log(user);
    // setuserRole(user);
  },[userRole,isLogin])
  return (
    <>
   
     {userRole === 'Super Admin' ? <SuperAdminRoutes></SuperAdminRoutes>:null}
     {userRole === 'Admin' && isLogin=== true ?<AdminRoutes></AdminRoutes>:null}
     {userRole === 'Staff'&& isLogin=== true ?<StafRoutes></StafRoutes>:null}
     {userRole === 'Public' && isLogin=== false ?<><PublicRoutes></PublicRoutes></>:null}
     {/* {userRole === 'Public' && isLogin === false ?<h1>idr hi issue hai</h1>:userRole === 'Public' && isLogin === false?<PublicRoutes></PublicRoutes>:null} */}
    </>
  
  )
}

export default IndexRoutes