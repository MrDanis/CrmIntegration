import React from 'react'
import CommonComponentTwo from '../CommonComponents/CommonComponentTwo'
import CommonComponentThree from '../CommonComponents/CommonComponentThree'
import '../../../Body'
const AccountingPayments = (props) => {
  return (
    <div className='container-fluid m-0 p-2 '>
     <div className='row m-0 p-0'>
        <div className='col-12 m-0 p-2 bg-dark text-light d-flex flex-row'>
        <h1 className='sabpageheading flex-start'>{props.data}  for Ever Technologies <span className='fw-normal'>LTD</span></h1>
        </div>
        <div className='col-6 m-0 p-0 bg-dark px-1 py-2  d-flex justify-content-end align-items-center'>
        </div>
        <div className='col-6 bg-dark px-1 py-2 m-0 p-0 d-flex justify-content-end align-items-center'>
          <CommonComponentTwo data='/Accounting/Estimate/Recirved' text='Add'></CommonComponentTwo>     
        </div>
        <div className='col-12 m-0 p-0'>
          <CommonComponentThree></CommonComponentThree>  
        </div>   
     </div>
    </div>
  )
}

export default AccountingPayments