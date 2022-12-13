import React from 'react'
import {FaAngleDown} from 'react-icons/fa'
import '../../../Body.css'
const CommonEstimateDiscount = () => {
  return (
    <div className='conatiner-fluid mb-3 m-0 p-0'>
       <div className='row m-0 px-0 p-2 d-flex flex-column discountBox'>
          <div className='col-12 text-muted'>
           <h6 className='mb-3'>Discount</h6>
          </div>
          <div className='col-6 p-0 mx-3'>
            <small className='text-muted'>Discount value</small>
            <input className='mt-1 w-100 bg-dark text-light border-0 p-1' type={'number'} style={{borderRadius:'.35rem'}}></input>  
          </div>
          <div className='col-6 p-0 mt-2 mx-3'>
            <small className='text-muted mb-2'>Discount Type</small>
            <div className="dropdown w-100 bg-transparent mt-1 mb-1 m-0 p-0 bg-dark">
             <button className="estimateFormFeilds p-2 clearfix bg-dark btn text-muted w-100 outline-none border-none border-0" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">             
              <span className='float-start m-0 p-0'>Discount Type</span>
              <FaAngleDown className='float-end'></FaAngleDown> 
            </button>
              <ul className="dropdown-menu bg-dark text-light w-100 p-2 CurrancyRangeer border border-1 border-light" aria-labelledby="dropdownMenuButton1">
               <li>Action</li>
               <li>Another action</li>
               <li>Something else here</li>
              </ul>
             </div>
          </div>       
       </div>
    </div>
  )
}

export default CommonEstimateDiscount