import React from 'react'
import SuperAdminDashboardScreen from '../Screens/SuperAdminScreens/SuperAdminDashboardScreen';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import { useSelector} from 'react-redux'
import ProtectAdmin from '../Components/ProtectAdmin';
import UnauthorizeUser from '../Components/UnauthorizeUser';
// { isLogin === true ? <ProtectAdmin Componet={<SuperAdminDashboardScreen bodyType='dashboard' routeAddress='SuperadminDashboard'></SuperAdminDashboardScreen>}></ProtectAdmin>:<h1>Testing ......</h1>}
const SuperAdminRoutes = () => {
  const { isLogin,userRole } = useSelector((state) => state.authUser)
  return (
    <Router>
    
       <Routes>
        <Route path='/' element={<SuperAdminDashboardScreen bodyType='dashboard' routeAddress='SuperadminDashboard'></SuperAdminDashboardScreen>}></Route>
        <Route path='/AdminDashboard' element={ <SuperAdminDashboardScreen bodyType='dashboard' routeAddress='SuperadminDashboard'></SuperAdminDashboardScreen>}></Route>
        <Route path='/Accounting/Estimate' element={<SuperAdminDashboardScreen  bodyType='Estimate' routeAddress='SuperadminAccounting'></SuperAdminDashboardScreen>}></Route>
        <Route path='/Accounting/Estimate/Add' element={<SuperAdminDashboardScreen  bodyType='EstimateAdd' routeAddress='SuperadminAccounting'></SuperAdminDashboardScreen>}></Route>
        <Route path='/Accounting/EstimateRecived' element={<SuperAdminDashboardScreen bodyType='Estimate Recived' routeAddress='SuperadminAccounting'></SuperAdminDashboardScreen>}></Route>
        <Route path='/Accounting/Invoices' element={<SuperAdminDashboardScreen bodyType='Invoices' routeAddress='SuperadminAccounting'></SuperAdminDashboardScreen>}></Route>
        <Route path='/Accounting/InvoicesRecieved' element={<SuperAdminDashboardScreen bodyType='InvoicesRecieved' routeAddress='SuperadminAccounting'></SuperAdminDashboardScreen>}></Route>
        <Route path='/Accounting/Income' element={<SuperAdminDashboardScreen bodyType='Income' routeAddress='SuperadminAccounting'></SuperAdminDashboardScreen>}></Route>
        <Route path='/Accounting/Expenses' element={<SuperAdminDashboardScreen bodyType='Expenses' routeAddress='SuperadminAccounting'></SuperAdminDashboardScreen>}></Route>
        <Route path='/Accounting/RecurringExpenses' element={<SuperAdminDashboardScreen bodyType='RecurringExpenses' routeAddress='SuperadminAccounting'></SuperAdminDashboardScreen>}></Route>
        <Route path='/Accounting/Payments' element={<SuperAdminDashboardScreen bodyType='Payments' routeAddress='SuperadminAccounting'></SuperAdminDashboardScreen>}></Route>
        {/*  Routes for the Sales */}
        <Route path='/Sales/Purposals' element={<SuperAdminDashboardScreen bodyType='Purposals' routeAddress='SuperadminSales'></SuperAdminDashboardScreen>}></Route>
        <Route path='/Sales/Purposals/Template' element={<SuperAdminDashboardScreen bodyType='PurposalsTemplate' routeAddress='SuperadminSales'></SuperAdminDashboardScreen>}></Route>
        <Route path='/Sales/Purposals/Template/Register' element={<SuperAdminDashboardScreen bodyType='Register Purposals' routeAddress='SuperadminSales'></SuperAdminDashboardScreen>}></Route>
        <Route path='/Sales/Estimates' element={<SuperAdminDashboardScreen bodyType='Estimates' routeAddress='SuperadminSales'></SuperAdminDashboardScreen>}></Route>
        <Route path='/Sales/Invoices' element={<SuperAdminDashboardScreen bodyType='Invoices' routeAddress='SuperadminSales'></SuperAdminDashboardScreen>}></Route>
        <Route path='/Sales/Payments' element={<SuperAdminDashboardScreen bodyType='Payments' routeAddress='SuperadminSales'></SuperAdminDashboardScreen>}></Route>
        <Route path='/Sales/Piplines' element={<SuperAdminDashboardScreen bodyType='Piplines' routeAddress='SuperadminSales'></SuperAdminDashboardScreen>}></Route>
        {/* Tasks Routes */}
        <Route path='/Tasks/Dashboard' element={<SuperAdminDashboardScreen bodyType='Dashboard' routeAddress='SuperadminTasks'></SuperAdminDashboardScreen>}></Route>
        <Route path='/Tasks/TeamTask' element={<SuperAdminDashboardScreen bodyType='TeamTask' routeAddress='SuperadminTasks'></SuperAdminDashboardScreen>}></Route>
        {/* Jobs Routes */}
        <Route path='/Jobs/Employees' element={<SuperAdminDashboardScreen bodyType='Employees' routeAddress='SuperadminJobs'></SuperAdminDashboardScreen>}></Route>
        <Route path='/Jobs/Browse' element={<SuperAdminDashboardScreen bodyType='Browse' routeAddress='SuperadminJobs'></SuperAdminDashboardScreen>}></Route>
        <Route path='/Jobs/Matching' element={<SuperAdminDashboardScreen bodyType='Matching' routeAddress='SuperadminJobs'></SuperAdminDashboardScreen>}></Route>
        <Route path='/Jobs/ProposalTamplate' element={<SuperAdminDashboardScreen bodyType='Proposal Tamplate' routeAddress='SuperadminJobs'></SuperAdminDashboardScreen>}></Route>
         {/* Employees Routes */}
         <Route path='/Employees/Manage' element={<SuperAdminDashboardScreen bodyType='Manage' routeAddress='SuperadminEmployee'></SuperAdminDashboardScreen>}></Route>
         <Route path='/Employees/Manage/Invites' element={<SuperAdminDashboardScreen bodyType='Manage Invites' routeAddress='SuperadminEmployee'></SuperAdminDashboardScreen>}></Route>
         <Route path='/Employees/TimeActivity' element={<SuperAdminDashboardScreen bodyType='Time Activity' routeAddress='SuperadminEmployee'></SuperAdminDashboardScreen>}></Route>
         <Route path='/Employees/TimeSheets' element={<SuperAdminDashboardScreen bodyType='Time Sheets' routeAddress='SuperadminEmployee'></SuperAdminDashboardScreen>}></Route>
         <Route path='/Employees/Appointments' element={<SuperAdminDashboardScreen bodyType='Appointments' routeAddress='SuperadminEmployee'></SuperAdminDashboardScreen>}></Route>
         <Route path='/Employees/Approvals' element={<SuperAdminDashboardScreen bodyType='Approvals' routeAddress='SuperadminEmployee'></SuperAdminDashboardScreen>}></Route>
         <Route path='/Employees/Approvals/Policy' element={<SuperAdminDashboardScreen bodyType='Approvals Policy' routeAddress='SuperadminEmployee'></SuperAdminDashboardScreen>}></Route>
         <Route path='/Employees/EmployeeLevel' element={<SuperAdminDashboardScreen bodyType='Employee Level' routeAddress='SuperadminEmployee'></SuperAdminDashboardScreen>}></Route>
         <Route path='/Employees/Position' element={<SuperAdminDashboardScreen bodyType='Position' routeAddress='SuperadminEmployee'></SuperAdminDashboardScreen>}></Route>
         <Route path='/Employees/TimeOff' element={<SuperAdminDashboardScreen bodyType='Time Off' routeAddress='SuperadminEmployee'></SuperAdminDashboardScreen>}></Route>
         <Route path='/Employees/RecuringExpense' element={<SuperAdminDashboardScreen bodyType='Recuring Expense' routeAddress='SuperadminEmployee'></SuperAdminDashboardScreen>}></Route>
         <Route path='/Employees/Candidate' element={<SuperAdminDashboardScreen bodyType='Candidate' routeAddress='SuperadminEmployee'></SuperAdminDashboardScreen>}></Route>
         {/* Organization */}
         <Route path='/Organization/Manege' element={<SuperAdminDashboardScreen bodyType='Manege' routeAddress='SuperadminOrganization'></SuperAdminDashboardScreen>}></Route>
         <Route path='/Organization/Equipment' element={<SuperAdminDashboardScreen bodyType='Equipment' routeAddress='SuperadminOrganization'></SuperAdminDashboardScreen>}></Route>
         <Route path='/Organization/Inventory' element={<SuperAdminDashboardScreen bodyType='Inventory' routeAddress='SuperadminOrganization'></SuperAdminDashboardScreen>}></Route>
         <Route path='/Organization/Tags' element={<SuperAdminDashboardScreen bodyType='Tags' routeAddress='SuperadminOrganization'></SuperAdminDashboardScreen>}></Route>
         <Route path='/Organization/Vendors' element={<SuperAdminDashboardScreen bodyType='Vendors' routeAddress='SuperadminOrganization'></SuperAdminDashboardScreen>}></Route>
         <Route path='/Organization/Projects' element={<SuperAdminDashboardScreen bodyType='Projects' routeAddress='SuperadminOrganization'></SuperAdminDashboardScreen>}></Route>
         <Route path='/Organization/Departments' element={<SuperAdminDashboardScreen bodyType='Departments' routeAddress='SuperadminOrganization'></SuperAdminDashboardScreen>}></Route>
         <Route path='/Organization/Teams' element={<SuperAdminDashboardScreen bodyType='Teams' routeAddress='SuperadminOrganization'></SuperAdminDashboardScreen>}></Route>
         <Route path='/Organization/Documents' element={<SuperAdminDashboardScreen bodyType='Documents' routeAddress='SuperadminOrganization'></SuperAdminDashboardScreen>}></Route>
         <Route path='/Organization/EmployeementTypes' element={<SuperAdminDashboardScreen bodyType='Employeement Types' routeAddress='SuperadminOrganization'></SuperAdminDashboardScreen>}></Route>
         <Route path='/Organization/RecurrExpense' element={<SuperAdminDashboardScreen bodyType='RecurrExpense' routeAddress='SuperadminOrganization'></SuperAdminDashboardScreen>}></Route>
         <Route path='/Organization/HelpCenter' element={<SuperAdminDashboardScreen bodyType='Help Center' routeAddress='SuperadminOrganization'></SuperAdminDashboardScreen>}></Route>
         {/* Contacts */}
         <Route path='/Contacts/Visitors' element={<SuperAdminDashboardScreen bodyType='Visitors' routeAddress='SuperadminContacts'></SuperAdminDashboardScreen>}></Route>
         <Route path='/Contacts/Lead' element={<SuperAdminDashboardScreen bodyType='Lead' routeAddress='SuperadminContacts'></SuperAdminDashboardScreen>}></Route>
         <Route path='/Contacts/Customers' element={<SuperAdminDashboardScreen bodyType='Customers' routeAddress='SuperadminContacts'></SuperAdminDashboardScreen>}></Route>
         <Route path='/Contacts/Clients' element={<SuperAdminDashboardScreen bodyType='Clients' routeAddress='SuperadminContacts'></SuperAdminDashboardScreen>}></Route>
         {/* Goal */}
         <Route path='/Goals/Mange' element={<SuperAdminDashboardScreen bodyType='Mange' routeAddress='SuperadminGoals'></SuperAdminDashboardScreen>}></Route>
         <Route path='/Goals/Setings' element={<SuperAdminDashboardScreen bodyType='Setings' routeAddress='SuperadminGoals'></SuperAdminDashboardScreen>}></Route>
         {/* Reports */}
         <Route path='/Reports/All' element={<SuperAdminDashboardScreen bodyType='All Reports' routeAddress='SuperadminReports'></SuperAdminDashboardScreen>}></Route>
         <Route path='/Reports/TimeActivity' element={<SuperAdminDashboardScreen bodyType='Time and Activity' routeAddress='SuperadminReports'></SuperAdminDashboardScreen>}></Route>
         <Route path='/Reports/Weekly' element={<SuperAdminDashboardScreen bodyType='Weekly' routeAddress='SuperadminReports'></SuperAdminDashboardScreen>}></Route>
         <Route path='/Reports/AppsUrl' element={<SuperAdminDashboardScreen bodyType='Apps Url' routeAddress='SuperadminReports'></SuperAdminDashboardScreen>}></Route>
         <Route path='/Reports/ManualTime' element={<SuperAdminDashboardScreen bodyType='Manual Time' routeAddress='SuperadminReports'></SuperAdminDashboardScreen>}></Route>
         <Route path='/Reports/ExpenseReport' element={<SuperAdminDashboardScreen bodyType='Expenses' routeAddress='SuperadminReports'></SuperAdminDashboardScreen>}></Route>
         <Route path='/Reports/AmountOwed' element={<SuperAdminDashboardScreen bodyType='Amount Owed' routeAddress='SuperadminReports'></SuperAdminDashboardScreen>}></Route>
         <Route path='/Reports/PaymentReports' element={<SuperAdminDashboardScreen bodyType='Payments' routeAddress='SuperadminReports'></SuperAdminDashboardScreen>}></Route>
         <Route path='/Reports/WeeklyLimits' element={<SuperAdminDashboardScreen bodyType='Weekly Limits' routeAddress='SuperadminReports'></SuperAdminDashboardScreen>}></Route>
         <Route path='/Reports/dailyLimits' element={<SuperAdminDashboardScreen bodyType='Daily Limits' routeAddress='SuperadminReports'></SuperAdminDashboardScreen>}></Route>
         <Route path='/Reports/ProjectBudgets' element={<SuperAdminDashboardScreen bodyType='Project Budgets' routeAddress='SuperadminReports'></SuperAdminDashboardScreen>}></Route>
         <Route path='/Reports/ClientBudgets' element={<SuperAdminDashboardScreen bodyType='Client Budgets' routeAddress='SuperadminReports'></SuperAdminDashboardScreen>}></Route>
         <Route path='/UnAuthorize' element={<UnauthorizeUser data='This is from the routing'></UnauthorizeUser>}></Route>      
      </Routes>    
    </Router>
    
  )
}

export default SuperAdminRoutes