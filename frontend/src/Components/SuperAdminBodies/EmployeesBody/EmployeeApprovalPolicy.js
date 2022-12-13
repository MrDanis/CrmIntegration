import React from 'react'
import CommonComponentTwo from '../AccountingBody/CommonComponents/CommonComponentTwo';
import CommonComponentThree from '../AccountingBody/CommonComponents/CommonComponentThree';
import {Link} from 'react-router-dom'
import {BiEnvelope,BiArrowBack} from "react-icons/bi";
import '../../Body.css'
const EmployeeApprovalPolicy = (props) => {
  return (
    <div className='row p-2 m-0'>
    <div className='col-12 bg-dark py-2 d-flex clearfix subpageTitleHeading'>
     <div className='row w-100 m-0 p-0'> 
      <div className='col-12 m-0 p-2 bg-dark text-light d-flex flex-row'>
       
       <p className='d-flex align-items-center justify-content-center'>
           <Link className='m-0 p-0 text-decoration-none text-light' to={'/Employees/Approvals'}>
             <BiArrowBack className='mx-2 m-0 p-1 fs-4 rounded-circle shadow backToParent'></BiArrowBack>
           </Link>
           <h1 className='m-0 p-0 sabpageheading flex-start'> 
                Proposal Template for Ever Technologies LTD
           </h1>
         </p>
       </div>
    </div>
   </div>
   <div className='col-12 bg-dark px-1 py-2 m-0 p-0 d-flex justify-content-end align-items-center'>
        {/* Common Component two start from here */}
         <button className='d-none btn btn-primary rounded-pill text-light d-flex align-items-center justify-content-center'>
           <BiEnvelope></BiEnvelope><span className='mx-1 m-0 p-0'>Invite</span>
         </button>
         <CommonComponentTwo data='#' text='Add'></CommonComponentTwo>  
        {/* Common Component two ends here */}
   </div>
       <div className='col-12 m-0 p-0'>
         <div className='row mt-2 m-0 p-0'>
           <div className='col-6 m-0 px-3 p-2 bg-dark rounded' >
              <p className='text-muted m-0 p-0 fs-6'>Name</p>
           </div>
           <div className='col-6 m-0 px-3 p-2 bg-dark rounded'>
           <p className='text-muted m-0 p-0 fs-6'>Discription</p>
           </div>
           <div className='col-12 bg-dark m-0 p-2'>
              <div className='w-50 m-0 p-0'>
               <input style={{backgroundColor:'#1c1c1c',borderRadius:'.5rem'}} placeholder='Name' className='w-100 m-0 p-2 text-muted border-0 outline-none shadow'></input>
              </div>
           </div>
           <div className='col-6 m-0 px-3 p-2 bg-dark text-light rounded'>
           <p className='text-muted m-0 p-0 fs-6'>Default Approval Policy</p>
           </div>
           <div className='col-6 m-0 px-3 p-2 bg-dark rounded'>
           <p className='text-muted m-0 p-0 fs-6'>Default Approval Policy</p>
           </div> 
         </div>
      </div>
   </div>
  )
}

export default EmployeeApprovalPolicy