import React from 'react'
import { Link } from 'react-router-dom';
import { BiArrowBack } from "react-icons/bi";
import CommonEstimateForm from '../CommonComponents/CommonEstimateForm';
import CommonEstimateDiscount from '../CommonComponents/CommonEstimateDiscount';
import CommonEstimateTaxes from '../CommonComponents/CommonEstimateTaxes';
import '../../../Body.css'
// BiArrowBack
const AddEstimate = (props) => {
    console.log(props)
  return (
    <div className='container-fluid m-0 p-2 bg-dark text-light'>
     <div className='row m-0 p-0'>

       <div className='col-12 m-0 p-1 bd-dark text-light d-flex flex-row '>
       <p className='d-flex align-items-center justify-content-center'>
        <Link className='m-0 p-0 text-decoration-none text-light' to={'/Accounting/Estimate'}>
        <BiArrowBack className='mx-2 m-0 p-1 fs-4 rounded-circle shadow backToParent'></BiArrowBack>
         </Link>
         <h1 className='m-0 p-0 sabpageheading flex-start'> 
           Add Estimate
         </h1>
       </p>
       </div>
       <div className='col-12 m-0 p-1 bd-dark text-light addEstimatetius'>
         <div className='container-fluid m-0 p-0'>
           <div className='row m-0 p-0'>
            <div className='col-12 m-0 p-0 customEstimatebox text-white'>
              <div className='row m-0 p-0'>
                 <div className='col-6 m-0 p-0'>
                     <CommonEstimateForm></CommonEstimateForm>
                 </div>
                 <div className='col-6 m-0 p-0'>
                   <div className='container-fluid m-0 p-0'>
                       <div className='row m-0 p-2'>
                          <CommonEstimateDiscount></CommonEstimateDiscount>
                          <CommonEstimateTaxes></CommonEstimateTaxes>
                       </div>
                   </div>
                 </div>
              </div>    
            </div>
           </div>
         </div>   
       </div>
      <div className='col-12 m-0 py-3 p-1 d-flex flex-row bd-dark text-light'>
        <button className='m-0 py-1 p-0 d-flex align-items-center justify-content-center rounded-pill addEstimateOperation operationCancel'>Cancel</button>
        <button className='bg-dark text-secondary mx-2 m-0 py-1 p-0 d-flex align-items-center justify-content-center rounded-pill addEstimateOperation '>Save as Draft</button> 
        <button className='bg-dark text-secondary mx-2 m-0 px-2 py-1 p-0 d-flex align-items-center justify-content-center rounded-pill addEstimateOperation '>Save and send to contact in monosage</button> 
        <button className='bg-dark text-secondary mx-2 m-0 px-2 py-1 p-0 d-flex align-items-center justify-content-center rounded-pill addEstimateOperation '>Save and send via email</button> 
        {/* <button className='mx-2 m-0 p-2 d-flex align-items-center justify-content-center rounded-pill addEstimateOperation'>Save as Draft</button> 
        <button className='mx-2 m-0 p-2 d-flex align-items-center justify-content-center rounded-pill addEstimateOperation'>Save and send to contact in </button> 
        <button className='mx-2 m-0 p-2 d-flex align-items-center justify-content-center rounded-pill addEstimateOperation'>Save and send via email</button>  */}
      </div>
     </div>
      {/* Add Estimate {props.data} */}
    </div>
  )
}

export default AddEstimate