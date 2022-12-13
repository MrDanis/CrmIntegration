import React,{useState} from 'react'
import SuperAdminDashboardAccountingComponent from '../SuperAdminSubComponet/SuperAdminDashboardAccountingComponent'
import SuperAdminDashboardProjectMangmentComponent from '../SuperAdminSubComponet/SuperAdminDashboardProjectMangmentComponent'
import SuperAdminDashboardTimeTrackingComponent from '../SuperAdminSubComponet/SuperAdminDashboardTimeTrackingComponent'
import '../Body.css'
const SuperAdminDashboardBody = () => {
  const [tabIndex,settabIndex] = useState(0);
  const updateTabIndex =(index)=>{
     switch (index) {
            case 0:
                settabIndex(index);
            break;
            case 1:
                settabIndex(index);
            break;
            case 2:
                settabIndex(index);
            break;
     
        default:
            break;
     }
  }
  return (
    <div className='row m-0 p-0 mainTabRow'>
      {/* below this components will represent the different screens of the super admin panel */}
      <div className={tabIndex===0?'col-2 m-0 p-2 d-flex justify-content-center align-items-center flex-column':'col-2 bg-dark m-0 p-2 d-flex justify-content-center align-items-center flex-column'}  onClick={()=>{updateTabIndex(0)}}>
         <i className="fas fa-clock my-1"></i>
         <h6 className='text-muted fw-bold'>Accounting</h6>
      </div>
      <div className={tabIndex===1?'col-2 m-0 p-2 d-flex justify-content-center align-items-center flex-column':'col-2 bg-dark m-0 p-2 d-flex justify-content-center align-items-center flex-column'} onClick={()=>{updateTabIndex(1)}}>
         <i className="fas fa-clock my-1"></i>
         <h6 className='text-muted fw-bold'>Time Tracking</h6>
      </div>
      <div className={tabIndex===2?'col-2 m-0 p-2 d-flex justify-content-center align-items-center flex-column':'col-2 bg-dark m-0 p-2 d-flex justify-content-center align-items-center flex-column'}  onClick={()=>{updateTabIndex(2)}}>
         <i className="fas fa-clock my-1"></i>
         <h6 className='text-muted fw-bold'>Project Management</h6>
      </div>
     <div className='col-12 mt-3 m-0 p-0'>
       {/* Super Admin Dashboard component should be here start */}
          {
            tabIndex===0?<SuperAdminDashboardAccountingComponent></SuperAdminDashboardAccountingComponent>:null
          }
          {
            tabIndex===1?<SuperAdminDashboardTimeTrackingComponent></SuperAdminDashboardTimeTrackingComponent>:null
          }
          {
            tabIndex===2?<SuperAdminDashboardProjectMangmentComponent></SuperAdminDashboardProjectMangmentComponent>:null
          }
       {/* Super Admin Dashboard component should be here end */}
     </div>
     </div>
  )
}

export default SuperAdminDashboardBody