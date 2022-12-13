import React from 'react'
import '../../../Body.css'
// title dropdown menu
const CommonMatching = (props) => {
  return (
    <div className={props.class}>
      <div className='row m-0 px-0 p-2 d-flex flex-column discountBox'>    
          <div className='col-12 px-3 p-0 m-0'>
            <small className='text-muted mb-2 fw-bold fs-6'>{props.title}</small>
            <select className="mt-1 mb-2 form-select bg-dark text-light border-0 outline-none" aria-label="Default select example">
              {
                props.menu.map((item,index)=>
            
                <option key={index} value="3">{item}</option>
                )
              }
            </select>
          </div>       
       </div>
      </div>
  )
}

export default CommonMatching