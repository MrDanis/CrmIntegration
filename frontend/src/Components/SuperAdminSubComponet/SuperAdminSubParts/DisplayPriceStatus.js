import React from 'react'

const DisplayPriceStatus=(props)=> {
  return (
    <div className='container-fluid m-0 p-0'>
     <div className='row m-0 p-0'>
       <div className='col-12'>
          <span className='my-2 m-0 p-0 text-muted'>
            {props.data.text}
          </span>
          <h2 className={props.data.class}>
            {props.data.amount}
          </h2>
       </div>
     </div>
    </div>
  )
}

export default DisplayPriceStatus