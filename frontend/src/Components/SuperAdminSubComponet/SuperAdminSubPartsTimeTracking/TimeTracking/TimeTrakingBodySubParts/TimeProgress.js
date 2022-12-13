import React from 'react'
import '../../TimeTrackingIndex.css'
import Styles from '../../../../../Assets/Styles/GlobalStyle'
import TimeProgressSubPartOne from './TimeProgressSubPartOne'
import TimeProgressSubPartTwo from './TimeProgressSubPartTwo'
import TimeProgressSubPartThree from './TimeProgressSubPartThree'
function TimeProgress(props) {
  return (
    <div className='container-fluid m-0 p-0'>
    <div className='row m-0 p-0'>
      <TimeProgressSubPartOne heading={props.data}></TimeProgressSubPartOne>
      <TimeProgressSubPartTwo value={props.data.progressValue}></TimeProgressSubPartTwo>
      <TimeProgressSubPartThree progressValue={props.data.progressBarValue}></TimeProgressSubPartThree>
    </div>
    
    </div>
  )
}

export default TimeProgress