import React,{useState} from 'react'
import CommonMatching from '../AccountingBody/CommonComponents/CommonMatching';
import CommonComponentOne from '../AccountingBody/CommonComponents/CommonComponentOne';
import EmployeeTimeActivityPartOne from './EmployeeTimeActivityPartOne';
import EmployeeTimeActivityPartTwo from './EmployeeTimeActivityPartTwo';
import EmployeeTimeActivityPartThree from './EmployeeTimeActivityPartThree';
import EmployeeTimeActivityPartFour from './EmployeeTimeActivityPartFour';
const EmployeeTimeActivity = (props) => {
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
            case 3:
              setEstimatedtabIndex(index);
          break;
        default:
            break;
     }
  }
  return (
    <div className='row p-2 m-0'>
     <div className='col-12 bg-dark py-2 d-flex clearfix subpageTitleHeading'>
      <div className='row w-100 m-0 p-0'> 
       <div className='col-12 m-0 p-2 bg-dark text-light d-flex flex-row'>
        <h1 className='sabpageheading flex-start'>{props.data}  for Ever Technologies <span className='fw-normal'>LTD</span></h1>
      </div>
     </div>
    </div>
    {/* menu row start */}
    <div className='row m-0 py-2 p-0 border border-1'>
     <div className={EstimatedtabIndex===0?'col-2 text-light bg-transparent d-flex align-items-center justify-content-center m-0 p-2':'col-2 text-light d-flex align-items-center justify-content-center bg-dark m-0 p-2'}  onClick={()=>{updateTabIndex(0)}}>
      <CommonComponentOne tabName='Time & Activity'></CommonComponentOne>
      </div>
      <div className={EstimatedtabIndex===1?'col-2 text-light bg-transparent d-flex align-items-center justify-content-center m-0 p-2':'col-2 text-light d-flex align-items-center justify-content-center bg-dark m-0 p-2'}  onClick={()=>{updateTabIndex(1)}}>
      <CommonComponentOne tabName='Screenshots'></CommonComponentOne>
      </div>
      <div className={EstimatedtabIndex===2?'col-2 text-light bg-transparent d-flex align-items-center justify-content-center m-0 p-2':'col-2 text-light d-flex align-items-center justify-content-center bg-dark m-0 p-2'}  onClick={()=>{updateTabIndex(2)}}>
      <CommonComponentOne tabName='App'></CommonComponentOne>
      </div>
      <div className={EstimatedtabIndex===3?'col-2 text-light bg-transparent d-flex align-items-center justify-content-center m-0 p-2':'col-2 text-light d-flex align-items-center justify-content-center bg-dark m-0 p-2'}  onClick={()=>{updateTabIndex(3)}}>
      <CommonComponentOne tabName='Visited Data'></CommonComponentOne>
      </div>
      {/* Time activity sub parts start from here */}
      <div className='col-12 m-0 px-4 p-2'>
         <div className='row m-0 p-0 d-flex justify-content-end border border-2 border-danger'>
         <div className='col-2'>
                <select className="mt-1 mb-2 form-select bg-dark text-light border-0 outline-none" aria-label="Default select example">
                <option  value="3" selected>
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                 <label className="form-check-label text-capitalize" for="flexRadioDefault1">
                    Select Source
                 </label>
                </option>
                <option  value="3">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                 <label className="form-check-label text-capitalize" for="flexRadioDefault1">
                   desktop
                 </label>
                </option>
                <option  value="3">
                <input className="form-check-input bg-light" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                 <label className="form-check-label text-capitalize" for="flexRadioDefault1">
                   hubstaff
                 </label>
                </option>
            </select>
         </div>
         </div>
      </div>
      {
        EstimatedtabIndex===0?<EmployeeTimeActivityPartOne></EmployeeTimeActivityPartOne>:null
      }
      {
        EstimatedtabIndex===1?<EmployeeTimeActivityPartTwo></EmployeeTimeActivityPartTwo>:null
      }
      {
        EstimatedtabIndex===2?<EmployeeTimeActivityPartThree></EmployeeTimeActivityPartThree>:null
      }
      {
        EstimatedtabIndex===3?<EmployeeTimeActivityPartFour></EmployeeTimeActivityPartFour>:null
      }
            {/* Time activity sub parts Ends here */}
    </div>
    {/* menu row end */}
   </div>
  )
}

export default EmployeeTimeActivity