import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import { BiArrowBack } from "react-icons/bi";
import {FcOnlineSupport } from "react-icons/fc";
import Styles from '../../../../Assets/Styles/GlobalStyle'
import {BsCalendarWeekFill} from 'react-icons/bs'
import Calendar from 'react-calendar';
const SalePurposalTemplateRegister = (props) => {
  const [valueTwo,setvalueTwo] = useState(new Date());
    const [showCalTwo,setcalanderTwo]= useState(false);
    const [hideCalenderTwo,sethideCalenderTwo] = useState(valueTwo);
    const showCalender=(type,state)=>{
      switch (type) {
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
      <div className='row m-0 pb-3 px-2 p-0 shadow'>
      <div className='col-12 mt-0 m-0 pt-3 p-1 text-light d-flex flex-row rounded'>
         <div className='row m-0 p-0 w-100'>
         <div className='col-6 m-0 p-0 d-flex flex-column'>
          <small className='text-muted fw-bold mx-1 mb-2 m-0 p-0'>Author</small>
         <div className="btn-group border-0 outline-none w-50">
              <button type="button" className="btn bg-dark text-light p-2 border-none outline-none shadow clearfix" style={{color:Styles.themeLightColor}} data-bs-toggle="dropdown" aria-expanded="false">
              <p className='m-0 p-0 float-start'>  
              <button className='m-0 border border-0' style={{borderRadius:Styles.generalBorderRadius}}>All</button>
                 <span className='mx-2'>
                    All Employees
                 </span>
              </p>             
              <i className="fas fa-angle-down m-0 p-0 float-end"></i>
              </button>
              
              <ul className="dropdown-menu dropdown-menu-end py-0 employeeList w-100" style={{height:'35vh',overflow:'hidden',overflowY:'scroll',backgroundColor:Styles.themeLightDarkColor,color:Styles.themeLightColor,borderRadius:Styles.generalBorderSimpleRadius}}>
                <li className='m-0 p-0'>
                  <button className="dropdown-item" type="button" 
                    style={{
                     color:Styles.themeDarkColor,
                     backgroundColor:Styles.themeLightColor
                     }}>
                  All Employees
                   </button>
                </li>
                <li className='p-2 shadow hoverOverMe'>
                 <FcOnlineSupport className='fs-3'></FcOnlineSupport>
                  <span className='mx-2'>Amir nawaz</span>
                </li>
                <li className='p-2 shadow hoverOverMe'>
                 <FcOnlineSupport className='fs-3'></FcOnlineSupport>
                  <span className='mx-2'>Amir nawaz</span>
                </li>
                <li className='p-2 shadow hoverOverMe'>
                 <FcOnlineSupport className='fs-3'></FcOnlineSupport>
                  <span className='mx-2'>Amir nawaz</span>
                </li>
                <li className='p-2 shadow hoverOverMe'>
                 <FcOnlineSupport className='fs-3'></FcOnlineSupport>
                  <span className='mx-2'>Amir nawaz</span>
                </li>
                <li className='p-2 shadow hoverOverMe'>
                 <FcOnlineSupport className='fs-3'></FcOnlineSupport>
                  <span className='mx-2'>Amir nawaz</span>
                </li>
                <li className='p-2 shadow hoverOverMe'>
                 <FcOnlineSupport className='fs-3'></FcOnlineSupport>
                  <span className='mx-2'>Amir nawaz</span>
                </li>
                <li className='p-2 shadow hoverOverMe'>
                 <FcOnlineSupport className='fs-3'></FcOnlineSupport>
                  <span className='mx-2'>Amir nawaz</span>
                </li>
                <li className='p-2 shadow hoverOverMe'>
                 <FcOnlineSupport className='fs-3'></FcOnlineSupport>
                  <span className='mx-2'>Amir nawaz</span>
                </li>
                <li className='p-2 shadow hoverOverMe'>
                 <FcOnlineSupport className='fs-3'></FcOnlineSupport>
                  <span className='mx-2'>Amir nawaz</span>
                </li>
                <li className='p-2 shadow hoverOverMe'>
                 <FcOnlineSupport className='fs-3'></FcOnlineSupport>
                  <span className='mx-2'>Amir nawaz</span>
                </li>
                
              </ul>
            </div>
         </div>
         </div>
      </div>

      <div className='col-12 mt-3 m-0 p-1 text-light d-flex flex-row rounded '>
         <div className='row m-0 p-0 w-25'>
         <div className='col-12 m-0 p-0 d-flex flex-column'>
          <small className='text-muted fw-bold mx-1 mb-2 m-0 p-0'>Template</small>
         <div className="btn-group border-0 outline-none w-100">
              <button type="button" className="btn bg-dark text-light p-2 border-none outline-none shadow clearfix" style={{color:Styles.themeLightColor}} data-bs-toggle="dropdown" aria-expanded="false">
              <p className='m-0 p-0 float-start'>  
                 <span className='mx-2'>
                    Select Proposal Template
                 </span>
              </p>             
              <i className="fas fa-angle-down m-0 p-0 float-end"></i>
              </button>
              
              <ul className="dropdown-menu dropdown-menu-end py-0 employeeList w-100" style={{height:'35vh',overflow:'hidden',overflowY:'scroll',backgroundColor:Styles.themeLightDarkColor,color:Styles.themeLightColor,borderRadius:Styles.generalBorderSimpleRadius}}>
                <li className='m-0 p-0'>
                  <button className="dropdown-item" type="button" 
                    style={{
                     color:Styles.themeDarkColor,
                     backgroundColor:Styles.themeLightColor
                     }}>
                  All Employees
                   </button>
                </li>
                <li className='p-2 shadow hoverOverMe'>
                 <FcOnlineSupport className='fs-3'></FcOnlineSupport>
                  <span className='mx-2'>Amir nawaz</span>
                </li>
                <li className='p-2 shadow hoverOverMe'>
                 <FcOnlineSupport className='fs-3'></FcOnlineSupport>
                  <span className='mx-2'>Amir nawaz</span>
                </li>
                <li className='p-2 shadow hoverOverMe'>
                 <FcOnlineSupport className='fs-3'></FcOnlineSupport>
                  <span className='mx-2'>Amir nawaz</span>
                </li>
                <li className='p-2 shadow hoverOverMe'>
                 <FcOnlineSupport className='fs-3'></FcOnlineSupport>
                  <span className='mx-2'>Amir nawaz</span>
                </li>
                <li className='p-2 shadow hoverOverMe'>
                 <FcOnlineSupport className='fs-3'></FcOnlineSupport>
                  <span className='mx-2'>Amir nawaz</span>
                </li>
                <li className='p-2 shadow hoverOverMe'>
                 <FcOnlineSupport className='fs-3'></FcOnlineSupport>
                  <span className='mx-2'>Amir nawaz</span>
                </li>
                <li className='p-2 shadow hoverOverMe'>
                 <FcOnlineSupport className='fs-3'></FcOnlineSupport>
                  <span className='mx-2'>Amir nawaz</span>
                </li>
                <li className='p-2 shadow hoverOverMe'>
                 <FcOnlineSupport className='fs-3'></FcOnlineSupport>
                  <span className='mx-2'>Amir nawaz</span>
                </li>
                <li className='p-2 shadow hoverOverMe'>
                 <FcOnlineSupport className='fs-3'></FcOnlineSupport>
                  <span className='mx-2'>Amir nawaz</span>
                </li>
                <li className='p-2 shadow hoverOverMe'>
                 <FcOnlineSupport className='fs-3'></FcOnlineSupport>
                  <span className='mx-2'>Amir nawaz</span>
                </li>
                
              </ul>
            </div>
         </div>
        </div>
        {/* Second menu */}
        <div className='row m-0 px-2 p-0 w-25 g-3'>
         <div className='col-12 m-0 p-0 d-flex flex-column'>
          <small className='text-muted fw-bold mx-1 mb-2 m-0 p-0'>Contact</small>
         <div className="btn-group border-0 outline-none w-100">
              <button type="button" className="btn bg-dark text-light p-2 border-none outline-none shadow clearfix" style={{color:Styles.themeLightColor}} data-bs-toggle="dropdown" aria-expanded="false">
              <p className='m-0 p-0 float-start'>  
                 <span className='mx-2'>
                    Contact
                 </span>
              </p>             
              <i className="fas fa-angle-down m-0 p-0 float-end"></i>
              </button>
              
              <ul className="dropdown-menu dropdown-menu-end py-0 employeeList w-100" style={{height:'35vh',overflow:'hidden',overflowY:'scroll',backgroundColor:Styles.themeLightDarkColor,color:Styles.themeLightColor,borderRadius:Styles.generalBorderSimpleRadius}}>
                <li className='m-0 p-0'>
                  <button className="dropdown-item" type="button" 
                    style={{
                     color:Styles.themeDarkColor,
                     backgroundColor:Styles.themeLightColor
                     }}>
                  All Employees
                   </button>
                </li>
                <li className='p-2 shadow hoverOverMe'>
                 <FcOnlineSupport className='fs-3'></FcOnlineSupport>
                  <span className='mx-2'>Amir nawaz</span>
                </li>
                <li className='p-2 shadow hoverOverMe'>
                 <FcOnlineSupport className='fs-3'></FcOnlineSupport>
                  <span className='mx-2'>Amir nawaz</span>
                </li>
                <li className='p-2 shadow hoverOverMe'>
                 <FcOnlineSupport className='fs-3'></FcOnlineSupport>
                  <span className='mx-2'>Amir nawaz</span>
                </li>
                <li className='p-2 shadow hoverOverMe'>
                 <FcOnlineSupport className='fs-3'></FcOnlineSupport>
                  <span className='mx-2'>Amir nawaz</span>
                </li>
                <li className='p-2 shadow hoverOverMe'>
                 <FcOnlineSupport className='fs-3'></FcOnlineSupport>
                  <span className='mx-2'>Amir nawaz</span>
                </li>
                <li className='p-2 shadow hoverOverMe'>
                 <FcOnlineSupport className='fs-3'></FcOnlineSupport>
                  <span className='mx-2'>Amir nawaz</span>
                </li>
                <li className='p-2 shadow hoverOverMe'>
                 <FcOnlineSupport className='fs-3'></FcOnlineSupport>
                  <span className='mx-2'>Amir nawaz</span>
                </li>
                <li className='p-2 shadow hoverOverMe'>
                 <FcOnlineSupport className='fs-3'></FcOnlineSupport>
                  <span className='mx-2'>Amir nawaz</span>
                </li>
                <li className='p-2 shadow hoverOverMe'>
                 <FcOnlineSupport className='fs-3'></FcOnlineSupport>
                  <span className='mx-2'>Amir nawaz</span>
                </li>
                <li className='p-2 shadow hoverOverMe'>
                 <FcOnlineSupport className='fs-3'></FcOnlineSupport>
                  <span className='mx-2'>Amir nawaz</span>
                </li>
                
              </ul>
            </div>
         </div>
        </div>
        {/* Second menu end */}
      </div>

     {/* Second menu start*/}
     <div className='col-12 mt-3 m-0 p-1 text-light d-flex flex-row rounded'>
         <div className='row m-0 p-0 w-50'>
         <div className='col-12 m-0 p-0 d-flex flex-column'>
          <small className='text-muted fw-bold mx-1 mb-2 m-0 p-0'>Job Post URL</small>
         <div className="btn-group border-0 outline-none w-100">
              <button type="button" className="btn bg-dark text-light p-2 border-none outline-none shadow clearfix" style={{color:Styles.themeLightColor}} data-bs-toggle="dropdown" aria-expanded="false">
              <p className='m-0 p-0 float-start'>  
                 <span className='mx-2 text-muted fs-normal'>
                    Job Post URL
                 </span>
              </p>             
              <i className="fas fa-angle-down m-0 p-0 float-end"></i>
              </button>
              
              <ul className="dropdown-menu dropdown-menu-end py-0 employeeList w-100" style={{height:'35vh',overflow:'hidden',overflowY:'scroll',backgroundColor:Styles.themeLightDarkColor,color:Styles.themeLightColor,borderRadius:Styles.generalBorderSimpleRadius}}>
                <li className='m-0 p-0'>
                  <button className="dropdown-item" type="button" 
                    style={{
                     color:Styles.themeDarkColor,
                     backgroundColor:Styles.themeLightColor
                     }}>
                  All Employees
                   </button>
                </li>
                <li className='p-2 shadow hoverOverMe'>
                 <FcOnlineSupport className='fs-3'></FcOnlineSupport>
                  <span className='mx-2'>Amir nawaz</span>
                </li>
                <li className='p-2 shadow hoverOverMe'>
                 <FcOnlineSupport className='fs-3'></FcOnlineSupport>
                  <span className='mx-2'>Amir nawaz</span>
                </li>
                <li className='p-2 shadow hoverOverMe'>
                 <FcOnlineSupport className='fs-3'></FcOnlineSupport>
                  <span className='mx-2'>Amir nawaz</span>
                </li>
                <li className='p-2 shadow hoverOverMe'>
                 <FcOnlineSupport className='fs-3'></FcOnlineSupport>
                  <span className='mx-2'>Amir nawaz</span>
                </li>
                <li className='p-2 shadow hoverOverMe'>
                 <FcOnlineSupport className='fs-3'></FcOnlineSupport>
                  <span className='mx-2'>Amir nawaz</span>
                </li>
                <li className='p-2 shadow hoverOverMe'>
                 <FcOnlineSupport className='fs-3'></FcOnlineSupport>
                  <span className='mx-2'>Amir nawaz</span>
                </li>
                <li className='p-2 shadow hoverOverMe'>
                 <FcOnlineSupport className='fs-3'></FcOnlineSupport>
                  <span className='mx-2'>Amir nawaz</span>
                </li>
                <li className='p-2 shadow hoverOverMe'>
                 <FcOnlineSupport className='fs-3'></FcOnlineSupport>
                  <span className='mx-2'>Amir nawaz</span>
                </li>
                <li className='p-2 shadow hoverOverMe'>
                 <FcOnlineSupport className='fs-3'></FcOnlineSupport>
                  <span className='mx-2'>Amir nawaz</span>
                </li>
                <li className='p-2 shadow hoverOverMe'>
                 <FcOnlineSupport className='fs-3'></FcOnlineSupport>
                  <span className='mx-2'>Amir nawaz</span>
                </li>
                
              </ul>
            </div>
         </div>
        </div>
        {/* Second menu */}
        <div className='row m-0 px-2 p-0 w-25 g-3'>
         <div className='col-12 m-0 p-0 d-flex flex-column'>
          <span className='text-muted fw-bold mx-1 mb-2 m-0 p-0'>Proposal Date</span>
         <div className="m-0 p-0 btn-group  border border-0 outline-none w-100">
               
         <div class="col-12 m-0 p-0 bg-dark">
              {/* <samll className="text-muted mb-3 EstimateSearchTitle fw-bold">Due Date</samll> */}
                 <div class="m-0 bg-dark text-muted rounded p-0">
                 {
            valueTwo.toDateString() === hideCalenderTwo.toDateString()?
             <div className="mt-0 mb-2 p-2 text-muted position-relative clearfix " onClick={()=>{showCalender(2,1)}} style={{cursor:'pointer'}}>
               <span className='estimateFormFeilds float-start text-muted'>
                 Due date
               </span>
                <div className='mt-3 text-light position-absolute' style={{display:showCalTwo?'block':'none'}}>
                     <Calendar onChange={setvalueTwo} value={valueTwo} />
                </div>
                <BsCalendarWeekFill className='text-light float-end'></BsCalendarWeekFill>
             </div>:
             <div className="mt-0 mb-2 p-2 text-muted position-relative clearfix" onClick={()=>{sethideCalenderTwo(valueTwo)}}>
               <small className='estimateFormFeilds float-start text-muted'>{valueTwo.toDateString()}</small>
                <div className='mt-3 text-light position-absolute' style={{display:'none'}}>
                     <Calendar onChange={setvalueTwo} value={valueTwo} />
                </div>
                <BsCalendarWeekFill className='text-light float-end'></BsCalendarWeekFill>
             </div>
           }
                 </div>
              </div>


              {/* <button type="button" className="btn bg-dark text-light p-2 border-none outline-none shadow clearfix" style={{color:Styles.themeLightColor}} data-bs-toggle="dropdown" aria-expanded="false">
              <p className='m-0 p-0 float-start'>  
                 <span className='mx-2'>
                    Contact
                 </span>
              </p>             
              <i className="fas fa-angle-down m-0 p-0 float-end"></i>
              </button>
              
              <ul className="dropdown-menu dropdown-menu-end py-0 employeeList w-100" style={{height:'35vh',overflow:'hidden',overflowY:'scroll',backgroundColor:Styles.themeLightDarkColor,color:Styles.themeLightColor,borderRadius:Styles.generalBorderSimpleRadius}}>
                <li className='m-0 p-0'>
                  <button className="dropdown-item" type="button" 
                    style={{
                     color:Styles.themeDarkColor,
                     backgroundColor:Styles.themeLightColor
                     }}>
                  All Employees
                   </button>
                </li>
                <li className='p-2 shadow hoverOverMe'>
                 <FcOnlineSupport className='fs-3'></FcOnlineSupport>
                  <span className='mx-2'>Amir nawaz</span>
                </li>
                <li className='p-2 shadow hoverOverMe'>
                 <FcOnlineSupport className='fs-3'></FcOnlineSupport>
                  <span className='mx-2'>Amir nawaz</span>
                </li>
                <li className='p-2 shadow hoverOverMe'>
                 <FcOnlineSupport className='fs-3'></FcOnlineSupport>
                  <span className='mx-2'>Amir nawaz</span>
                </li>
                <li className='p-2 shadow hoverOverMe'>
                 <FcOnlineSupport className='fs-3'></FcOnlineSupport>
                  <span className='mx-2'>Amir nawaz</span>
                </li>
                <li className='p-2 shadow hoverOverMe'>
                 <FcOnlineSupport className='fs-3'></FcOnlineSupport>
                  <span className='mx-2'>Amir nawaz</span>
                </li>
                <li className='p-2 shadow hoverOverMe'>
                 <FcOnlineSupport className='fs-3'></FcOnlineSupport>
                  <span className='mx-2'>Amir nawaz</span>
                </li>
                <li className='p-2 shadow hoverOverMe'>
                 <FcOnlineSupport className='fs-3'></FcOnlineSupport>
                  <span className='mx-2'>Amir nawaz</span>
                </li>
                <li className='p-2 shadow hoverOverMe'>
                 <FcOnlineSupport className='fs-3'></FcOnlineSupport>
                  <span className='mx-2'>Amir nawaz</span>
                </li>
                <li className='p-2 shadow hoverOverMe'>
                 <FcOnlineSupport className='fs-3'></FcOnlineSupport>
                  <span className='mx-2'>Amir nawaz</span>
                </li>
                <li className='p-2 shadow hoverOverMe'>
                 <FcOnlineSupport className='fs-3'></FcOnlineSupport>
                  <span className='mx-2'>Amir nawaz</span>
                </li>
                
              </ul> */}
            </div>
         </div>
        </div>
        {/* 3rd Option Start*/}
        <div className='row m-0 px-2 p-0 w-25 g-3'>
         <div className='col-12 m-0 p-0 d-flex flex-column'>
          <small className='text-muted fw-bold mx-1 mb-2 m-0 p-0'>Tags</small>
         <div className="btn-group border-0 outline-none w-100">
              <button type="button" className="btn bg-dark text-light p-2 border-none outline-none shadow clearfix" style={{color:Styles.themeLightColor}} data-bs-toggle="dropdown" aria-expanded="false">
              <p className='m-0 p-0 float-start'>  
                 <span className='mx-2'>
                    Tags
                 </span>
              </p>             
              <i className="fas fa-angle-down m-0 p-0 float-end"></i>
              </button>
              
              <ul className="dropdown-menu dropdown-menu-end py-0 employeeList w-100" style={{height:'35vh',overflow:'hidden',overflowY:'scroll',backgroundColor:Styles.themeLightDarkColor,color:Styles.themeLightColor,borderRadius:Styles.generalBorderSimpleRadius}}>
                <li className='m-0 p-0'>
                  <button className="dropdown-item" type="button" 
                    style={{
                     color:Styles.themeDarkColor,
                     backgroundColor:Styles.themeLightColor
                     }}>
                  All Employees
                   </button>
                </li>
                <li className='p-2 shadow hoverOverMe'>
                 <FcOnlineSupport className='fs-3'></FcOnlineSupport>
                  <span className='mx-2'>Amir nawaz</span>
                </li>
                <li className='p-2 shadow hoverOverMe'>
                 <FcOnlineSupport className='fs-3'></FcOnlineSupport>
                  <span className='mx-2'>Amir nawaz</span>
                </li>
                <li className='p-2 shadow hoverOverMe'>
                 <FcOnlineSupport className='fs-3'></FcOnlineSupport>
                  <span className='mx-2'>Amir nawaz</span>
                </li>
                <li className='p-2 shadow hoverOverMe'>
                 <FcOnlineSupport className='fs-3'></FcOnlineSupport>
                  <span className='mx-2'>Amir nawaz</span>
                </li>
                <li className='p-2 shadow hoverOverMe'>
                 <FcOnlineSupport className='fs-3'></FcOnlineSupport>
                  <span className='mx-2'>Amir nawaz</span>
                </li>
                <li className='p-2 shadow hoverOverMe'>
                 <FcOnlineSupport className='fs-3'></FcOnlineSupport>
                  <span className='mx-2'>Amir nawaz</span>
                </li>
                <li className='p-2 shadow hoverOverMe'>
                 <FcOnlineSupport className='fs-3'></FcOnlineSupport>
                  <span className='mx-2'>Amir nawaz</span>
                </li>
                <li className='p-2 shadow hoverOverMe'>
                 <FcOnlineSupport className='fs-3'></FcOnlineSupport>
                  <span className='mx-2'>Amir nawaz</span>
                </li>
                <li className='p-2 shadow hoverOverMe'>
                 <FcOnlineSupport className='fs-3'></FcOnlineSupport>
                  <span className='mx-2'>Amir nawaz</span>
                </li>
                <li className='p-2 shadow hoverOverMe'>
                 <FcOnlineSupport className='fs-3'></FcOnlineSupport>
                  <span className='mx-2'>Amir nawaz</span>
                </li>
                
              </ul>
            </div>
         </div>
        </div>

        {/* 3ed option end */}
        {/* Second menu end */}
      </div>
       

       </div>
     {/* Second menu end */}
     {/* 3rd menu start */}
        
       <div className='col-12 bg-dark mt-0 m-0 py-2 p-1 text-light d-flex flex-row rounded'>
       <button className='bg-dark text-secondary mx-2 m-0  py-1 p-0 d-flex align-items-center justify-content-center rounded-pill addEstimateOperation '>Register Proposal</button> 
       </div> 
        
     {/* 3rd menu end */}
    </div>
  )
}

export default SalePurposalTemplateRegister