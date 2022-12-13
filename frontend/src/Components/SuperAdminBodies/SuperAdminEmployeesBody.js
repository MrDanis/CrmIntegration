import React from 'react'
import EmployeeManage from './EmployeesBody/EmployeeManage'
import EmployeesmanageInvites from './EmployeesBody/EmployeesmanageInvites'
import EmployeeTimeActivity from './EmployeesBody/EmployeeTimeActivity'
import EmployeeTimeSheet from './EmployeesBody/EmployeeTimeSheets'
import EmployeeAppointment from './EmployeesBody/EmployeeAppointments'
import EmployeeApprovals from './EmployeesBody/EmployeeApprovals'
import EmployeeLevel from './EmployeesBody/EmployeeLevel'
import EmployeePosition from './EmployeesBody/EmployeePosition'
import EmployeeTimeOff from './EmployeesBody/EmployeeTimeOff'
import EmployeeRecurringExpense from './EmployeesBody/EmployeeRecurringExpenses'
import EmployeeCandidates from './EmployeesBody/EmployeeCandidates'
import EmployeeApprovalPolicy from './EmployeesBody/EmployeeApprovalPolicy'
const SuperAdminEmployeesBody = (props) => {
  return (
    <div className='container-fluid m-0 p-2'>    
        {
           
          props.data === 'Manage'?<EmployeeManage data={props.data}></EmployeeManage>:null
        }
        {
         
          props.data === 'Manage Invites'?<EmployeesmanageInvites data={props.data}></EmployeesmanageInvites>:null
        }
        {
          props.data === 'Time Activity'?<EmployeeTimeActivity data={props.data}></EmployeeTimeActivity>:null
        }
        {
          props.data === 'Time Sheets'?<EmployeeTimeSheet data={props.data}></EmployeeTimeSheet>:null
        }
        {
          props.data === 'Appointments'?<EmployeeAppointment data={props.data}></EmployeeAppointment>:null
        }
        {
          props.data === 'Approvals'?<EmployeeApprovals data={props.data}></EmployeeApprovals>:null
        }
        {
          props.data === 'Approvals Policy'?<EmployeeApprovalPolicy data={props.data}></EmployeeApprovalPolicy>:null
        }
        
        {
          props.data === 'Employee Level'?<EmployeeLevel data={props.data}></EmployeeLevel>:null
        }
        {
          props.data === 'Position'?<EmployeePosition data={props.data}></EmployeePosition>:null
        }
        {
          props.data === 'Time Off'?<EmployeeTimeOff data={props.data}></EmployeeTimeOff>:null
        }
        {
          props.data === 'Recuring Expense'?<EmployeeRecurringExpense data={props.data}></EmployeeRecurringExpense>:null
        }
        {
          props.data === 'Candidate'?<EmployeeCandidates data={props.data}></EmployeeCandidates>:null
        }
    </div>
  )
}

export default SuperAdminEmployeesBody