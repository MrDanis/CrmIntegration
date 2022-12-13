import React from 'react'
import TasksDashboard from './TasksBody/TasksDashboard'
import TeamsTasks from './TasksBody/TeamsTasks'
const SuperAdminTasksBody = (props) => {
  return (
    <div className='container-fluid m-0 p-2'>
      {
        props.data==='Dashboard'?<TasksDashboard data={props.data}></TasksDashboard>:null
      }
      {
        props.data==='TeamTask'?<TeamsTasks data={props.data}></TeamsTasks>:null
      }
      {/* SuperAdminTasksBody {props.data} */}
    </div>
  )
}

export default SuperAdminTasksBody