import React from 'react'
import {Link} from 'react-router-dom' 
const ForgotPassword = () => {
  return (
    <div className='container-fluid  m-0 p-4'>
        <button className='btn btn-success rounded-pill bg-light text-dark shadow'>
          <Link className='text-decoration-none text-dark' to={'/Authentication/Register'}>
            Forgot Password
          </Link>
        </button>
    </div>
  )
}

export default ForgotPassword