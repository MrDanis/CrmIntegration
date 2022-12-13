import React from 'react'

const CommonLevelComponent = (props) => {
  return (
    <div className={props.class} >
     <p className='px-1'>{props.text}</p>
    </div>
  )
}

export default CommonLevelComponent