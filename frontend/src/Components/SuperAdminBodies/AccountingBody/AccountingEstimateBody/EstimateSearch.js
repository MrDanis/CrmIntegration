import React from 'react'
import SearchAndHistoryDisplay from '../CommonComponents/SearchAndHistoryDisplay'
const EstimateSearch = (props) => {
  // Sudo code this logic will be implemented in future
  // if the props.data is equall to invoice then call
  // the invoice api from the redux othervoice call 
  //the estimate api from redus toolkit store
  return (
    <div className='container-fluid m-0 p-0 bg-dark rounded'>
     <SearchAndHistoryDisplay data='Search'></SearchAndHistoryDisplay>
    {/* {props.data} Search */}
    </div>
  )
}

export default EstimateSearch