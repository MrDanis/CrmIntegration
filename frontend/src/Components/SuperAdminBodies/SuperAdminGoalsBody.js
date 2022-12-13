import React from 'react'
import GoalManage from './GoalsBody/GoalManage'
import GoalSettings from './GoalsBody/GoalSettings'
const SuperAdminGoalsBody = (props) => {
  return (
    <div className='container-fluid m-0 p-2'>
      {
        props.data==='Mange'?<GoalManage data={props.data}></GoalManage>:null
      }
      {
        props.data==='Setings'?<GoalSettings data={props.data}></GoalSettings>:null
      }
    </div>
  )
}

export default SuperAdminGoalsBody