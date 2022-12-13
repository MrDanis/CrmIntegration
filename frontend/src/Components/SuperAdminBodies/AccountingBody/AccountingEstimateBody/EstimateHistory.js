import React from 'react'
import SearchAndHistoryDisplay from '../CommonComponents/SearchAndHistoryDisplay'
const EstimateHistory = (props) => {
  // Sudo code this logic will be implemented in future
  // if the props.data is equall to invoice then call
  // the invoice api from the redux othervoice call 
  //the estimate api from redus toolkit store
  return (
    <div className='container-fluid m-0 p-0 bg-dark rounded'>
   <SearchAndHistoryDisplay data='History'></SearchAndHistoryDisplay>
    {/* {props.data} History */}
    </div>
  )
}

export default EstimateHistory