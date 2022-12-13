import React from 'react'
import AmmountDisplayer from './SuperAdminSubParts/AmmountDisplayer'
import PerformanceCharts from './SuperAdminSubParts/PerformanceCharts'
import EmployeeDataTable from './SuperAdminSubParts/EmployeeDataTable'
const SuperAdminDashboardAccountingComponent=()=> {
  return (
    <div className='container-fluid m-0 p-0'>
    <div className='row m-0 p-0'>
    <div className='col-12 m-0 p-0'>
        <AmmountDisplayer></AmmountDisplayer>
    </div>
    <div className='col-12 m-0 p-0'>
        <PerformanceCharts></PerformanceCharts>
    </div>
    <div className='col-12 m-0 p-0'>
        <EmployeeDataTable></EmployeeDataTable>
    </div>
    </div>
    </div>
  )
}

export default SuperAdminDashboardAccountingComponent