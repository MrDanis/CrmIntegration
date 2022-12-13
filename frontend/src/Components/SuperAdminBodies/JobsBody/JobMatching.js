import React from 'react'
import CommonMatching from '../AccountingBody/CommonComponents/CommonMatching'
import '../../Body.css'
const JobMatching = (props) => {
  return (
    <div className='row p-2 m-0'>
    <div className='col-12 bg-dark py-2 d-flex clearfix subpageTitleHeading'>
     <div className='row w-100 m-0 p-0 d-flex flex-column'> 
      <div className='col-10 m-0 p-0'>
       <h1 className='sabpageheading flex-start'>
        Configure Employees to Jobs {props.data} <span className='fw-normal'>LTD</span></h1>
      </div>
      <CommonMatching class='col-6 p-2 m-0' title='Source' menu={['upwork','web']}></CommonMatching>
      <CommonMatching class='col-6 p-2 m-0' title='Preset' menu={['Preset','no item found']}></CommonMatching>
     </div>
    </div>
    </div>
  )
}

export default JobMatching