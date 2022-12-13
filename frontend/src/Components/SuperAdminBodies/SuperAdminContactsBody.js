import React from 'react'
import ContactVisitor from './ContactsBody/ContactsVisitors'
import ContactLead from './ContactsBody/ContactsLeads'
import ContactCustomer from './ContactsBody/ContactsCustomers'
import ContactClient from './ContactsBody/ContactClients'
const SuperAdminContactsBody = (props) => {
  return (
    <div className='container-fluid m-0 p-2'>
        {/* SuperAdminContactsBody {props.data} */}
        { 
          props.data==='Visitors'?<ContactVisitor data={props.data}></ContactVisitor>:null
        }
        { 
          props.data==='Lead'?<ContactLead data={props.data}></ContactLead>:null
        }
        { 
          props.data==='Customers'?<ContactCustomer data={props.data}></ContactCustomer>:null
        }
        { 
          props.data==='Clients'?<ContactClient data={props.data}></ContactClient>:null
        }
    </div>
  )
}

export default SuperAdminContactsBody