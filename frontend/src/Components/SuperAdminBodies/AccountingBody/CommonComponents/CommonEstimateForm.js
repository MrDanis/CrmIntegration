import React,{useState} from 'react'
import Calendar from 'react-calendar';
import '../../../Body.css'
import {FaAngleDown} from 'react-icons/fa'
const CommonEstimateForm = () => {
    const [value, setvalue] = useState(new Date());
    const [showCal,setshowCal]= useState(false);
    const [hideCalender,sethideCalender] = useState(value);
    const [valueTwo,setvalueTwo] = useState(new Date());
    const [showCalTwo,setcalanderTwo]= useState(false);
    const [hideCalenderTwo,sethideCalenderTwo] = useState(valueTwo);
    const showCalender=(type,state)=>{
     switch (type) {
        case 1:
            
        switch (state) {
            case 0:
                setshowCal(false);
                break;
                case 1:
                setshowCal(true);
                break;
            default:
                break;
        }
            break;
        case 2:
              
          switch (state) {
            case 0:
              setcalanderTwo(false);
                break;
                case 1:
              setcalanderTwo(true);
                break;
            default:
                break;
        }        

            break;
        default:
            break;
     }
    }
  return (
    <div className='col-12 m-0 p-3'>
       <div className='comtainer-fluid m-0 p-0'>
       <div className="row gx-4 g-1">
         <div className="col-6">
            <small className='m-0 p-0 fs-6'>Estimate number</small>
           <div className="mt-1 mb-2 p-1 bg-dark text-muted shadow ">
            <input type={'number'} placeholder='Enter Number' className='w-100 estimateFormFeilds bg-transparent outline-none border-0 text-muted'>
            </input>
           </div>
         </div>
         <div className="col-6">
           <small className='m-0 p-0 fs-6'>Contact</small>
           <div className="mt-1 mb-2 p-1 bg-dark text-muted shadow">
           <div className="dropdown w-100 bg-transparent m-0 p-0">
             <button className="estimateFormFeilds p-1 clearfix btn text-muted w-100 outline-none border-none border-0" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">             
              <span className='float-start m-0 p-0'>All Contacts</span>
              <FaAngleDown className='float-end'></FaAngleDown> 
            </button>
              <ul className="dropdown-menu bg-dark text-light" aria-labelledby="dropdownMenuButton1">
               <li>Action</li>
               <li>Another action</li>
               <li>Something else here</li>
              </ul>
             </div>
           </div>
         </div>
         <div className="col-6">
         <small className='m-0 p-0 fs-6'>Estimate Date</small>
         {/* Conditional randering to show or hide the calender */}
         {
          value.toDateString() === hideCalender.toDateString()?
          <div className="mt-1 mb-2 p-1 bg-dark text-muted shadow" onClick={()=>{showCalender(1,1)}} style={{cursor:'pointer'}}>
             <small className='estimateFormFeilds'>{value.toDateString()}</small>
              <div className='mt-3 text-light' style={{display:showCal?'block':'none'}}>
                   <Calendar  onChange={setvalue} value={value} />
              </div>
           </div>:
           <div className="mt-1 mb-2 p-1 bg-dark text-muted shadow" onClick={()=>{sethideCalender(value)}}>
             <small className='estimateFormFeilds'>{value.toDateString()}</small>
              <div className='mt-3 text-light' style={{display:'none'}}>
                   <Calendar onChange={setvalue} value={value} />
              </div>
           </div>
         }
         </div>
         <div className="col-6">
         <small className='m-0 p-0 fs-6'>Due Date</small>
             {/* Conditional randering to show or hide the calender Two */}
           {
            valueTwo.toDateString() === hideCalenderTwo.toDateString()?
             <div className="mt-1 mb-2 p-1 bg-dark text-muted shadow" onClick={()=>{showCalender(2,1)}} style={{cursor:'pointer'}}>
               <small className='estimateFormFeilds'>{valueTwo.toDateString()}</small>
                <div className='mt-3 text-light' style={{display:showCalTwo?'block':'none'}}>
                     <Calendar onChange={setvalueTwo} value={valueTwo} />
                </div>
             </div>:
             <div className="mt-1 mb-2 p-1 bg-dark text-muted shadow" onClick={()=>{sethideCalenderTwo(valueTwo)}}>
               <small className='estimateFormFeilds'>{valueTwo.toDateString()}</small>
                <div className='mt-3 text-light' style={{display:'none'}}>
                     <Calendar onChange={setvalueTwo} value={valueTwo} />
                </div>
             </div>
           }
         </div>
         {/* currency */}
         <div className="col-6">
           <small className='m-0 p-0 fs-6'>Currency</small>
           <div className="mt-1 mb-2 p-1 bg-dark text-muted outline-none border-none shadow">
           <div className="dropdown w-100 bg-transparent m-0 p-0 outline-none border-none">
             <button className="estimateFormFeilds p-1 clearfix btn text-muted w-100 outline-none border-none border-0" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">             
              <span className='float-start m-0 p-0'>Bulgarian Lev (BGN)</span>
              <FaAngleDown className='float-end'></FaAngleDown> 
            </button>
              <ul className="dropdown-menu bg-dark text-light w-100 p-2 CurrancyRangeer border border-1 border-light" aria-labelledby="dropdownMenuButton1">
               <li>Action</li>
               <li>Another action</li>
               <li>Something else here</li>
               <li>Action</li>
               <li>Another action</li>
               <li>Something else here</li>
               <li>Action</li>
               <li>Another action</li>
               <li>Something else here</li>
              </ul>
             </div>
           </div>
         </div>
         {/*  Terms */}
         <div className="col-12">
           <small className='m-0 p-0 fs-6'>Term</small>
           <div className="mt-1 mb-2 p-1 bg-dark text-muted outline-none border-none shadow">
            <textarea className='m-0 p-1 w-100 bg-dark text-light outline-transparent border-0' style={{minHeight:'15vh'}}></textarea>
           </div>
         </div>
        {/* Tags */}
        <div className="col-12">
           <small className='m-0 p-0 fs-6'>Tags</small>
           <div className="mt-1 mb-2 p-1 bg-dark text-muted shadow">
           <div className="dropdown w-100 bg-transparent m-0 p-0">
             <button className="estimateFormFeilds p-1 clearfix btn text-muted w-100 outline-none border-none border-0" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">             
              <span className='float-start m-0 p-0'>Tags</span>
              <FaAngleDown className='float-end'></FaAngleDown> 
            </button>
              <ul className="dropdown-menu bg-dark text-light w-100 p-2 CurrancyRangeer border border-1 border-light" aria-labelledby="dropdownMenuButton1">
               <li>Action</li>
               <li>Another action</li>
               <li>Something else here</li>
              </ul>
             </div>
           </div>
         </div>
         {/* Select Estiamte */}
         <div className="col-6">
           <small className='m-0 p-0 fs-6'>Select an estimate type</small>
           <div className="mt-1 mb-2 p-1 bg-dark text-muted shadow">
           <div className="dropdown w-100 bg-transparent m-0 p-0">
             <button className="estimateFormFeilds p-1 clearfix btn text-muted w-100 outline-none border-none border-0" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">             
              <span className='float-start m-0 p-0'>Tags</span>
              <FaAngleDown className='float-end'></FaAngleDown> 
            </button>
              <ul className="dropdown-menu bg-dark text-light w-100 p-2 CurrancyRangeer border border-1 border-light" aria-labelledby="dropdownMenuButton1">
               <li>Action</li>
               <li>Another action</li>
               <li>Something else here</li>
              </ul>
             </div>
           </div>
         </div>
        {/* Genrate terms */}
        <div className="col-12 m-0 p-2">
            
         </div>
        </div>
       </div>
    </div>
  )
}

export default CommonEstimateForm