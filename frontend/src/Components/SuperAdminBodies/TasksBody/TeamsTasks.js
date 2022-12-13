import React from 'react'
import CommonComponentTwo from '../AccountingBody/CommonComponents/CommonComponentTwo'
import CommonComponentThree from '../AccountingBody/CommonComponents/CommonComponentThree'
const TeamsTasks = (props) => {
  return (
    <div className='row p-2 m-0'>
      <div className='col-12 my-0 m-0 p-2 rounded-top bg-dark'>
       <h1 className='sabpageheading float-start'>{props.data} for Ever Technologies <span className='fw-normal'>LTD</span></h1>
      </div>
      <div className='col-12 m-0 p-2 bg-dark'>
         <div className='row mx-3 m-0 p-0'>
            <div className='col-12 px-1 py-2 m-0 p-0 d-flex justify-content-end align-items-center'>
              <CommonComponentTwo data='/Sales/Purposals/Template/Register' text='Add'></CommonComponentTwo>     
            </div>
         </div>
      </div>
      <div className='col-12 m-0 p-2 shadow'> 
       <div className='col-12 m-0 px-2 p-0 '>
          <CommonComponentThree></CommonComponentThree>
        </div>
       </div>    
    </div>
  )
}

export default TeamsTasks