import React from 'react'
import IndexBody from './SuperAdminBodies/IndexBody'
import './Body.css'
const Body=(props)=> {
  console.log('Props recieving at the body is ',props.parentAddress);
  return (
    <div className='container-fluid m-0 p-0 dashboardMainBox'>
     <IndexBody data={props}></IndexBody>
    </div>
  )
}

export default Body