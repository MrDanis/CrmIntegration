import React, {useState} from 'react'
import CommonSettings from '../CommonComponents/CommonSettings';
import CommonComponentOne from '../CommonComponents/CommonComponentOne';
import CommonComponentTwo from '../CommonComponents/CommonComponentTwo';
import EstimateBrowse from '../AccountingEstimateBody/EstimateBrowse';
import EstimateHistory from '../AccountingEstimateBody/EstimateHistory';
import EstimateSearch from '../AccountingEstimateBody/EstimateSearch';
import '../../../Body'
const AccountingInvoice = (props) => {
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
    <div className='container-fluid m-0 p-2 '>
    <div className='row m-0 p-0'>
       {/* Is k nichy ki div hai us ko future main component main convert hai */}
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
       {/* Is k opper ki div hai us ko future main component main convert hai */}
       {/* Is k nichy ki div hai us ko future main component main convert hai */}
       <div className={EstimatedtabIndex===0?'col-2 m-0 p-2 invoiceTabs':'col-2 bg-dark m-0 p-2 invoiceTabs'}  onClick={()=>{updateTabIndex(0)}}>
      <CommonComponentOne tabName='Browser'></CommonComponentOne>
      </div>
      <div className={EstimatedtabIndex===1?'col-2 m-0 p-2 invoiceTabs':'col-2 bg-dark m-0 p-2 invoiceTabs'} onClick={()=>{updateTabIndex(1)}}>
      <CommonComponentOne tabName='Search'></CommonComponentOne>
      </div>
      <div className={EstimatedtabIndex===2?'col-2 m-0 p-2 invoiceTabs':'col-2 bg-dark m-0 p-2 invoiceTabs'}  onClick={()=>{updateTabIndex(2)}}>
      <CommonComponentOne tabName='History'></CommonComponentOne>
      </div>
      <div className='col-6 bg-dark px-1 py-2 m-0 p-0 d-flex justify-content-end align-items-center'>
         {/* Common Component two start from here */}
       <CommonComponentTwo data='/Accounting/Estimate/Add' text='Add'></CommonComponentTwo>  
         {/* Common Component two ends here */}
      </div>
       {/* Is k opper ki div hai us ko future main component main convert hai */}
       {/* Is k nichy ki div hai us ko future main component main convert hai */}
       <div className='col-12 mt-3 m-0 p-0 '>
       {
            EstimatedtabIndex===0?<EstimateBrowse data='Invoice'></EstimateBrowse>:null
          }
          {
            EstimatedtabIndex===1?<EstimateSearch data='Invoice'></EstimateSearch>:null
          }
          {
            EstimatedtabIndex===2?<EstimateHistory data='Invoice'></EstimateHistory>:null
          }
       </div>
       {/* Is k opper ki div hai us ko future main component main convert hai */}
       
    </div>
   </div>
  )
}

export default AccountingInvoice