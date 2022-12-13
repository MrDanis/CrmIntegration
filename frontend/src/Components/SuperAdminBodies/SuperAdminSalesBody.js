import React, { useEffect } from 'react';
import SaleEstimate from './SaleBody/SaleEstimate';
import SaleInvoices from './SaleBody/SaleInvoices';
import SalePayment from './SaleBody/SalePayments';
import SalePurposal from './SaleBody/SalePurposals';
import SalePiplines from './SaleBody/SalesPiplines';
import SalePurposalTemplate from './SaleBody/SalePurposalSubParts/SalePurposalTemplate';
import SalePurposalTemplateRegister from './SaleBody/SalePurposalSubParts/SalePurposalTemplateRegister';
const SuperAdminSalesBody = (props) => {
  useEffect(()=>{},[props.data])
  return (
    <div className='container-fluid m-0 p-2'>
      {
        props.data==='Purposals'?
        <SalePurposal data={props.data}></SalePurposal>
        :null
      }
      {
        props.data==='Estimates'?
        <SaleEstimate data={props.data}></SaleEstimate>
        :null
      }
      {
        props.data==='Invoices'?
        <SaleInvoices data={props.data}></SaleInvoices>
        :null
      }
      {
        props.data==='Payments'?
        <SalePayment data={props.data}></SalePayment>
        :null
      }
      {
        props.data==='Piplines'?
        <SalePiplines data={props.data}></SalePiplines>
        :null
      }
      {
        props.data==='PurposalsTemplate'?
        <SalePurposalTemplate data={props.data}></SalePurposalTemplate>
        :null
      }
      {
        props.data==='Register Purposals'?
        <SalePurposalTemplateRegister data={props.data}></SalePurposalTemplateRegister>
        :null
      }
    </div>
  )
}

export default SuperAdminSalesBody