import React from 'react'
import './PerformanceCharts.css'
import PerformanceAccountChart from './PerformanceAccountChart'
const PerformanceCharts=()=> {
  return (
    <div className='conatiner-fluid mt-2 m-0 p-3 bg-dark'>
      <div className='row m-0 p-0'>
        <div className='col-12 m-0 p-1'>
            <PerformanceAccountChart></PerformanceAccountChart>
        </div>
      </div>
    </div>
  )
}

export default PerformanceCharts