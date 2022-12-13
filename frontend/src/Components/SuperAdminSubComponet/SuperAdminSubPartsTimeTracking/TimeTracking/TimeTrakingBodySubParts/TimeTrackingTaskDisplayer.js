import React from 'react'
import '../../TimeTrackingIndex.css'
import TimeTaskDisplayer from './TimeTaskDisplayer';
function TimeTrackingTaskDisplayer() {
    const jobsAndTasks = [
        {textHeading:'Recent Activies'},{textHeading:'Tasks'},
        {textHeading:'Manual Time'},{textHeading:'Apps & Urls'},
        {textHeading:'Projects'}
    ];
  return (
    <div className="row mt-4 px-3 g-3">
         {
        jobsAndTasks.map((item,index)=>
        <TimeTaskDisplayer key={index} value={item}></TimeTaskDisplayer>
        )
    }
     </div>
  )
}

export default TimeTrackingTaskDisplayer
{/* <div className="col-6" key={index}>
  <div className=" py-2 p-1 bg-dark">
    <p>{item.myBoxIndex}</p>
  </div>
</div> */}