import React from 'react'
import TimeProgress from './TimeProgress'
function TimeTrackingProgressDisplayer() {
  const porgressData=[
    {progressBarValue:'15%',textHeading:'Projects worked',progressValue:'4',progressBarStatus:25},
    {progressBarValue:'25%',textHeading:'Today Activity',progressValue:'0%',progressBarStatus:25},
    {progressBarValue:'70%',textHeading:'Worked today',progressValue:'00:00:00',progressBarStatus:25},
    {progressBarValue:'35%',textHeading:'Worked this week',progressValue:'41:51:15',progressBarStatus:25},
    {progressBarValue:'80%',textHeading:'Weekly Activity',progressValue:'50.68%',progressBarStatus:25}
  ]
  return (
    <div className="row px-3 g-3">
    {
        porgressData.map((item,index)=>
        <div class="col-3" key={index}>
          <div class=" py-2 p-1 bg-dark">
            <TimeProgress data={item}></TimeProgress>
          </div>
        </div>
        )
    }
    </div>
  )
}

export default TimeTrackingProgressDisplayer