import React from 'react'
import CommonComponentTwo from '../AccountingBody/CommonComponents/CommonComponentTwo';
import CommonComponentThree from '../AccountingBody/CommonComponents/CommonComponentThree';
import {Link} from 'react-router-dom'
import {BiEnvelope} from "react-icons/bi";
import '../../Body.css'
const EmployeeApprovals = (props) => {
  return (
    <div className='row p-2 m-0'>
    <div className='col-12 bg-dark py-2 d-flex clearfix subpageTitleHeading'>
     <div className='row w-100 m-0 p-0'> 
      <div className='col-12 m-0 p-2 bg-dark text-light d-flex flex-row'>
       <div className='w-75'>
       <h1 className='sabpageheading flex-start'>{props.data} Request for Ever Technologies <span className='fw-normal'>LTD</span></h1>
       </div>
       <div className='w-50 d-flex justify-content-end'>
       <Link to={'/Employees/Approvals/Policy'} className='text-decoration-none text-light fw-bold m-0 py-0 px-2 rounded-pill ManageComapny d-flex align-items-center justify-content-center'>
         Approval Policy
       </Link>
       </div>
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
          <CommonComponentThree ></CommonComponentThree>
      </div>
   </div>
  )
}

export default EmployeeApprovals