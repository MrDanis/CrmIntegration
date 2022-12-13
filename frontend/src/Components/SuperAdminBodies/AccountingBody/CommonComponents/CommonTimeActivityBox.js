import React from 'react'

const CommonTimeActivityBox = (props) => {
  return (
    <div className={props.class}>
    <div className='m-0 px-3 p-2 d-flex flex-column w-100 bg-dark'>
        <p>{props.title}</p>
        <h3>{props.value}</h3>
        <div className="progress shadow" style={{backgroundColor:'#1c1c1c'}}>
        <div className="progress-bar bg-success" style={{width:`${props.barValue}`}} role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    </div>
    </div>
  )
}

export default CommonTimeActivityBox