import React from 'react'
import SuperAdminDashboardBody from './SuperAdminDashboardBody'
import SuperAdminAccountingBody from './SuperAdminAccountingBody';
import SuperAdminSalesBody from './SuperAdminSalesBody';
import SuperAdminTasksBody from './SuperAdminTasksBody';
import SuperAdminJobBody from './SuperAdminJobBody';
import SuperAdminEmployeesBody from './SuperAdminEmployeesBody';
import SuperAdminOrganizationBody from './SuperAdminOrganizationBody';
import SuperAdminContactsBody from './SuperAdminContactsBody';
import SuperAdminGoalsBody from './SuperAdminGoalsBody';
import SuperAdminReportsBody from './SuperAdminReportsBody';
const IndexBody = (props) => {
  // IF(M15 >=90,"A+",IF(M15>=80 ,"A",IF(M15>=70,"B+",IF(M15>=60,"B",IF(M15>=55,"C+",IF(M15>=50,"C",IF(M15<50,"D","Fail")))))))
  console.log('Props recieving at the body is ',props.data.parentAddress);
  return (
    <>
    {
      props.data.parentAddress.routeAddress==='SuperadminDashboard'? <SuperAdminDashboardBody></SuperAdminDashboardBody>:null
    }
    {
      props.data.parentAddress.routeAddress==='SuperadminAccounting'? <SuperAdminAccountingBody data={props.data.parentAddress.bodyType}></SuperAdminAccountingBody>:null
    }
    {
      props.data.parentAddress.routeAddress==='SuperadminSales'? <SuperAdminSalesBody data={props.data.parentAddress.bodyType}></SuperAdminSalesBody>:null
    }
    {
      props.data.parentAddress.routeAddress==='SuperadminTasks'? <SuperAdminTasksBody data={props.data.parentAddress.bodyType}></SuperAdminTasksBody>:null
    }
    {
      props.data.parentAddress.routeAddress==='SuperadminJobs'? <SuperAdminJobBody data={props.data.parentAddress.bodyType}></SuperAdminJobBody> :null
    }
    {
      props.data.parentAddress.routeAddress==='SuperadminEmployee'? <SuperAdminEmployeesBody data={props.data.parentAddress.bodyType}></SuperAdminEmployeesBody>:null
    }
    {
      props.data.parentAddress.routeAddress==='SuperadminOrganization'?<SuperAdminOrganizationBody data={props.data.parentAddress.bodyType}></SuperAdminOrganizationBody>:null
    }
    {
      props.data.parentAddress.routeAddress==='SuperadminContacts'? <SuperAdminContactsBody data={props.data.parentAddress.bodyType}></SuperAdminContactsBody>:null
    }
    {
      props.data.parentAddress.routeAddress==='SuperadminGoals'? <SuperAdminGoalsBody data={props.data.parentAddress.bodyType}></SuperAdminGoalsBody>:null
    }
    {
      props.data.parentAddress.routeAddress==='SuperadminReports'? <SuperAdminReportsBody data={props.data.parentAddress.bodyType}></SuperAdminReportsBody>:null
    }
   </>
  )
}

export default IndexBody