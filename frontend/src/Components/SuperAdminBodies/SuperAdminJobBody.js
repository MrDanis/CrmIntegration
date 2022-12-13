import React from 'react'
import JobBrowse from './JobsBody/JobBrowse'
import JobEmployees from './JobsBody/JobEmployees'
import JobMatching from './JobsBody/JobMatching'
import JobProposalTemplate from './JobsBody/JobProposalTemplate'
const SuperAdminJobBody = ( props) => {
  return (
    <div className='container-fluid m-0 p-2'>
       
        {
          props.data === 'Employees'?<JobEmployees data={props.data}></JobEmployees>:null
        }
        {
          
          props.data === 'Browse'?<JobBrowse data={props.data}></JobBrowse>:null
        }
        {
          props.data === 'Matching'?<JobMatching data={props.data}></JobMatching>:null
        }
        {
          props.data === 'Proposal Tamplate'?<JobProposalTemplate data={props.data}></JobProposalTemplate>:null
        }
    </div>
  )
}

export default SuperAdminJobBody