import React from 'react'
import AllReports from './ReportsBody/AllReports'
import ReportsTimeActivity from './ReportsBody/ReportTimeActivity'
import ReportsWeekly from './ReportsBody/ReportWeekly'
import ReportAppsUrl from './ReportsBody/ReportAppsUrl'
import ReportManualTime from './ReportsBody/ReportsManualTime'
import ReportExpense from './ReportsBody/ReportExpenses'
import ReportAmountsOwn from './ReportsBody/ReportAmountsOwn'
import ReportPayments from './ReportsBody/ReportsPayments'
import ReportWeeklyLimits from './ReportsBody/ReportsWeeklyLimits'
import ReportDailyLimits from './ReportsBody/ReportsDailyLimits'
import ReportProjectBudgets from './ReportsBody/ReportProjectBudgets'
import ReportClientBudgets from './ReportsBody/ReportClientBudgets'
const SuperAdminReportsBody = (props) => {
  return (
    <div className='container-fluid m-0 p-2'> 
       
        {
          props.data === 'All Reports'?<AllReports data={props.data}></AllReports>:null
        }
         {
          props.data === 'Time and Activity'?<ReportsTimeActivity data={props.data}></ReportsTimeActivity>:null
        }
         {
          props.data === 'Weekly'?<ReportsWeekly data={props.data}></ReportsWeekly>:null
        }
         {
          props.data === 'Apps Url'?<ReportAppsUrl data={props.data}></ReportAppsUrl>:null
        }
         {
          props.data === 'Manual Time'?<ReportManualTime data={props.data}></ReportManualTime>:null
        }
         {
          props.data === 'Expenses'?<ReportExpense data={props.data}></ReportExpense>:null
        }
         {
          props.data === 'Amount Owed'?<ReportAmountsOwn data={props.data}></ReportAmountsOwn>:null
        }
         {
          props.data === 'Payments'?<ReportPayments data={props.data}></ReportPayments>:null
        }
         {
          props.data === 'Weekly Limits'?<ReportWeeklyLimits data={props.data}></ReportWeeklyLimits>:null
        }
         {
          props.data === 'Daily Limits'?<ReportDailyLimits data={props.data}></ReportDailyLimits>:null
        }
         {
          props.data === 'Project Budgets'?<ReportProjectBudgets data={props.data}></ReportProjectBudgets>:null
        }
         {
          props.data === 'Client Budgets'?<ReportClientBudgets data={props.data}></ReportClientBudgets>:null
        }

    </div>
  )
}

export default SuperAdminReportsBody