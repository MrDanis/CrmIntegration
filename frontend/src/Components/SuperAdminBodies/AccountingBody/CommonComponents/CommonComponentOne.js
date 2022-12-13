import React from 'react'

const CommonComponentOne = (props) => {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center w-100 m-0 p-0'>
    <i className="d-none fas fa-clock my-1"></i>
    <h6 className='text-muted fw-bold'>{props.tabName}</h6>
  </div>
  )
}

export default CommonComponentOne