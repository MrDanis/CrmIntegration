import React from 'react'
import CommonComponentThree from '../CommonComponents/CommonComponentThree'
const EstimateBrowse = (props) => {
  // Sudo code this logic will be implemented in future
  // if the props.data is equall to invoice then call
  // the invoice api from the redux othervoice call 
  //the estimate api from redus toolkit store
  return (
    <div className='container-fluid m-0 p-0 shadow'>
     <div className='row m-0 p-0'>
        <div className='col-12 m-0 p-0 bg-dark rounded'>
        <CommonComponentThree></CommonComponentThree>
        {/* {props.data} Browse */}
        </div>
     </div>
      </div>
  )
}

export default EstimateBrowse