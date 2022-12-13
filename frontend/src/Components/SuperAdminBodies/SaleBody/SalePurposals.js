import React from 'react'
import { Link } from 'react-router-dom'
import CommonComponentTwo from '../AccountingBody/CommonComponents/CommonComponentTwo'
import CommonComponentThree from '../AccountingBody/CommonComponents/CommonComponentThree'
import '../../Body.css'
// #1a2129
const SalePurposals = (props) => {
  return (
    <div className='row m-0 p-2'>
       <div className='col-12 my-2 m-0 p-2 clearfix'>
       <h1 className='sabpageheading float-start'>{props.data} Managment Page for Ever Technologies <span className='fw-normal'>LTD</span></h1>
         <Link to={'/Sales/Purposals/Template'} className='outline-none border-none float-end btn btn-primary m-0 px-2 p-1 rounded-pill text-light'>Manage Tamplates</Link>
       </div>
       <div className='col-12 m-0 p-2 rounded bg-dark text-light-shadow'>
        {/* is sare ko ak samll component main rakhna hai baad main  */} 
          <div className='container-fluid m-0 p-0'>
            <div className='row m-0 p-2 gx-2'>
               <div className='col-6 m-0 p-0'>
                    <h5>Statistics</h5>
               </div>
               <div className='col-2 m-0 p-0'>
               <h5>Accepted Proposals: 6</h5>
               </div>
               <div className='col-2 m-0 p-0'>
               <h5>Total Proposals: 30</h5>
               </div>
               <div className='col-2 m-0 p-0'>
               <h5>Success Rate: 20 %</h5>
               </div>
            </div>
          </div>
        {/* idr sy opper tk krna  hai ak component */}
       </div>
       <div className='col-12 m-0 p-2'>
         <div className='row mx-3 m-0 p-0'>
            <div className='col-12 px-1 py-2 m-0 p-0 d-flex justify-content-end align-items-center'>
              <CommonComponentTwo data='/Sales/Purposals/Template/Register' text='Add'></CommonComponentTwo>     
            </div>
         </div>
       </div>
       <div className='col-12 m-0 p-2'>
       <div className='col-12 m-0 bg-dark px-2 p-0 '>
          <CommonComponentThree></CommonComponentThree>
        </div>
       </div>    
    </div>
  )
}

export default SalePurposals
          // <Link to={'/Sales/Purposals/Template'}>go to template</Link>
          // <Link to={'/Sales/Purposals/Template/Register'}>go to Register Tamplate</Link>