import React from 'react'
import '../TimeTrackingIndex.css'
import TimeTrackingProgressDisplayer from './TimeTrakingBodySubParts/TimeTrackingProgressDisplayer'
import TimeTrackingTaskDisplayer from './TimeTrakingBodySubParts/TimeTrackingTaskDisplayer'
function TimeTrackingBody() {
  return (
    <div className='container-fluid mt-3 m-0 p-0 timetrackingBorder'>
     <TimeTrackingProgressDisplayer></TimeTrackingProgressDisplayer>
      <TimeTrackingTaskDisplayer></TimeTrackingTaskDisplayer>
    </div>

  )
}

export default TimeTrackingBody