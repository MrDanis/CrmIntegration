import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import { BiArrowBack } from "react-icons/bi";
import {AiOutlinePlus } from "react-icons/ai";
import CommonComponentOne from '../../AccountingBody/CommonComponents/CommonComponentOne';
import EstimateBrowse from '../../AccountingBody/AccountingEstimateBody/EstimateBrowse';
import EstimateSearch from '../../AccountingBody/AccountingEstimateBody/EstimateSearch';
import '../../../Body.css'
const SalePurposalTemplate = () => {
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
    <div className='container-fluid m-0 p-2'>
      <div className='row m-0 p-0'>
    {/* for title column Start*/}
      <div className='col-12 m-0 p-1 bg-dark text-light d-flex flex-row rounded'>
         <p className='d-flex align-items-center justify-content-center'>
           <Link className='m-0 p-0 text-decoration-none text-light' to={'/Sales/Purposals'}>
             <BiArrowBack className='mx-2 m-0 p-1 fs-4 rounded-circle shadow backToParent'></BiArrowBack>
           </Link>
           <h1 className='m-0 p-0 sabpageheading flex-start'> 
                Proposal Template for Ever Technologies LTD
           </h1>
         </p>
      </div>
       {/* add and search bar */}
       <div style={{cursor:'pointer'}} className={EstimatedtabIndex===0?'col-2 m-0 p-2':'col-2 bg-dark m-0 p-2'}  onClick={()=>{updateTabIndex(0)}}>
      <CommonComponentOne tabName='Browser'></CommonComponentOne>
      </div>
      <div style={{cursor:'pointer'}} className={EstimatedtabIndex===1?'col-2 m-0 p-2':'col-2 bg-dark m-0 p-2'} onClick={()=>{updateTabIndex(1)}}>
      <CommonComponentOne tabName='Search'></CommonComponentOne>
      </div>
      <div className='col-8 bg-dark px-1 py-2 m-0 p-0 d-flex justify-content-end align-items-center'>
      <Link to={'/'} className="btn btn-outline-none text-light mx-2 rounded-pill m-0 p-1 d-flex align-items-center justify-content-center fs-6 addEstimate">
          <AiOutlinePlus ></AiOutlinePlus>
           <span className='mx-2'>
            add
           </span>
         </Link> 
      </div>
       {/* Add and search bar end */}
       <div className='col-12 mt-3 m-0 p-0'>
          {
            EstimatedtabIndex===0?<EstimateBrowse data='Sale'></EstimateBrowse>:null
          }
          {
            EstimatedtabIndex===1?<EstimateSearch data='Sale'></EstimateSearch>:null
          }
       </div>
      </div>

    </div>
  )
}

export default SalePurposalTemplate