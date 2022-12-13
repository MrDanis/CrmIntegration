import React from 'react'
import CommonComponentTwo from '../AccountingBody/CommonComponents/CommonComponentTwo';
import CommonComponentThree from '../AccountingBody/CommonComponents/CommonComponentThree';
import {Link} from 'react-router-dom';
import { BiArrowBack} from "react-icons/bi";
import '../../Body.css'
const EmployeesmanageInvites = (props) => {
  return (
    <div className='row p-2 m-0'>
        <div className='col-12 m-0 p-1 bg-dark text-light d-flex flex-row rounded'>
         <p className='d-flex align-items-center justify-content-center'>
           <Link className='m-0 p-0 text-decoration-none text-light' to={'/Employees/Manage'}>
             <BiArrowBack className='mx-2 m-0 p-1 fs-4 rounded-circle shadow backToParent'></BiArrowBack>
           </Link>
           <h1 className='m-0 p-0 sabpageheading flex-start'> 
                Proposal Template for Ever Technologies LTD
           </h1>
         </p>
      </div>
      <div className='col-12 bg-dark px-1 py-2 m-0 p-0 d-flex justify-content-end align-items-center'>
       {/* Common Component two start from here */}
          <CommonComponentTwo data='#' text='invite'></CommonComponentTwo>  
       {/* Common Component two ends here */}
    </div>
    <div className='col-12 m-0 p-0'>
           <CommonComponentThree ></CommonComponentThree>
       </div>
    </div>
  )
}

export default EmployeesmanageInvites