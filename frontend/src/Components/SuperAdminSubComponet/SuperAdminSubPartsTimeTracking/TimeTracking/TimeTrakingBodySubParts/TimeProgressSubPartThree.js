import React from 'react'
import '../../TimeTrackingIndex.css'
const TimeProgressSubPartThree = (props) => {
  return (
    <div className='col-12 mb-1'>
    <div className="progress bg-dark shadow">
        <div className="progress-bar bg-success" style={{width:`${props.progressValue}`}} role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    </div>
  )
}

export default TimeProgressSubPartThree