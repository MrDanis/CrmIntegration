import React,{useState} from 'react'
import CommonSettings from '../AccountingBody/CommonComponents/CommonSettings'
import CommonComponentOne from '../AccountingBody/CommonComponents/CommonComponentOne';
import CommonComponentTwo from '../AccountingBody/CommonComponents/CommonComponentTwo';
import EstimateBrowse from '../AccountingBody/AccountingEstimateBody/EstimateBrowse';
import EstimateHistory from '../AccountingBody/AccountingEstimateBody/EstimateHistory';
import EstimateSearch from '../AccountingBody/AccountingEstimateBody/EstimateSearch';
const SaleEstimate = (props) => {
  const [EstimatedtabIndex,setEstimatedtabIndex] = useState(0);
  const updateTabIndex =(index)=>{
     switch (index) {
            case 0:
                setEstimatedtabIndex(index);
            break;
            case 1:
                setEstimatedtabIndex(index);
            break;
            case 2:
                setEstimatedtabIndex(index);
            break;
        default:
            break;
     }
  }
  return (
    <div className='row p-2 m-0'>
      {/* setting and tittle row */}
      <div className='col-12 bg-dark py-2 d-flex clearfix subpageTitleHeading'>
       <div className='row w-100 m-0 p-0'> 
        <div className='col-10 m-0 p-0'>
         <h1 className='sabpageheading flex-start'>{props.data}  for Ever Technologies <span className='fw-normal'>LTD</span></h1>
        </div>
        <div className='col-2 m-0 p-0 d-flex justify-content-end align-items-center'>
         <CommonSettings></CommonSettings>
        </div>
       </div>
      </div>
      {/* Setting and title row end */}
       {/* menu and add row start */}
       <div style={{cursor:'pointer'}} className={EstimatedtabIndex===0?'col-2 m-0 p-2':'col-2 bg-dark m-0 p-2'}  onClick={()=>{updateTabIndex(0)}}>
      <CommonComponentOne tabName='Browser'></CommonComponentOne>
      </div>
      <div style={{cursor:'pointer'}} className={EstimatedtabIndex===1?'col-2 m-0 p-2':'col-2 bg-dark m-0 p-2'} onClick={()=>{updateTabIndex(1)}}>
      <CommonComponentOne tabName='Search'></CommonComponentOne>
      </div>
      <div style={{cursor:'pointer'}} className={EstimatedtabIndex===2?'col-2 m-0 p-2':'col-2 bg-dark m-0 p-2'}  onClick={()=>{updateTabIndex(2)}}>
      <CommonComponentOne tabName='History'></CommonComponentOne>
      </div>
      <div className='col-6 bg-dark px-1 py-2 m-0 p-0 d-flex justify-content-end align-items-center'>
         {/* Common Component two start from here */}
       <CommonComponentTwo data='/Accounting/Estimate/Add' text='add'></CommonComponentTwo>  
         {/* Common Component two ends here */}
      </div>
       {/* row end */}
       {/* Menu component start */}
       <div className='col-12 mt-3 m-0 p-0'>
       {/* Accounting Estimate sub parts start */}
          {
            EstimatedtabIndex===0?<EstimateBrowse data='Estimate'></EstimateBrowse>:null
          }
          {
            EstimatedtabIndex===1?<EstimateSearch data='Estimate'></EstimateSearch>:null
          }
          {
            EstimatedtabIndex===2?<EstimateHistory data='Estimate'></EstimateHistory>:null
          }
       {/* Accounting Estimate sub parts end */}
     </div>
       {/* Menu component end */}
    </div>
  )
}

export default SaleEstimate