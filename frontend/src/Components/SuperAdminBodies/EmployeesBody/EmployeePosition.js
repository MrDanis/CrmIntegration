import React from 'react'
import {Link} from 'react-router-dom'
import CommonLevelComponent from '../AccountingBody/CommonComponents/CommonLevelComponent';
import CommonComponentTwo from '../AccountingBody/CommonComponents/CommonComponentTwo';
import '../../Body.css'
const EmployeePosition = (props) => {
  return (
    <div className='row p-2 m-0'>
    <div className='col-12 bg-dark py-2 d-flex clearfix subpageTitleHeading'>
    <div className='row w-100 m-0 p-0'> 
     <div className='col-12 m-0 p-2 bg-dark text-light d-flex flex-row'>
      <h1 className='sabpageheading flex-start'>{props.data}  for Ever Technologies <span className='fw-normal'>LTD</span></h1>
      </div>
   </div>
  </div>
  <div className='col-12 bg-dark px-1 py-2 m-0 p-0 d-flex justify-content-end align-items-center'>
       {/* Common Component two start from here */}
        <CommonComponentTwo data='#' text='Add'></CommonComponentTwo>  
       {/* Common Component two ends here class text */}
  </div>
  <div className='col-12 bg-dark m-0 px-3 p-2 d-flex flex-column justify-content-start align-items-center addEstimatetius'>
      <CommonLevelComponent class='w-100 mb-3 m-0 p-2 rounded shadow' text='Web Software Developer'></CommonLevelComponent>
      <CommonLevelComponent class='w-100 mb-3 m-0 p-2 rounded shadow' text='CEO'></CommonLevelComponent>
      <CommonLevelComponent class='w-100 mb-3 m-0 p-2 rounded shadow' text='Team Lead'></CommonLevelComponent>
      <CommonLevelComponent class='w-100 mb-3 m-0 p-2 rounded shadow' text='Staff Engineer'></CommonLevelComponent>
      <CommonLevelComponent class='w-100 mb-3 m-0 p-2 rounded shadow' text='Junior Software Developer'></CommonLevelComponent>
      <CommonLevelComponent class='w-100 mb-3 m-0 p-2 rounded shadow' text='Senior Software Developer'></CommonLevelComponent>
      <CommonLevelComponent class='w-100 mb-3 m-0 p-2 rounded shadow' text='CTO'></CommonLevelComponent>
      <CommonLevelComponent class='w-100 mb-3 m-0 p-2 rounded shadow' text='COO'></CommonLevelComponent>
      <CommonLevelComponent class='w-100 mb-3 m-0 p-2 rounded shadow' text='Mobile Application Developer'></CommonLevelComponent>
      <CommonLevelComponent class='w-100 mb-3 m-0 p-2 rounded shadow' text='Associate Engineer'></CommonLevelComponent>
      <CommonLevelComponent class='w-100 mb-3 m-0 p-2 rounded shadow' text='Project Manager'></CommonLevelComponent>
      <CommonLevelComponent class='w-100 mb-3 m-0 p-2 rounded shadow' text='Tester'></CommonLevelComponent>  
  </div>
  </div>
  )
}

export default EmployeePosition