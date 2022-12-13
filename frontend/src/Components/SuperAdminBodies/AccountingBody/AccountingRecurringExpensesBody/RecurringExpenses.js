import React from 'react'
import CommonComponentTwo from '../CommonComponents/CommonComponentTwo'
import CommonComponentThree from '../CommonComponents/CommonComponentThree'
import '../../../Body'
const RecurringExpenses = (props) => {
  return (
    <div className='container-fluid m-0 p-2 '>
     <div className='row m-0 p-0'>
       {/* Is k nichy ki div hai us ko future main component main convert hai */}
       <div className='col-12 m-0 p-2 bg-dark text-light'>
       <h1 className='sabpageheading flex-start'>{props.data}  for Ever Technologies <span className='fw-normal'>LTD....</span></h1>        
       </div>
       {/* Is k opper ki div hai us ko future main component main convert hai */}
       {/* Is k nichy ki div hai us ko future main component main convert hai */}
       <div className='col-6 m-0 p-0 bg-dark px-1 py-2  d-flex justify-content-end align-items-center'>
               
       </div>
      <div className='col-6 bg-dark px-1 py-0 m-0 p-0 d-flex justify-content-end align-items-center'>
        <CommonComponentTwo data='/Accounting/Estimate/Add' text='Add'></CommonComponentTwo>     
      </div>
       {/* Is k opper ki div hai us ko future main component main convert hai */}
       {/* Is k nichy ki div hai us ko future main component main convert hai */}
       <div className='col-12 m-0 p-2'>
           <CommonComponentThree ></CommonComponentThree>
       </div>
       {/* Is k opper ki div hai us ko future main component main convert hai */}
       
    </div>
   </div>
  )
}

export default RecurringExpenses