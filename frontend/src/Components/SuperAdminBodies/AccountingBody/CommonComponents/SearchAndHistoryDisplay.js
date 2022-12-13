import React,{useState} from 'react'
import {FaAngleDown} from 'react-icons/fa'
import {BsCalendarWeekFill} from 'react-icons/bs'
import Calendar from 'react-calendar';
import '../../../Body.css'
const SearchAndHistoryDisplay = (props) => {
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
    <div className='row m-0 p-2'>
      <div className='conatiner-fluid m-0 p-0'>
         <div className='row m-0 p-0 '>
           <div className='col-12 m-0 p-0'>
           <p>
                <button class="m-0 btn btn-dark w-100 clearfix" style={{backgroundColor:'#1a1e21'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                   <sapn className="float-start">
                     Estimates {props.data}
                   </sapn>
                   <sapn className="float-end">
                     <FaAngleDown></FaAngleDown>
                   </sapn>
                </button>
           </p>
           <div class="collapse m-0 py-3 p-2" style={{backgroundColor:'#26262e'}} id="collapseExample">
            <div className='conatiner-fluid m-0 p-0'>
              <div className='row m-0 p-0 gap-2'>
              <div className="col-4">
                 <samll className="text-muted mb-3 EstimateSearchTitle fw-bold">Estimate Number</samll>
                 <div class="mt-2 p-0 bg-dark text-muted rounded shadow">
                   <input placeholder='Estimate Number' className='p-1 w-100 bg-transparent border-0 outline-none rounded' type={'number'}></input>
                 </div>
              </div>
              <div class="col-3">
                 <samll className="text-muted mb-3 EstimateSearchTitle fw-bold">Estimate Date</samll>  
                 <div className="mt-2 bg-dark text-muted rounded shadow">
                 {
                   value.toDateString() === hideCalender.toDateString()?
                   <div className="mt-1 mb-2 p-2 bg-dark text-muted shadow position-relative clearfix" onClick={()=>{showCalender(1,1)}} style={{cursor:'pointer'}}>
                      <small className='estimateFormFeilds float-start text-muted'>
                        Estiamte Date
                      </small>
                       <div className='mt-3 text-light position-absolute' style={{display:showCal?'block':'none'}}>
                            <Calendar  onChange={setvalue} value={value} />
                       </div>
                       <BsCalendarWeekFill className='text-light float-end'></BsCalendarWeekFill>
                       
                    </div>:
                    <div className="mt-1 mb-2 p-2 bg-dark text-muted shadow position-relative clearfix" onClick={()=>{sethideCalender(value)}}>
                      <small className='estimateFormFeilds'>{value.toDateString()}</small>
                       <div className='mt-3 text-light position-absolute float-start' style={{display:'none'}}>
                            <Calendar  onChange={setvalue} value={value} />
                       </div>
                       <BsCalendarWeekFill className='text-light float-end'></BsCalendarWeekFill>
                    </div>
                  }
                 </div>
              </div>
              <div class="col-3">
              <samll className="text-muted mb-3 EstimateSearchTitle fw-bold">Due Date</samll>
                 <div class="mt-2 bg-dark text-muted rounded shadow">
                 {
            valueTwo.toDateString() === hideCalenderTwo.toDateString()?
             <div className="mt-1 mb-2 p-2 bg-dark text-muted shadow position-relative clearfix" onClick={()=>{showCalender(2,1)}} style={{cursor:'pointer'}}>
               <small className='estimateFormFeilds float-start text-muted'>
                 Due date
               </small>
                <div className='mt-3 text-light position-absolute' style={{display:showCalTwo?'block':'none'}}>
                     <Calendar onChange={setvalueTwo} value={valueTwo} />
                </div>
                <BsCalendarWeekFill className='text-light float-end'></BsCalendarWeekFill>
             </div>:
             <div className="mt-1 mb-2 p-2 bg-dark text-muted shadow position-relative clearfix" onClick={()=>{sethideCalenderTwo(valueTwo)}}>
               <small className='estimateFormFeilds float-start text-muted'>{valueTwo.toDateString()}</small>
                <div className='mt-3 text-light position-absolute' style={{display:'none'}}>
                     <Calendar onChange={setvalueTwo} value={valueTwo} />
                </div>
                <BsCalendarWeekFill className='text-light float-end'></BsCalendarWeekFill>
             </div>
           }
                 </div>
              </div>
              <div class="mt-3 col-3">
                 <samll className="text-muted mb-3 EstimateSearchTitle fw-bold">Contact</samll>
                 <div class="mt-2 p-2 bg-dark text-muted rounded shadow">
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
              <div class="mt-3 col-2">
              <samll className="text-muted mb-3 EstimateSearchTitle fw-bold">Totall value</samll>
                 <div class="mt-2 p-2 bg-dark text-muted rounded shadow">
                 <input placeholder='Estimate Number' className='estimateFormFeilds p-1 w-100 bg-transparent border-0 outline-none rounded' type={'number'}></input>
                 </div>
              </div>
              <div class="mt-3 col-2">
              <samll className="text-muted mb-3 EstimateSearchTitle fw-bold">Currency</samll>
                 <div class="mt-2 p-2 bg-dark text-muted rounded shadow">
                 <div className="dropdown w-100 bg-transparent m-0 p-0">
                  <button className="estimateFormFeilds p-1 clearfix btn text-muted w-100 outline-none border-none border-0" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">             
                   <span className='float-start m-0 p-0'>Bulgarian Lev</span>
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
              <div class="mt-3 col-2">
              <samll className="text-muted mb-3 EstimateSearchTitle fw-bold">Tags</samll>
                 <div class="mt-2 p-2 bg-dark text-muted rounded shadow">
                 <div className="dropdown w-100 bg-transparent m-0 p-0">
                  <button className="estimateFormFeilds p-1 clearfix btn text-muted w-100 outline-none border-none border-0" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">             
                   <span className='float-start m-0 p-0'>Tags</span>
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
              <div class="mt-3 col-2">
              <samll className="text-muted mb-3 EstimateSearchTitle fw-bold">Status</samll>
                 <div class="mt-2 p-2 bg-dark text-muted rounded shadow">
                 <div className="dropdown w-100 bg-transparent m-0 p-0">
                  <button className="estimateFormFeilds p-1 clearfix btn text-muted w-100 outline-none border-none border-0" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">             
                   <span className='float-start m-0 p-0'>Status</span>
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
              <div class="mt-1 col-3">
              
                 <div class="mt-2 p-0 text-muted rounded">
                  <button className='btn rounded-pill text-light fw-bold estimateSearch'>Search</button> 
                  <button className='mx-2 btn rounded-pill bg-dark border border-1 text-muted fw-bold'>Reset</button>      
                 </div>
              </div>
              </div>
            </div>
           </div>
           </div>
           {/* Sliding Menu end*/}
           <div className='col-12 m-0 p-0'>

           </div>
           <div className='col-12 m-0 p-0'>

           </div>
         </div> 
      </div>
     </div>
  )
}

export default SearchAndHistoryDisplay