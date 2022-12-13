import React from 'react'
import Styles from '../../Assets/Styles/GlobalStyle'
import Sidebar from '../../Components/Sidebar'
import AdminDashboardHeader from '../../Components/AdminDashboardHeader'
import Body from '../../Components/Body'
import '../../App.css'
const SuperAdminDashboardScreen=(props)=> {
  return (
    <div className='container-fluid m-0 p-0'>
     <div className='row m-0 p-0'>
        <div className=' col-md-3 col-lg-3 m-0 p-0'> 
        <Sidebar></Sidebar>
        </div>
        <div className='col-md-9 col-lg-9 m-0 p-0 bg-dark adminDashboardBody'>
        <div className='container-fluid m-0 p-0' style={{backgroundColor:Styles.themeLightDarkColor,color:Styles.themeLightColor}}>
           <div className='row m-0 p-3'>
               <div className='col-12 m-0 p-0 '>
                 <AdminDashboardHeader></AdminDashboardHeader>
               </div> 
               <div className='col-12 m-0 p-0'>
                <Body parentAddress={props}></Body>   
               </div> 
           </div>
        </div> 
        </div>
     </div>
    </div>
  )
}

export default SuperAdminDashboardScreen