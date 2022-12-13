import React from 'react'
import Styles from '../../../../../Assets/Styles/GlobalStyle'
import '../../TimeTrackingIndex.css'
const TimeProgressSubPartOne = (props) => {
  return (
    <div className='col-12 clearfix'>
         <p className='text-muted fw-normal float-start mb-0'>{
            props.heading.textHeading
         }</p>
         <p className='text-muted fw-normal float-end'>
         <div className='container-fluid m-0 p-0'>
         <div class="dropdown">
           <button class="btn p-0 btn-dark" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
           <i class="fas fa-ellipsis-v"></i>
           </button>
           <ul class="dropdown-menu dropdown-menu-dark p-2" style={{borderRadius:Styles.generalBorderSimpleRadius}} aria-labelledby="dropdownMenuButton1">
             <li className='d-flex flex-column'>
               <span className='mb-1'><i className="fas fa-minus mx-1"></i><small className='mx-1'>Collapse</small></span>
               <span className='mb-1'><i className="fas fa-expand mx-1"></i><small className='mx-1'>Expand</small></span>
               <span className='mb-1'><i className="fas fa-expand-arrows-alt mx-1"></i><small className='mx-1'>Move</small></span>
               <span className='mb-1 px-1'><i className="fas fa-times mx-1"></i><small className='mx-1'>Delete</small></span>
             </li>
           </ul>
         </div>
       </div>
         </p>
      </div>
  )
}

export default TimeProgressSubPartOne