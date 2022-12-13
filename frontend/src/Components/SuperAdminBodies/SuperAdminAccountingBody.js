import React from 'react'
import AccountEsstimateBody from './AccountingBody/AccountingEstimateBody/AccountEsstimateBody';
import AddEstimate from './AccountingBody/AccountingEstimateBody/AddEstimate';
import EstimateRecievedBody from './AccountingBody/AccountingEstimateRecieved/EstimateRecievedBody';
import AccountingInvoice from './AccountingBody/AccountingInvoiceBody/AccountingInvoice';
import InvoicesRecieved from './AccountingBody/AccountingInvoicesRecievedBody/InvoicesRecieved';
import AccountingIncome from './AccountingBody/AccountingIncomeBody/AccountingIncome';
import AccountingExpense from './AccountingBody/AccountingExpensesBody/AccountingExpense';
import RecurringExpenses from './AccountingBody/AccountingRecurringExpensesBody/RecurringExpenses';
import AccountingPayments from './AccountingBody/AccountingPaymentsBody/AccountingPayments';
const SuperAdminAccountingBody = (props) => {
    console.log('Request for the accounting is : ',props.data);
  return (
    <div className='conatiner-fluid m-0 p-2'>
    {
      props.data==='Estimate'?<AccountEsstimateBody data={props.data}></AccountEsstimateBody>:null
    }
    {
      props.data==='EstimateAdd'?<AddEstimate data={props.data}></AddEstimate>:null
    }
    {
      props.data==='Estimate Recived'?<EstimateRecievedBody data={props.data}></EstimateRecievedBody>:null
    }
    {
      props.data === 'Invoices'?<AccountingInvoice data={props.data}></AccountingInvoice>:null
    }
    {
      props.data === 'InvoicesRecieved'?<InvoicesRecieved data={props.data}></InvoicesRecieved>:null
    }
    {
      props.data === 'Income'?<AccountingIncome data={props.data}></AccountingIncome>:null
    }
    {
      props.data === 'Expenses'?<AccountingExpense data={props.data}></AccountingExpense>:null
    }
    {
      props.data === 'RecurringExpenses'?<RecurringExpenses data={props.data}></RecurringExpenses>:null
    }
    {
      props.data === 'Payments'?<AccountingPayments data={props.data}></AccountingPayments>:null
    }
    </div>
  )
}

export default SuperAdminAccountingBody
// EstimateRecievedBody <AddEstimate data={props.data}></AddEstimate>