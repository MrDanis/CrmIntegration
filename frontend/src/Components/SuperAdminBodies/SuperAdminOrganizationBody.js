import React from 'react'
import ManageOrganization from './OrganizationBody/MangeOrganization'
import OrganizationEquipment from './OrganizationBody/OrganizationEquipment'
import OrganizationInventory from './OrganizationBody/OrganizationInventory'
import OrganizationTags from './OrganizationBody/OrganizationTags'
import OrganizationVendors from './OrganizationBody/OrganizationVendor'
import OrganizationProjects from './OrganizationBody/OrganizationProjects'
import OrganizationDepartments from './OrganizationBody/OrganizationDepartments'
import OrganizationTeams from './OrganizationBody/OrganizationTeams'
import OrganizationDocuments from './OrganizationBody/OrganizationDocuments'
import OrganizationEmployeeTypes from './OrganizationBody/OrganizationEmployeeTypes'
import OrganizationRecurringExpenses from './OrganizationBody/OrganizationRecurringExpenses'
import OrganizationHelpCenter from './OrganizationBody/OrganizationHelpCenter'
const SuperAdminOrganizationBody = (props) => {
  return (
    <div className='container-fluid m-0 p-2'>
        {/* SuperAdminOrganizationBody{props.data} */}
        {
          props.data === 'Manege'?<ManageOrganization data={props.data}></ManageOrganization>:null
        }
        
        {
          props.data === 'Equipment'?<OrganizationEquipment data={props.data}></OrganizationEquipment>:null
        }
        {
          props.data === 'Inventory'?<OrganizationInventory data={props.data}></OrganizationInventory>:null
        }
        {
          props.data === 'Tags'?<OrganizationTags data={props.data}></OrganizationTags>:null
        }
        {
          props.data === 'Vendors'?<OrganizationVendors data={props.data}></OrganizationVendors>:null
        }
        {
          props.data === 'Projects'?<OrganizationProjects data={props.data}></OrganizationProjects>:null
        }
        {
          props.data === 'Departments'?<OrganizationDepartments data={props.data}></OrganizationDepartments>:null
        }
        {
          props.data === 'Teams'?<OrganizationTeams data={props.data}></OrganizationTeams>:null
        }
        {
          props.data === 'Documents'?<OrganizationDocuments data={props.data}></OrganizationDocuments>:null
        }
        {
          props.data === 'Employeement Types'?<OrganizationEmployeeTypes data={props.data}></OrganizationEmployeeTypes>:null
        }
        {
          props.data === 'RecurrExpense'?<OrganizationRecurringExpenses data={props.data}></OrganizationRecurringExpenses>:null
        }
        {
          props.data === 'Help Center'?<OrganizationHelpCenter data={props.data}></OrganizationHelpCenter>:null
        }

    </div>
  )
}

export default SuperAdminOrganizationBody