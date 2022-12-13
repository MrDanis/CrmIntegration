import React from 'react'
import './Sidebar.css'
import Styles from '../Assets/Styles/GlobalStyle'
import { Link, Navigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { AiOutlinePlusCircle,AiFillFile,AiOutlineUnorderedList,AiOutlineLineChart,AiFillTag } from "react-icons/ai";
import { FaTelegramPlane,FaFilter,FaFileInvoice,FaCashRegister,FaRegTimesCircle,FaGlobeAmericas,FaTruck } from "react-icons/fa";
import { RiPrinterCloudFil,RiRefreshLine,RiBook2Line,RiFileListFill } from "react-icons/ri";
import { BsPeopleFill,BsFillPersonFill,BsBarChartSteps,BsFillTerminalFill,BsFillPersonCheckFill } from "react-icons/bs";
import { MdAccessTime,MdDateRange,MdOutlineBadge,MdLayers } from "react-icons/md";
import { BiRefresh,BiGridAlt,BiGridVertical,BiHelpCircle } from "react-icons/bi";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional 
import 'tippy.js/themes/light.css'; // optional
import {Login,Logout} from '../Features/UserClice'
import { useNavigate } from 'react-router-dom';
const Sidebar=()=> {
  // const {isLogin} = useSelector((state) => console.log('State of the authentication reducer is ',state))
  // console.log('Login status of the user is : ',isLogin); 

  const { isLogin } = useSelector((state) => state.authUser)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logoutAndNavagate= async()=>  {
   await dispatch(Logout())
   navigate('/');
   window.location.reload(false);
  }
  return (
    <div className='container-fluid mainSidebarBox m-0 p-0'>
       <div className='row m-0 p-0 sidebarMainRow'>
    {/* Is sarey ko ak component main rakhna hai jo is sy nichy hai */}
       <div className='col-2 m-0 py-0  sidebarLogoSection shadow'>
        <div className='row m-0 p-0 adminLogoBox'>

           <div className='col-12 m-0 p-0 admincompanylogbox'>
            <img className="m-0 img-fluid mt-3 mb-3 userImage shadow" src="https://dummyimage.com/330x300/269aff/ffffff.jpg&text=E" alt=""></img>
            <p className='adminAdd m-0 p-1 border border-1 rounded-circle w-100 d-flex justify-content-center align-items-center'>
             <i class="fas fa-plus"></i>
            </p>  
           </div>
           <div className='col-12 m-0 p-0'></div>
           <div className='col-12 my-2 m-0 pb-0  position-relative'>
             <img style={{cursor:'pointer'}} onClick={logoutAndNavagate} className="img-fluid userImage shadow position-absolute bottom-0 start-50 translate-middle-x" src='https://dummyimage.com/330x300/269aff/ffffff.jpg&text=E' alt=""></img>
           </div>
        </div>
       </div>
    {/* Is sarey ko ak component main rakhna hai jo is sy opper hai */}
       <div className='col-9 m-0 py-0 px-0 p-2 sidebarMenuSection'>
         <div className='row m-0 p-0 overflow-auto adminMainMenuBox'>
         <div className='row m-0 p-0'>
             <div className='col-12 m-0 p-0'>
                <div className='container-fluid m-0 p-0'>
                  <div className='row m-0 p-0'>
                  {/* Tittle admin Start    <Tippy placement={'right-end'} theme={"light"} className='bg-light' content={<span> Dashboard</span>}>
                         <button className='bg-transparent outline-none border-0 text-light'>Dashboard</button>
                        </Tippy>*/}
                     <div className='col-9 m-0 p-2'>
                      
                     </div>
                     <div className='col-3 m-0 p-2'>

                     </div>
                  {/* Tittle admin End*/}
                  <div className='col-12 m-0 p-0'>
                  <Link className='m-0 p-0 w-100 text-white text-decoration-none' to={'/AdminDashboard'}>
                  <button className="btn w-100 m-0 p-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                  <Tippy placement={'right-end'} theme={"light"} className='bg-light' content={<span> Dashboard</span>}>
                    <div className='conatiner-fluid m-0 p-1 shadow clearfix' style={{backgroundcolor:Styles.sidebarbackgroundColor}}>
                    <button className='m-0 p-0 bg-transparent float-start border-0' style={{color:Styles.themeLightColor}}> 
                     <i className="fa fa-film fa-lg text-light mx-2"></i>
                      Dashboard
                    </button>
                    <button className='m-0 bg-transparent p-0 float-end border-0'>
                     <i className="fas fa-angle-down text-light mx-2"></i>
                    </button>
                    </div>
                   </Tippy>
                    </button>
                    </Link>
                    <div className="container-fluid m-0 p-0 collapse d-none" id="collapseExample">
                     <div className="row m-0 p-0 card card-body border-0" style={{color:'black',borderRadius:'0px'}}>
                       <div className="col-12 m-0 p-0">
                       <div className="accordion border-0 m-0 bg-dark" id="accordionExample" style={{marginBottom:'0px!important'}}>
                       <div className='container-fluid m-0 p-0'>
                           <div className='row m-0 p-0'>
                             <div className='col-12 m-0 p-0'>
                                <ul className='m-0 p-0'>
                                  <li className='m-0' style={{padding:'.5rem 0rem 0.5rem 2.5rem'}}>
                                     <p className='border border-2 border-success mb-0'>
                                       <i className="far fa-address-card fa-lg"></i>
                                     </p>
                                  </li>
                                </ul>
                             </div>
                           </div>
                       </div>
                       </div>
                      </div>
                     </div>
                    </div>
                    </div>
         {/* Second menu Start */}
                    <div className='col-12 mt-2 mb-2 m-0 p-0 bg-transparent'>
                    <button className="btn w-100 m-0 p-0 btn-outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#Sales" aria-expanded="false" aria-controls="Sales">
                    <Tippy placement={'right-end'} theme={"light"} className='bg-light' content={<span>Accounting</span>}>
                    <div className='conatiner-fluid m-0 p-1 shadow clearfix' style={{backgroundcolor:Styles.sidebarbackgroundColor}}>
                    <button className='m-0 p-0 bg-transparent float-start btn-outline-none border-0' style={{color:Styles.themeLightColor}}> 
                     <i className="fa fa-film fa-lg text-light mx-2"></i>
                      Accounting
                    </button>
                    <button className='m-0 bg-transparent p-0 float-end border-0 btn-outline-none'>
                     <i className="fas fa-angle-down text-light mx-2"></i>
                    </button>
                    </div>
                   </Tippy>
                    </button>
                    <div className="container-fluid m-0 p-0 collapse" id="Sales">
                     <div className="row m-0 p-0 card card-body border-0 bg-transparent">
                       <div className="col-12 m-0 p-0 bg-transparent">
                       <div className="accordion border-0 bg-transparent m-0" id="accordionExample">
                       <div className='container-fluid m-0 p-0'>
                           <div className='row m-0 p-0'>
                             <div className='col-12 m-0 px-2 p-0'>
                                <ul className='m-0 p-0  adminInnerMenuOptions shadow' style={{backgroundColor:Styles.sidebarbackgroundColor}}>
                                <li className='m-0 bg-transparent adminOptions' style={{padding:'.5rem 0rem 0rem 0rem'}}>
                                <Link className='m-0 p-0 text-white text-decoration-none' to={'/Accounting/Estimate'}>
                                <Tippy placement={'right-end'} theme={"light"} className='bg-light' content={<span>Estimate</span>}>
                                     <p className='mb-0 d-flex justify-content-between text-white'>
                                      <span>
                                       <i className="fa fa-file fa-lg mx-2"></i>
                                       Estimate
                                     </span>
                                     <span className='d-flex justify-content-center align-items-center mx-2 fs-4' >
                                       <AiOutlinePlusCircle></AiOutlinePlusCircle>
                                     </span>
                                     </p>
                                </Tippy>
                                </Link>
                                  </li>
                                  <li className='m-0 bg-transparent adminOptions' style={{padding:'.5rem 0rem 0rem 0rem'}}>
                                     <p className='mb-0 text-white'>
                                       <Link className='m-0 p-0 text-white text-decoration-none' to={'/Accounting/EstimateRecived'}>
                                       <Tippy placement={'right-end'} theme={"light"} className='bg-light' content={<span>Estimate Recived</span>}>
                                        <p className='mb-0 d-flex justify-content-between text-white'>
                                         <span>
                                       <i className="fa fa-file-text fa-lg mx-2"></i>
                                          Estimate Recived
                                        </span>
                                        </p>
                                      </Tippy> 
                                      </Link> 
                                     </p>
                                  </li>
                                  <li className='m-0 bg-transparent adminOptions' style={{padding:'.5rem 0rem 0rem 0rem'}}>
                                     <p className='mb-0 text-white'>
                                       <Link className='m-0 p-0 text-white text-decoration-none' to={'/Accounting/Invoices'}>
                                       <Tippy placement={'right-end'} theme={"light"} className='bg-light' content={<span>Invoices</span>}>
                                        <p className='mb-0 d-flex justify-content-between text-white'>
                                         <span>
                                       <i className="fa fa-file-archive fa-lg mx-2"></i>
                                          Invoices
                                        </span>
                                        <span className='d-flex justify-content-center align-items-center mx-2 fs-4' >
                                          <AiOutlinePlusCircle></AiOutlinePlusCircle>
                                        </span>
                                        </p>
                                      </Tippy> 
                                      </Link> 
                                     </p>
                                  </li>
                                  <li className='m-0 bg-transparent adminOptions' style={{padding:'.5rem 0rem 0rem 0rem'}}>
                                     <p className='mb-0 text-white'>
                                       <Link className='m-0 p-0 text-white text-decoration-none' to={'/Accounting/InvoicesRecieved'}>
                                       <Tippy placement={'right-end'} theme={"light"} className='bg-light' content={<span>Invoices Recived</span>}>
                                        <p className='mb-0 d-flex justify-content-between text-white'>
                                         <span>
                                          <i className="fa fa-file-pdf fa-lg mx-2"></i>
                                          Invoices Recived
                                        </span>
                                        {/* <span className='d-flex justify-content-center align-items-center mx-2 fs-4' >
                                          <AiOutlinePlusCircle></AiOutlinePlusCircle>
                                        </span> */}
                                        </p>
                                       </Tippy> 
                                      </Link> 
                                     </p>
                                  </li>
                                  <li className='m-0 bg-transparent adminOptions' style={{padding:'.5rem 0rem 0rem 0rem'}}>
                                     <p className='mb-0 text-white'>
                                       <Link className='m-0 p-0 text-white text-decoration-none' to={'/Accounting/Income'}>
                                       <Tippy placement={'right-end'} theme={"light"} className='bg-light' content={<span>Income</span>}>
                                        <p className='mb-0 d-flex justify-content-between text-white'>
                                         <span>
                                         <i className="fa-solid fa-circle-plus fa-lg mx-2"></i>
                                          Income
                                        </span>
                                        <span className='d-flex justify-content-center align-items-center mx-2 fs-4' >
                                          <AiOutlinePlusCircle></AiOutlinePlusCircle>
                                        </span>
                                        </p>
                                       </Tippy>
                                       </Link>
                                     </p>
                                  </li>
                                  <li className='m-0 bg-transparent adminOptions' style={{padding:'.5rem 0rem 0rem 0rem'}}>
                                     <p className='mb-0 text-white'>
                                       <Link className='m-0 p-0 text-white text-decoration-none' to={'/Accounting/Expenses'}>
                                       <Tippy placement={'right-end'} theme={"light"} className='bg-light' content={<span>Expenses</span>}>
                                        <p className='mb-0 d-flex justify-content-between text-white'>
                                         <span>
                                         <i className="far fa-solid fa-circle-minus fa-lg mx-2"></i>
                                           Expenses
                                        </span>
                                        <span className='d-flex justify-content-center align-items-center mx-2 fs-4' >
                                          <AiOutlinePlusCircle></AiOutlinePlusCircle>
                                        </span>
                                        </p>
                                       </Tippy>
                                       </Link>
                                     </p>
                                  </li>
                                  <li className='m-0 bg-transparent adminOptions' style={{padding:'.5rem 0rem 0rem 0rem'}}>
                                     <p className='mb-0 text-white'>
                                       <Link className='m-0 p-0 text-white text-decoration-none' to={'/Accounting/RecurringExpenses'}>
                                       <Tippy placement={'right-end'} theme={"light"} className='bg-light' content={<span>Recurring Expenses</span>}>
                                        <p className='mb-0 d-flex justify-content-between text-white'>
                                         <span>
                                         <i className="fas fa-wallet fa-lg mx-2"></i>
                                          Recurring Expenses
                                        </span>
                                        <span className='d-flex justify-content-center align-items-center mx-2 fs-4' >
                                          <AiOutlinePlusCircle></AiOutlinePlusCircle>
                                        </span>
                                        </p>
                                       </Tippy>
                                       
                                       </Link>
                                     </p>
                                  </li>
                                  <li className='m-0 bg-transparent adminOptions' style={{padding:'.5rem 0rem 1rem 0rem'}}>
                                     <p className='mb-0 text-white'>

                                       <Link className='m-0 p-0 text-white text-decoration-none' to={'/Accounting/Payments'}>
                                       <Tippy placement={'right-end'} theme={"light"} className='bg-light' content={<span>Payments</span>}>
                                        <p className='mb-0 d-flex justify-content-between text-white'>
                                         <span>
                                         <i className="far fa-address-card fa-lg mx-2"></i>
                                         Payments
                                        </span>
                                        <span className='d-flex justify-content-center align-items-center mx-2 fs-4' >
                                          <AiOutlinePlusCircle></AiOutlinePlusCircle>
                                        </span>
                                        </p>
                                       </Tippy> 
                                       </Link>
                                     </p>
                                  </li>
                                </ul>
                             </div>
                           </div>
                         </div>
                       </div>
                      </div>
                     </div>
                    </div>
                  </div>
                  {/* Second menu end */}
                  {/* 3rd menu Start */}


                  <div className='col-12 mt-2 mb-2 m-0 p-0 bg-transparent'>
                    <button className="btn w-100 m-0 p-0 btn-outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#Accounting" aria-expanded="false" aria-controls="Accounting">
                    <Tippy placement={'right-end'} theme={"light"} className='bg-light' content={<span>Sales</span>}>
                    <div className='conatiner-fluid m-0 p-1 shadow clearfix' style={{backgroundcolor:Styles.sidebarbackgroundColor}}>
                    <button className='m-0 p-0 bg-transparent float-start btn-outline-none border-0' style={{color:Styles.themeLightColor}}> 
                     <i className="fa fa-line-chart fa-lg text-light mx-2"></i>
                      Sales
                    </button>
                    <button className='m-0 bg-transparent p-0 float-end border-0 btn-outline-none'>
                     <i className="fas fa-angle-down text-light mx-2"></i>
                    </button>
                    </div>
                   </Tippy>
                    </button>
                    <div className="container-fluid m-0 p-0 collapse" id="Accounting">
                     <div className="row m-0 p-0 card card-body border-0 bg-transparent">
                       <div className="col-12 m-0 p-0 bg-transparent">
                       <div className="accordion border-0 bg-transparent m-0" id="accordionExample">
                       <div className='container-fluid m-0 p-0'>
                           <div className='row m-0 p-0'>
                             <div className='col-12 m-0 px-2 p-0'>
                                <ul className='m-0 p-0  adminInnerMenuOptions shadow' style={{backgroundColor:Styles.sidebarbackgroundColor}}>
                                <li className='m-0 bg-transparent adminOptions' style={{padding:'.5rem 0rem 0rem 0rem'}}>
                                <Link className='m-0 p-0 text-white text-decoration-none' to={'/Sales/Purposals'}>
                                <Tippy placement={'right-end'} theme={"light"} className='bg-light' content={<span>Purposals</span>}>
                                     <p className='mb-0 d-flex justify-content-between text-white'>
                                      <span>
                                      <FaTelegramPlane className='mx-2'></FaTelegramPlane>
                                       {/* <i className="fa fa-file fa-lg mx-2"></i> */}
                                        Proposals
                                     </span>
                                     <span className='d-flex justify-content-center align-items-center mx-2 fs-4' >
                                       <AiOutlinePlusCircle></AiOutlinePlusCircle>
                                     </span>
                                     </p>
                                </Tippy>
                                </Link>
                                  </li>
                                  <li className='m-0 bg-transparent adminOptions' style={{padding:'.5rem 0rem 0rem 0rem'}}>
                                     <p className='mb-0 text-white'>
                                       <Link className='m-0 p-0 text-white text-decoration-none' to={'/Sales/Estimates'}>
                                       <Tippy placement={'right-end'} theme={"light"} className='bg-light' content={<span>Estimates</span>}>
                                        <p className='mb-0 d-flex justify-content-between text-white'>
                                         <span>
                                         <AiFillFile className='mx-2'></AiFillFile>
                                         
                                        {/* <i className="fa fa-file-text fa-lg mx-2"></i> */}
                                          Estimates
                                        </span>
                                        <span className='d-flex justify-content-center align-items-center mx-2 fs-4' >
                                          <AiOutlinePlusCircle></AiOutlinePlusCircle>
                                        </span>
                                        </p>
                                      </Tippy> 
                                      </Link> 
                                     </p>
                                  </li>
                                  <li className='m-0 bg-transparent adminOptions' style={{padding:'.5rem 0rem 0rem 0rem'}}>
                                     <p className='mb-0 text-white'>
                                       <Link className='m-0 p-0 text-white text-decoration-none' to={'/Sales/Invoices'}>
                                       <Tippy placement={'right-end'} theme={"light"} className='bg-light' content={<span>Invoices</span>}>
                                        <p className='mb-0 d-flex justify-content-between text-white'>
                                         <span>
                                          <FaFileInvoice className='mx-2'></FaFileInvoice>
                                       {/* <i className="fa fa-file-archive fa-lg mx-2"></i> */}
                                      
                                          Invoices
                                        </span>
                                        <span className='d-flex justify-content-center align-items-center mx-2 fs-4' >
                                          <AiOutlinePlusCircle></AiOutlinePlusCircle>
                                        </span>
                                        </p>
                                      </Tippy> 
                                      </Link> 
                                     </p>
                                  </li>
                                  <li className='m-0 bg-transparent adminOptions' style={{padding:'.5rem 0rem 0rem 0rem'}}>
                                     <p className='mb-0 text-white'>
                                       <Link className='m-0 p-0 text-white text-decoration-none' to={'/Sales/Payments'}>
                                       <Tippy placement={'right-end'} theme={"light"} className='bg-light' content={<span>Payments</span>}>
                                        <p className='mb-0 d-flex justify-content-between text-white'>
                                         <span>
                                         <FaCashRegister className='mx-2'></FaCashRegister>
                                         {/* <RiPrinterCloudFil></RiPrinterCloudFil> */}
                                         {/* <i className="fa fa-file-archive fa-lg mx-2"></i> */}
                                          Payments
                                         </span>
                                         <span className='d-flex justify-content-center align-items-center mx-2 fs-4' >
                                          <AiOutlinePlusCircle></AiOutlinePlusCircle>
                                         </span>
                                        </p>
                                      </Tippy> 
                                      </Link> 
                                     </p>
                                  </li>
                                  <li className='m-0 bg-transparent adminOptions' style={{padding:'.5rem 0rem 1rem 0rem'}}>
                                     <p className='mb-0 text-white'>
                                       <Link className='m-0 p-0 text-white text-decoration-none' to={'/Sales/Piplines'}>
                                       <Tippy placement={'right-end'} theme={"light"} className='bg-light' content={<span>Piplines</span>}>
                                        <p className='mb-0 d-flex justify-content-between text-white'>
                                         <span>
                                         <FaFilter className='mx-2'></FaFilter>
                                         {/* <i className="far fa-address-card fa-lg mx-2"></i> */}
                                           Piplines
                                        </span>
                                        <span className='d-flex justify-content-center align-items-center mx-2 fs-4' >
                                          <AiOutlinePlusCircle></AiOutlinePlusCircle>
                                        </span>
                                        </p>
                                       </Tippy> 
                                       </Link>
                                     </p>
                                  </li>
                                </ul>
                             </div>
                           </div>
                         </div>
                       </div>
                      </div>
                     </div>
                    </div>
                  </div>
                  {/* 3 menu end */}
                  {/* 4 menu Start */}


                  <div className='col-12 mt-2 mb-2 m-0 p-0 bg-transparent'>
                    <button className="btn w-100 m-0 p-0 btn-outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#Tasks" aria-expanded="false" aria-controls="Tasks">
                    <Tippy placement={'right-end'} theme={"light"} className='bg-light' content={<span>Tasks</span>}>
                    <div className='conatiner-fluid m-0 p-1 shadow clearfix' style={{backgroundcolor:Styles.sidebarbackgroundColor}}>
                    <button className='m-0 p-0 bg-transparent float-start btn-outline-none border-0' style={{color:Styles.themeLightColor}}> 
                    <i className="fa fa-tasks fa-lg mx-2"></i>
                      Tasks
                    </button>
                    <button className='m-0 bg-transparent p-0 float-end border-0 btn-outline-none'>
                     <i className="fas fa-angle-down text-light mx-2"></i>
                    </button>
                    </div>
                   </Tippy>
                    </button>
                    <div className="container-fluid m-0 p-0 collapse" id="Tasks">
                     <div className="row m-0 p-0 card card-body border-0 bg-transparent">
                       <div className="col-12 m-0 p-0 bg-transparent">
                       <div className="accordion border-0 bg-transparent m-0" id="accordionExample">
                       <div className='container-fluid m-0 p-0'>
                           <div className='row m-0 p-0'>
                             <div className='col-12 m-0 px-2 p-0'>
                                <ul className='m-0 p-0  adminInnerMenuOptions shadow' style={{backgroundColor:Styles.sidebarbackgroundColor}}>
                                <li className='m-0 bg-transparent adminOptions' style={{padding:'.5rem 0rem 0rem 0rem'}}>
                                <Link className='m-0 p-0 text-white text-decoration-none' to={'/Tasks/Dashboard'}>
                                <Tippy placement={'right-end'} theme={"light"} className='bg-light' content={<span>Dashboard</span>}>
                                     <p className='mb-0 d-flex justify-content-between text-white'>
                                      <span>
                                       <i className="fa fa-file fa-lg mx-2"></i>
                                        Dashboard
                                     </span>
                                     <span className='d-flex justify-content-center align-items-center mx-2 fs-4' >
                                       <AiOutlinePlusCircle></AiOutlinePlusCircle>
                                     </span>
                                     </p>
                                </Tippy>
                                </Link>
                                  </li>
                                  <li className='m-0 bg-transparent adminOptions' style={{padding:'.5rem 0rem 1rem 0rem'}}>
                                     <p className='mb-0 text-white'>
                                       <Link className='m-0 p-0 text-white text-decoration-none' to={'/Tasks/TeamTask'}>
                                       <Tippy placement={'right-end'} theme={"light"} className='bg-light' content={<span>Team's Task</span>}>
                                        <p className='mb-0 d-flex justify-content-between text-white'>
                                         <span>
                                         <i className="far fa-address-card fa-lg mx-2"></i>
                                           Team's Task
                                        </span>
                                        <span className='d-flex justify-content-center align-items-center mx-2 fs-4' >
                                          <AiOutlinePlusCircle></AiOutlinePlusCircle>
                                        </span>
                                        </p>
                                       </Tippy> 
                                       </Link>
                                     </p>
                                  </li>
                                </ul>
                             </div>
                           </div>
                         </div>
                       </div>
                      </div>
                     </div>
                    </div>
                  </div>
                  {/* 4 menu end */}
                  {/* 5 menu Start */}

              
                  <div className='col-12 mt-2 mb-2 m-0 p-0 bg-transparent'>
                    <button className="btn w-100 m-0 p-0 btn-outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#Jobs" aria-expanded="false" aria-controls="Jobs">
                    <Tippy placement={'right-end'} theme={"light"} className='bg-light' content={<span>Jobs</span>}>
                    <div className='conatiner-fluid m-0 p-1 shadow clearfix' style={{backgroundcolor:Styles.sidebarbackgroundColor}}>
                    <button className='m-0 p-0 bg-transparent float-start btn-outline-none border-0' style={{color:Styles.themeLightColor}}> 
                    <i className="fa fa-suitcase fa-lg mx-2"></i>
                      Jobs
                    </button>
                    <button className='m-0 bg-transparent p-0 float-end border-0 btn-outline-none'>
                     <i className="fas fa-angle-down text-light mx-2"></i>
                    </button>
                    </div>
                   </Tippy>
                    </button>
                    <div className="container-fluid m-0 p-0 collapse" id="Jobs">
                     <div className="row m-0 p-0 card card-body border-0 bg-transparent">
                       <div className="col-12 m-0 p-0 bg-transparent">
                       <div className="accordion border-0 bg-transparent m-0" id="accordionExample">
                       <div className='container-fluid m-0 p-0'>
                           <div className='row m-0 p-0'>
                             <div className='col-12 m-0 px-2 p-0'>
                                <ul className='m-0 p-0  adminInnerMenuOptions shadow' style={{backgroundColor:Styles.sidebarbackgroundColor}}>
                                <li className='m-0 bg-transparent adminOptions' style={{padding:'.5rem 0rem 0rem 0rem'}}>
                                <Link className='m-0 p-0 text-white text-decoration-none' to={'/Jobs/Employees'}>
                                <Tippy placement={'right-end'} theme={"light"} className='bg-light' content={<span>Employees</span>}>
                                     <p className='mb-0 d-flex justify-content-between text-white'>
                                      <span>
                                        <BsPeopleFill className='mx-2'></BsPeopleFill>
                                       {/* <i className="fa fa-file fa-lg mx-2"></i> */}
                                        Employees
                                     </span>
                                     </p>
                                </Tippy>
                                </Link>
                                  </li>
                                  <li className='m-0 bg-transparent adminOptions' style={{padding:'.5rem 0rem 0rem 0rem'}}>
                                     <p className='mb-0 text-white'>
                                       <Link className='m-0 p-0 text-white text-decoration-none' to={'/Jobs/Browse'}>
                                       <Tippy placement={'right-end'} theme={"light"} className='bg-light' content={<span>Browse</span>}>
                                        <p className='mb-0 d-flex justify-content-between text-white'>
                                         <span>
                                         <AiOutlineUnorderedList className='mx-2' ></AiOutlineUnorderedList>
                                       {/* <i className="fa fa-file-text fa-lg mx-2"></i> */}
                                         Browse
                                        </span>
                                        </p>
                                      </Tippy> 
                                      </Link> 
                                     </p>
                                  </li>
                                  <li className='m-0 bg-transparent adminOptions' style={{padding:'.5rem 0rem 0rem 0rem'}}>
                                     <p className='mb-0 text-white'>
                                       <Link className='m-0 p-0 text-white text-decoration-none' to={'/Jobs/Matching'}>
                                       <Tippy placement={'right-end'} theme={"light"} className='bg-light' content={<span>Matching</span>}>
                                        <p className='mb-0 d-flex justify-content-between text-white'>
                                         <span>
                                         <BsFillPersonFill className='mx-2'></BsFillPersonFill>
                                       {/* <i className="fa fa-file-text fa-lg mx-2"></i> */}
                                          Matching
                                        </span>
                                        </p>
                                      </Tippy> 
                                      </Link> 
                                     </p>
                                  </li>
                                  <li className='m-0 bg-transparent adminOptions' style={{padding:'.5rem 0rem 1rem 0rem'}}>
                                     <p className='mb-0 text-white'>
                                       <Link className='m-0 p-0 text-white text-decoration-none' to={'/Jobs/ProposalTamplate'}>
                                       <Tippy placement={'right-end'} theme={"light"} className='bg-light' content={<span>Payments</span>}>
                                        <p className='mb-0 d-flex justify-content-between text-white'>
                                         <span>
                                         <i className="far fa-address-card fa-lg mx-2"></i>
                                           Purposal Tamplate
                                        </span>
                                        <span className='d-flex justify-content-center align-items-center mx-2 fs-4' >
                                          <AiOutlinePlusCircle></AiOutlinePlusCircle>
                                        </span>
                                        </p>
                                       </Tippy> 
                                       </Link>
                                     </p>
                                  </li>
                                </ul>
                             </div>
                           </div>
                         </div>
                       </div>
                      </div>
                     </div>
                    </div>
                  </div>
                  {/* 5 menu end */}
                  {/* 6 menu Start */}
                  <div className='col-12 mt-2 mb-2 m-0 p-0 bg-transparent'>
                    <button className="btn w-100 m-0 p-0 btn-outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#Employee" aria-expanded="false" aria-controls="Employee">
                    <Tippy placement={'right-end'} theme={"light"} className='bg-light' content={<span>Employee</span>}>
                    <div className='conatiner-fluid m-0 p-1 shadow clearfix' style={{backgroundcolor:Styles.sidebarbackgroundColor}}>
                    <button className='m-0 p-0 bg-transparent float-start btn-outline-none border-0' style={{color:Styles.themeLightColor}}> 
                    <i className="fa fa-users fa-lg mx-2"></i>
                      Employees
                    </button>
                    <button className='m-0 bg-transparent p-0 float-end border-0 btn-outline-none'>
                     <i className="fas fa-angle-down text-light mx-2"></i>
                    </button>
                    </div>
                   </Tippy>
                    </button>
                    <div className="container-fluid m-0 p-0 collapse" id="Employee">
                     <div className="row m-0 p-0 card card-body border-0 bg-transparent">
                       <div className="col-12 m-0 p-0 bg-transparent">
                       <div className="accordion border-0 bg-transparent m-0" id="accordionExample">
                       <div className='container-fluid m-0 p-0'>
                           <div className='row m-0 p-0'>
                             <div className='col-12 m-0 px-2 p-0'>
                                <ul className='m-0 p-0  adminInnerMenuOptions shadow' style={{backgroundColor:Styles.sidebarbackgroundColor}}>
                                <li className='m-0 bg-transparent adminOptions' style={{padding:'.5rem 0rem 0rem 0rem'}}>
                                <Link className='m-0 p-0 text-white text-decoration-none' to={'/Employees/Manage'}>
                                <Tippy placement={'right-end'} theme={"light"} className='bg-light' content={<span>Manage</span>}>
                                     <p className='mb-0 d-flex justify-content-between text-white'>
                                      <span>
                                      <AiOutlineUnorderedList className='mx-2' ></AiOutlineUnorderedList>
                                       {/* <i className="fa fa-file fa-lg mx-2"></i> */}
                                        Manage
                                     </span>
                                     </p>
                                </Tippy>
                                </Link>
                                  </li>
                                  <li className='m-0 bg-transparent adminOptions' style={{padding:'.5rem 0rem 0rem 0rem'}}>
                                     <p className='mb-0 text-white'>
                                       <Link className='m-0 p-0 text-white text-decoration-none' to={'/Employees/TimeActivity'}>
                                       <Tippy placement={'right-end'} theme={"light"} className='bg-light' content={<span>Time & Activity</span>}>
                                        <p className='mb-0 d-flex justify-content-between text-white'>
                                         <span>
                                         <AiOutlineLineChart className='mx-2 '></AiOutlineLineChart>
                                       {/* <i className="fa fa-file-text fa-lg mx-2"></i> */}
                                          Time & Activity
                                        </span>
                                        </p>
                                      </Tippy> 
                                      </Link> 
                                     </p>
                                  </li>
                                  <li className='m-0 bg-transparent adminOptions' style={{padding:'.5rem 0rem 0rem 0rem'}}>
                                     <p className='mb-0 text-white'>
                                       <Link className='m-0 p-0 text-white text-decoration-none' to={'/Employees/TimeSheets'}>
                                       <Tippy placement={'right-end'} theme={"light"} className='bg-light' content={<span>Time Sheets</span>}>
                                        <p className='mb-0 d-flex justify-content-between text-white'>
                                         <span>
                                         <MdAccessTime className='mx-2'>  </MdAccessTime>
                                          {/* <i className="fa fa-file-archive fa-lg mx-2"></i> */}
                                          Time Sheets
                                        </span>
                                        </p>
                                      </Tippy> 
                                      </Link> 
                                     </p>
                                  </li>
                                  <li className='m-0 bg-transparent adminOptions' style={{padding:'.5rem 0rem 0rem 0rem'}}>
                                     <p className='mb-0 text-white'>
                                       <Link className='m-0 p-0 text-white text-decoration-none' to={'/Employees/Appointments'}>
                                       <Tippy placement={'right-end'} theme={"light"} className='bg-light' content={<span>Appointments</span>}>
                                        <p className='mb-0 d-flex justify-content-between text-white'>
                                         <span>
                                         <MdDateRange className='mx-2'></MdDateRange>
                                          {/* <i className="fa fa-file-pdf fa-lg mx-2"></i> */}
                                          Appointments
                                        </span>
                                        </p>
                                       </Tippy> 
                                      </Link> 
                                     </p>
                                  </li>
                                  <li className='m-0 bg-transparent adminOptions' style={{padding:'.5rem 0rem 0rem 0rem'}}>
                                     <p className='mb-0 text-white'>
                                       <Link className='m-0 p-0 text-white text-decoration-none' to={'/Employees/Approvals'}>
                                       <Tippy placement={'right-end'} theme={"light"} className='bg-light' content={<span>Approvals</span>}>
                                        <p className='mb-0 d-flex justify-content-between text-white'>
                                         <span>
                                         <RiRefreshLine className='mx-2'></RiRefreshLine>
                                         {/* <i className="fa-solid fa-circle-plus fa-lg mx-2"></i> */}
                                         Approvals
                                        </span>
                                        <span className='d-flex justify-content-center align-items-center mx-2 fs-4' >
                                          <AiOutlinePlusCircle></AiOutlinePlusCircle>
                                        </span>
                                        </p>
                                       </Tippy>
                                       </Link>
                                     </p>
                                  </li>
                                  <li className='m-0 bg-transparent adminOptions' style={{padding:'.5rem 0rem 0rem 0rem'}}>
                                     <p className='mb-0 text-white'>
                                       <Link className='m-0 p-0 text-white text-decoration-none' to={'/Employees/EmployeeLevel'}>
                                       <Tippy placement={'right-end'} theme={"light"} className='bg-light' content={<span>Employee Level</span>}>
                                        <p className='mb-0 d-flex justify-content-between text-white'>
                                         <span>
                                         <BsBarChartSteps className='mx-2' ></BsBarChartSteps>
                                         {/* <i className="far fa-solid fa-circle-minus fa-lg mx-2"></i> */}
                                           Employee Level
                                        </span>
                                        <span className='d-flex justify-content-center align-items-center mx-2 fs-4' >
                                          <AiOutlinePlusCircle></AiOutlinePlusCircle>
                                        </span>
                                        </p>
                                       </Tippy>
                                       </Link>
                                     </p>
                                  </li>
                                  <li className='m-0 bg-transparent adminOptions' style={{padding:'.5rem 0rem 0rem 0rem'}}>
                                     <p className='mb-0 text-white'>
                                       <Link className='m-0 p-0 text-white text-decoration-none' to={'/Employees/Position'}>
                                       <Tippy placement={'right-end'} theme={"light"} className='bg-light' content={<span>Position</span>}>
                                        <p className='mb-0 d-flex justify-content-between text-white'>
                                         <span>
                                         <MdOutlineBadge className='mx-2' ></MdOutlineBadge>
                                         {/* <i className="fas fa-wallet fa-lg mx-2"></i> */}
                                          Positions
                                        </span>
                                        </p>
                                       </Tippy>
                                       </Link>
                                     </p>
                                  </li>
                                  <li className='m-0 bg-transparent adminOptions' style={{padding:'.5rem 0rem 0rem 0rem'}}>
                                     <p className='mb-0 text-white'>
                                       <Link className='m-0 p-0 text-white text-decoration-none' to={'/Employees/TimeOff'}>
                                       <Tippy placement={'right-end'} theme={"light"} className='bg-light' content={<span>Time Off</span>}>
                                        <p className='mb-0 d-flex justify-content-between text-white'>
                                         <span>
                                         <FaRegTimesCircle className='mx-2'></FaRegTimesCircle>
                                         {/* <i className="fas fa-wallet fa-lg mx-2"></i> */}
                                          Time Off
                                        </span>
                                        <span className='d-flex justify-content-center align-items-center mx-2 fs-4' >
                                          <AiOutlinePlusCircle></AiOutlinePlusCircle>
                                        </span>
                                        </p>
                                       </Tippy>
                                       </Link>
                                     </p>
                                  </li>
                                  <li className='m-0 bg-transparent adminOptions' style={{padding:'.5rem 0rem 0rem 0rem'}}>
                                     <p className='mb-0 text-white'>
                                       <Link className='m-0 p-0 text-white text-decoration-none' to={'/Employees/RecuringExpense'}>
                                       <Tippy placement={'right-end'} theme={"light"} className='bg-light' content={<span>Recurring Expenses</span>}>
                                        <p className='mb-0 d-flex justify-content-between text-white'>
                                         <span>
                                         <BsFillTerminalFill className='mx-2'></BsFillTerminalFill>
                                         {/* <i className="fas fa-wallet fa-lg mx-2"></i> */}
                                          Recurring Expenses
                                        </span>
                                        <span className='d-flex justify-content-center align-items-center mx-2 fs-4' >
                                          <AiOutlinePlusCircle></AiOutlinePlusCircle>
                                        </span>
                                        </p>
                                       </Tippy>
                                       </Link>
                                     </p>
                                  </li>
                                  <li className='m-0 bg-transparent adminOptions' style={{padding:'.5rem 0rem 1rem 0rem'}}>
                                     <p className='mb-0 text-white'>
                                       <Link className='m-0 p-0 text-white text-decoration-none' to={'/Employees/Candidate'}>
                                       <Tippy placement={'right-end'} theme={"light"} className='bg-light' content={<span>Candidate</span>}>
                                        <p className='mb-0 d-flex justify-content-between text-white'>
                                         <span>
                                         <BsFillPersonCheckFill className='mx-2'></BsFillPersonCheckFill>
                                         {/* <i className="far fa-address-card fa-lg mx-2"></i> */}
                                          Candidates
                                        </span>
                                        <span className='d-flex justify-content-center align-items-center mx-2 fs-4' >
                                          <AiOutlinePlusCircle></AiOutlinePlusCircle>
                                        </span>
                                        </p>
                                       </Tippy> 
                                       </Link>
                                     </p>
                                  </li>
                                </ul>
                             </div>
                           </div>
                         </div>
                       </div>
                      </div>
                     </div>
                    </div>
                  </div>
                  {/* 6 menu end */}
                  {/* 7 menu Start */}
                  <div className='col-12 mt-2 mb-2 m-0 p-0 bg-transparent'>
                    <button className="btn w-100 m-0 p-0 btn-outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#Organization" aria-expanded="false" aria-controls="Organization">
                    <Tippy placement={'right-end'} theme={"light"} className='bg-light' content={<span>Organization</span>}>
                    <div className='conatiner-fluid m-0 p-1 shadow clearfix' style={{backgroundcolor:Styles.sidebarbackgroundColor}}>
                    <button className='m-0 p-0 bg-transparent float-start btn-outline-none border-0' style={{color:Styles.themeLightColor}}> 
                    <i className="fa fa-globe fa-lg mx-2"></i>
                     Organization
                    </button>
                    <button className='m-0 bg-transparent p-0 float-end border-0 btn-outline-none'>
                     <i className="fas fa-angle-down text-light mx-2"></i>
                    </button>
                    </div>
                   </Tippy>
                    </button>
                    <div className="container-fluid m-0 p-0 collapse" id="Organization">
                     <div className="row m-0 p-0 card card-body border-0 bg-transparent">
                       <div className="col-12 m-0 p-0 bg-transparent">
                       <div className="accordion border-0 bg-transparent m-0" id="accordionExample">
                       <div className='container-fluid m-0 p-0'>
                           <div className='row m-0 p-0'>
                             <div className='col-12 m-0 px-2 p-0'>
                                <ul className='m-0 p-0  adminInnerMenuOptions shadow' style={{backgroundColor:Styles.sidebarbackgroundColor}}>
                                <li className='m-0 bg-transparent adminOptions' style={{padding:'.5rem 0rem 0rem 0rem'}}>
                                <Link className='m-0 p-0 text-white text-decoration-none' to={'/Organization/Manege'}>
                                <Tippy placement={'right-end'} theme={"light"} className='bg-light' content={<span>Manage</span>}>
                                     <p className='mb-0 d-flex justify-content-between text-white'>
                                      <span>
                                      <FaGlobeAmericas className='mx-2' ></FaGlobeAmericas>
                                       {/* <i className="fa fa-file fa-lg mx-2"></i> */}
                                        Manage
                                     </span>
                                     </p>
                                </Tippy>
                                </Link>
                                  </li>
                                  <li className='m-0 bg-transparent adminOptions' style={{padding:'.5rem 0rem 0rem 0rem'}}>
                                     <p className='mb-0 text-white'>
                                       <Link className='m-0 p-0 text-white text-decoration-none' to={'/Organization/Equipment'}>
                                       <Tippy placement={'right-end'} theme={"light"} className='bg-light' content={<span>Equipment</span>}>
                                        <p className='mb-0 d-flex justify-content-between text-white'>
                                         <span>
                                         <BiGridAlt className='mx-2'></BiGridAlt>
                                       {/* <i className="fa fa-file-text fa-lg mx-2"></i> */}
                                          Equipment
                                        </span>
                                        <span className='d-flex justify-content-center align-items-center mx-2 fs-4' >
                                          <AiOutlinePlusCircle></AiOutlinePlusCircle>
                                        </span>
                                        </p>
                                      </Tippy> 
                                      </Link> 
                                     </p>
                                  </li>
                                  <li className='m-0 bg-transparent adminOptions' style={{padding:'.5rem 0rem 0rem 0rem'}}>
                                     <p className='mb-0 text-white'>
                                       <Link className='m-0 p-0 text-white text-decoration-none' to={'/Organization/Inventory'}>
                                       <Tippy placement={'right-end'} theme={"light"} className='bg-light' content={<span>Inventory</span>}>
                                        <p className='mb-0 d-flex justify-content-between text-white'>
                                         <span>
                                         <BiGridVertical className='mx-2'></BiGridVertical>
                                         {/* <i className="fa fa-file-archive fa-lg mx-2"></i> */}
                                          Inventory
                                        </span>
                                        <span className='d-flex justify-content-center align-items-center mx-2 fs-4' >
                                          <AiOutlinePlusCircle></AiOutlinePlusCircle>
                                        </span>
                                        </p>
                                      </Tippy> 
                                      </Link> 
                                     </p>
                                  </li>
                                  <li className='m-0 bg-transparent adminOptions' style={{padding:'.5rem 0rem 0rem 0rem'}}>
                                     <p className='mb-0 text-white'>
                                       <Link className='m-0 p-0 text-white text-decoration-none' to={'/Organization/Tags'}>
                                       <Tippy placement={'right-end'} theme={"light"} className='bg-light' content={<span>Tags</span>}>
                                        <p className='mb-0 d-flex justify-content-between text-white'>
                                         <span>
                                         <AiFillTag className='mx-2'></AiFillTag>
                                          {/* <i className="fa fa-file-pdf fa-lg mx-2"></i> */}
                                          Tags
                                        </span>
                                        <span className='d-flex justify-content-center align-items-center mx-2 fs-4' >
                                          <AiOutlinePlusCircle></AiOutlinePlusCircle>
                                        </span>
                                        </p>
                                       </Tippy> 
                                      </Link> 
                                     </p>
                                  </li>
                                  <li className='m-0 bg-transparent adminOptions' style={{padding:'.5rem 0rem 0rem 0rem'}}>
                                     <p className='mb-0 text-white'>
                                       <Link className='m-0 p-0 text-white text-decoration-none' to={'/Organization/Vendors'}>
                                       <Tippy placement={'right-end'} theme={"light"} className='bg-light' content={<span>Vendors</span>}>
                                        <p className='mb-0 d-flex justify-content-between text-white'>
                                         <span>
                                         <FaTruck className='mx-2'></FaTruck>
                                         {/* <i className="fa-solid fa-circle-plus fa-lg mx-2"></i> */}
                                         Vendors
                                        </span>
                                        <span className='d-flex justify-content-center align-items-center mx-2 fs-4' >
                                          <AiOutlinePlusCircle></AiOutlinePlusCircle>
                                        </span>
                                        </p>
                                       </Tippy>
                                       </Link>
                                     </p>
                                  </li>
                                  <li className='m-0 bg-transparent adminOptions' style={{padding:'.5rem 0rem 0rem 0rem'}}>
                                     <p className='mb-0 text-white'>
                                       <Link className='m-0 p-0 text-white text-decoration-none' to={'/Organization/Projects'}>
                                       <Tippy placement={'right-end'} theme={"light"} className='bg-light' content={<span>Projects</span>}>
                                        <p className='mb-0 d-flex justify-content-between text-white'>
                                         <span>
                                         <RiBook2Line className='mx-2'></RiBook2Line>
                                         {/* <i className="far fa-solid fa-circle-minus fa-lg mx-2"></i> */}
                                           Projects
                                        </span>
                                        <span className='d-flex justify-content-center align-items-center mx-2 fs-4' >
                                          <AiOutlinePlusCircle></AiOutlinePlusCircle>
                                        </span>
                                        </p>
                                       </Tippy>
                                       </Link>
                                     </p>
                                  </li>
                                  <li className='m-0 bg-transparent adminOptions' style={{padding:'.5rem 0rem 0rem 0rem'}}>
                                     <p className='mb-0 text-white'>
                                       <Link className='m-0 p-0 text-white text-decoration-none' to={'/Organization/Departments'}>
                                       <Tippy placement={'right-end'} theme={"light"} className='bg-light' content={<span>Departments</span>}>
                                        <p className='mb-0 d-flex justify-content-between text-white'>
                                         <span>
                                         <RiFileListFill className='mx-2'></RiFileListFill>
                                         {/* <i className="fas fa-wallet fa-lg mx-2"></i> */}
                                          Departments
                                        </span>
                                        <span className='d-flex justify-content-center align-items-center mx-2 fs-4' >
                                          <AiOutlinePlusCircle></AiOutlinePlusCircle>
                                        </span>
                                        </p>
                                       </Tippy>
                                       
                                       </Link>
                                     </p>
                                  </li>
                                  <li className='m-0 bg-transparent adminOptions' style={{padding:'.5rem 0rem 0rem 0rem'}}>
                                     <p className='mb-0 text-white'>
                                       <Link className='m-0 p-0 text-white text-decoration-none' to={'/Organization/Teams'}>
                                       <Tippy placement={'right-end'} theme={"light"} className='bg-light' content={<span>Teams</span>}>
                                        <p className='mb-0 d-flex justify-content-between text-white'>
                                         <span>
                                         <BsPeopleFill className='mx-2'></BsPeopleFill>
                                         {/* <i className="fas fa-wallet fa-lg mx-2"></i> */}
                                          Teams
                                        </span>
                                        <span className='d-flex justify-content-center align-items-center mx-2 fs-4' >
                                          <AiOutlinePlusCircle></AiOutlinePlusCircle>
                                        </span>
                                        </p>
                                       </Tippy>
                                       </Link>
                                     </p>
                                  </li>
                                  <li className='m-0 bg-transparent adminOptions' style={{padding:'.5rem 0rem 0rem 0rem'}}>
                                     <p className='mb-0 text-white'>
                                       <Link className='m-0 p-0 text-white text-decoration-none' to={'/Organization/Documents'}>
                                       <Tippy placement={'right-end'} theme={"light"} className='bg-light' content={<span>Documents</span>}>
                                        <p className='mb-0 d-flex justify-content-between text-white'>
                                         <span>
                                        <AiFillTag className='mx-2'></AiFillTag>
                                         {/* <i className="fas fa-wallet fa-lg mx-2"></i> */}
                                          Documents
                                        </span>
                                        <span className='d-flex justify-content-center align-items-center mx-2 fs-4' >
                                          <AiOutlinePlusCircle></AiOutlinePlusCircle>
                                        </span>
                                        </p>
                                       </Tippy>
                                       </Link>
                                     </p>
                                  </li>
                                  <li className='m-0 bg-transparent adminOptions' style={{padding:'.5rem 0rem 0rem 0rem'}}>
                                     <p className='mb-0 text-white'>
                                       <Link className='m-0 p-0 text-white text-decoration-none' to={'/Organization/EmployeementTypes'}>
                                       <Tippy placement={'right-end'} theme={"light"} className='bg-light' content={<span>Employeement Types</span>}>
                                        <p className='mb-0 d-flex justify-content-between text-white'>
                                         <span>
                                         <MdLayers className='mx-2'></MdLayers>
                                         {/* <i className="fas fa-wallet fa-lg mx-2"></i> */}
                                          Employment Types
                                        </span>
                                        <span className='d-flex justify-content-center align-items-center mx-2 fs-4' >
                                          <AiOutlinePlusCircle></AiOutlinePlusCircle>
                                        </span>
                                        </p>
                                       </Tippy>
                                       </Link>
                                     </p>
                                  </li>
                                  <li className='m-0 bg-transparent adminOptions' style={{padding:'.5rem 0rem 0rem 0rem'}}>
                                     <p className='mb-0 text-white'>
                                       <Link className='m-0 p-0 text-white text-decoration-none' to={'/Organization/RecurrExpense'}>
                                       <Tippy placement={'right-end'} theme={"light"} className='bg-light' content={<span>Recurring Expenses</span>}>
                                        <p className='mb-0 d-flex justify-content-between text-white'>
                                         <span>
                                         <BsFillTerminalFill className='mx-2'></BsFillTerminalFill>
                                         {/* <i className="fas fa-wallet fa-lg mx-2"></i> */}
                                         Recurring Expenses
                                        </span>
                                        <span className='d-flex justify-content-center align-items-center mx-2 fs-4' >
                                          <AiOutlinePlusCircle></AiOutlinePlusCircle>
                                        </span>
                                        </p>
                                       </Tippy>
                                       </Link>
                                     </p>
                                  </li>
                                  <li className='m-0 bg-transparent adminOptions' style={{padding:'.5rem 0rem 1rem 0rem'}}>
                                     <p className='mb-0 text-white'>
                                       <Link className='m-0 p-0 text-white text-decoration-none' to={'/Organization/HelpCenter'}>
                                       <Tippy placement={'right-end'} theme={"light"} className='bg-light' content={<span>Help Center</span>}>
                                        <p className='mb-0 d-flex justify-content-between text-white'>
                                         <span>
                                         <BiHelpCircle className='mx-2'></BiHelpCircle>
                                         {/* <i className="far fa-address-card fa-lg mx-2"></i> */}
                                         Help Center
                                        </span>
                                        </p>
                                       </Tippy> 
                                       </Link>
                                     </p>
                                  </li>
                                </ul>
                             </div>
                           </div>
                         </div>
                       </div>
                      </div>
                     </div>
                    </div>
                  </div>                    
                  {/* 7 menu end */}
                  {/* 8 menu Start */}



                  <div className='col-12 mt-2 mb-2 m-0 p-0 bg-transparent'>
                    <button className="btn w-100 m-0 p-0 btn-outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#Contacts" aria-expanded="false" aria-controls="Contacts">
                    <Tippy placement={'right-end'} theme={"light"} className='bg-light' content={<span>Contacts</span>}>
                    <div className='conatiner-fluid m-0 p-1 shadow clearfix' style={{backgroundcolor:Styles.sidebarbackgroundColor}}>
                    <button className='m-0 p-0 bg-transparent float-start btn-outline-none border-0' style={{color:Styles.themeLightColor}}> 
                    <i className="fa-regular fa-address-book fa-lg mx-2"></i>
                     Contacts
                    </button>
                    <button className='m-0 bg-transparent p-0 float-end border-0 btn-outline-none'>
                     <i className="fas fa-angle-down text-light mx-2"></i>
                    </button>
                    </div>
                   </Tippy>
                    </button>
                    <div className="container-fluid m-0 p-0 collapse" id="Contacts">
                     <div className="row m-0 p-0 card card-body border-0 bg-transparent">
                       <div className="col-12 m-0 p-0 bg-transparent">
                       <div className="accordion border-0 bg-transparent m-0" id="accordionExample">
                       <div className='container-fluid m-0 p-0'>
                           <div className='row m-0 p-0'>
                             <div className='col-12 m-0 px-2 p-0'>
                                <ul className='m-0 p-0  adminInnerMenuOptions shadow' style={{backgroundColor:Styles.sidebarbackgroundColor}}>
                                <li className='m-0 bg-transparent adminOptions' style={{padding:'.5rem 0rem 0rem 0rem'}}>
                                <Link className='m-0 p-0 text-white text-decoration-none' to={'/Contacts/Visitors'}>
                                <Tippy placement={'right-end'} theme={"light"} className='bg-light' content={<span>Visitors</span>}>
                                     <p className='mb-0 d-flex justify-content-between text-white'>
                                      <span>
                                      <MdOutlineBadge className='mx-2' ></MdOutlineBadge>
                                       {/* <i className="fa fa-file fa-lg mx-2"></i> */}
                                        Visitor
                                      </span>
                                     </p>
                                </Tippy>
                                </Link>
                                  </li>
                                  <li className='m-0 bg-transparent adminOptions' style={{padding:'.5rem 0rem 0rem 0rem'}}>
                                     <p className='mb-0 text-white'>
                                       <Link className='m-0 p-0 text-white text-decoration-none' to={'/Contacts/Lead'}>
                                       <Tippy placement={'right-end'} theme={"light"} className='bg-light' content={<span>Lead</span>}>
                                        <p className='mb-0 d-flex justify-content-between text-white'>
                                        <span>
                                        <MdOutlineBadge className='mx-2' ></MdOutlineBadge>
                                         Leads
                                        </span>
                                        <span className='d-flex justify-content-center align-items-center mx-2 fs-4' >
                                          <AiOutlinePlusCircle></AiOutlinePlusCircle>
                                        </span>
                                        </p>
                                      </Tippy> 
                                      </Link> 
                                     </p>
                                  </li>
                                  <li className='m-0 bg-transparent adminOptions' style={{padding:'.5rem 0rem 0rem 0rem'}}>
                                     <p className='mb-0 text-white'>
                                       <Link className='m-0 p-0 text-white text-decoration-none' to={'/Contacts/Customers'}>
                                       <Tippy placement={'right-end'} theme={"light"} className='bg-light' content={<span>Customers</span>}>
                                        <p className='mb-0 d-flex justify-content-between text-white'>
                                         <span>
                                         <MdOutlineBadge className='mx-2' ></MdOutlineBadge>
                                          Customers
                                        </span>
                                        <span className='d-flex justify-content-center align-items-center mx-2 fs-4' >
                                          <AiOutlinePlusCircle></AiOutlinePlusCircle>
                                        </span>
                                        </p>
                                       </Tippy> 
                                      </Link> 
                                     </p>
                                  </li>
                                  <li className='m-0 bg-transparent adminOptions' style={{padding:'.5rem 0rem 1rem 0rem'}}>
                                     <p className='mb-0 text-white'>
                                       <Link className='m-0 p-0 text-white text-decoration-none' to={'/Contacts/Clients'}>
                                       <Tippy placement={'right-end'} theme={"light"} className='bg-light' content={<span>Clients</span>}>
                                        <p className='mb-0 d-flex justify-content-between text-white'>
                                         <span>
                                         <MdOutlineBadge className='mx-2' ></MdOutlineBadge>
                                         Clients
                                        </span>
                                        <span className='d-flex justify-content-center align-items-center mx-2 fs-4' >
                                          <AiOutlinePlusCircle></AiOutlinePlusCircle>
                                        </span>
                                        </p>
                                       </Tippy> 
                                       </Link>
                                     </p>
                                  </li>
                                </ul>
                             </div>
                           </div>
                         </div>
                       </div>
                      </div>
                     </div>
                    </div>
                  </div>    
                  {/* 8 menu end */}
                  {/* 9 menu Start */}


                  <div className='col-12 mt-2 mb-2 m-0 p-0 bg-transparent'>
                    <button className="btn w-100 m-0 p-0 btn-outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#Golass" aria-expanded="false" aria-controls="Golass">
                    <Tippy placement={'right-end'} theme={"light"} className='bg-light' content={<span>Goals</span>}>
                    <div className='conatiner-fluid m-0 p-1 shadow clearfix' style={{backgroundcolor:Styles.sidebarbackgroundColor}}>
                    <button className='m-0 p-0 bg-transparent float-start btn-outline-none border-0' style={{color:Styles.themeLightColor}}> 
                    <i className="fa-solid fa-font-awesome fa-lg mx-2"></i>
                     Golas
                    </button>
                    <button className='m-0 bg-transparent p-0 float-end border-0 btn-outline-none'>
                     <i className="fas fa-angle-down text-light mx-2"></i>
                    </button>
                    </div>
                   </Tippy>
                    </button>
                    <div className="container-fluid m-0 p-0 collapse" id="Golass">
                     <div className="row m-0 p-0 card card-body border-0 bg-transparent">
                       <div className="col-12 m-0 p-0 bg-transparent">
                       <div className="accordion border-0 bg-transparent m-0" id="accordionExample">
                       <div className='container-fluid m-0 p-0'>
                           <div className='row m-0 p-0'>
                             <div className='col-12 m-0 px-2 p-0'>
                                <ul className='m-0 p-0  adminInnerMenuOptions shadow' style={{backgroundColor:Styles.sidebarbackgroundColor}}>
                                <li className='m-0 bg-transparent adminOptions' style={{padding:'.5rem 0rem 0rem 0rem'}}>
                                <Link className='m-0 p-0 text-white text-decoration-none' to={'/Goals/Mange'}>
                                <Tippy placement={'right-end'} theme={"light"} className='bg-light' content={<span>Manage</span>}>
                                     <p className='mb-0 d-flex justify-content-between text-white'>
                                      <span>
                                       <i className="fa fa-file fa-lg mx-2"></i>
                                       Manage
                                     </span>
                                     </p>
                                </Tippy>
                                </Link>
                                  </li>      
                                  <li className='m-0 bg-transparent adminOptions' style={{padding:'.5rem 0rem 1rem 0rem'}}>
                                     <p className='mb-0 text-white'>
                                       <Link className='m-0 p-0 text-white text-decoration-none' to={'/Goals/Setings'}>
                                       <Tippy placement={'right-end'} theme={"light"} className='bg-light' content={<span>Settings</span>}>
                                        <p className='mb-0 d-flex justify-content-between text-white'>
                                         <span>
                                          <i className="far fa-address-card fa-lg mx-2"></i>
                                           Settings
                                        </span>
                                        <span className='d-flex justify-content-center align-items-center mx-2 fs-4' >
                                          <AiOutlinePlusCircle></AiOutlinePlusCircle>
                                        </span>
                                        </p>
                                       </Tippy> 
                                       </Link>
                                     </p>
                                  </li>
                                </ul>
                             </div>
                           </div>
                         </div>
                       </div>
                      </div>
                     </div>
                    </div>
                  </div> 
                  {/* 9 menu end */}
                  {/* 10 menu Start */}
                  <div className='col-12 mt-2 mb-2 m-0 p-0 bg-transparent'>
                    <button className="btn w-100 m-0 p-0 btn-outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#Reports" aria-expanded="false" aria-controls="Reports">
                    <Tippy placement={'right-end'} theme={"light"} className='bg-light' content={<span>Reports</span>}>
                    <div className='conatiner-fluid m-0 p-1 shadow clearfix' style={{backgroundcolor:Styles.sidebarbackgroundColor}}>
                    <button className='m-0 p-0 bg-transparent float-start btn-outline-none border-0' style={{color:Styles.themeLightColor}}> 
                    <i className="fa-solid fa-font-awesome fa-lg mx-2"></i>
                     Reports
                    </button>
                    <button className='m-0 bg-transparent p-0 float-end border-0 btn-outline-none'>
                     <i className="fas fa-angle-down text-light mx-2"></i>
                    </button>
                    </div>
                   </Tippy>
                    </button>
                    <div className="container-fluid m-0 p-0 collapse" id="Reports">
                     <div className="row m-0 p-0 card card-body border-0 bg-transparent">
                       <div className="col-12 m-0 p-0 bg-transparent">
                       <div className="accordion border-0 bg-transparent m-0" id="accordionExample">
                       <div className='container-fluid m-0 p-0'>
                           <div className='row m-0 p-0'>
                             <div className='col-12 m-0 px-2 p-0'>
                                <ul className='m-0 p-0  adminInnerMenuOptions shadow' style={{backgroundColor:Styles.sidebarbackgroundColor}}>
                                <li className='m-0 bg-transparent adminOptions' style={{padding:'.5rem 0rem 0rem 0rem'}}>
                                <Link className='m-0 p-0 text-white text-decoration-none' to={'/Reports/All'}>
                                <Tippy placement={'right-end'} theme={"light"} className='bg-light' content={<span>Estimate</span>}>
                                     <p className='mb-0 d-flex justify-content-between text-white'>
                                      <span>
                                       <i className="fa fa-file fa-lg mx-2"></i>
                                       All Reports
                                     </span>
                                     </p>
                                </Tippy>
                                </Link>
                                  </li>
                                  <li className='m-0 bg-transparent adminOptions' style={{padding:'.5rem 0rem 0rem 0rem'}}>
                                     <p className='mb-0 text-white'>
                                       <Link className='m-0 p-0 text-white text-decoration-none' to={'/Reports/TimeActivity'}>
                                       <Tippy placement={'right-end'} theme={"light"} className='bg-light' content={<span>Time and Activity</span>}>
                                        <p className='mb-0 d-flex justify-content-between text-white'>
                                         <span>
                                       <i className="fa fa-file-text fa-lg mx-2"></i>
                                          Time & Acticity
                                        </span>
                                        </p>
                                      </Tippy> 
                                      </Link> 
                                     </p>
                                  </li>
                                  <li className='m-0 bg-transparent adminOptions' style={{padding:'.5rem 0rem 0rem 0rem'}}>
                                     <p className='mb-0 text-white'>
                                       <Link className='m-0 p-0 text-white text-decoration-none' to={'/Reports/Weekly'}>
                                       <Tippy placement={'right-end'} theme={"light"} className='bg-light' content={<span>Weekly</span>}>
                                        <p className='mb-0 d-flex justify-content-between text-white'>
                                         <span>
                                         <i className="fa fa-file-archive fa-lg mx-2"></i>
                                          Weekely
                                        </span>
                                       </p>
                                      </Tippy> 
                                      </Link> 
                                     </p>
                                  </li>
                                  <li className='m-0 bg-transparent adminOptions' style={{padding:'.5rem 0rem 0rem 0rem'}}>
                                     <p className='mb-0 text-white'>
                                       <Link className='m-0 p-0 text-white text-decoration-none' to={'/Reports/AppsUrl'}>
                                       <Tippy placement={'right-end'} theme={"light"} className='bg-light' content={<span>Apps and Urls</span>}>
                                        <p className='mb-0 d-flex justify-content-between text-white'>
                                         <span>
                                          <i className="fa fa-file-pdf fa-lg mx-2"></i>
                                          Apps & Urls
                                        </span>
                                        </p>
                                       </Tippy> 
                                      </Link> 
                                     </p>
                                  </li>
                                  <li className='m-0 bg-transparent adminOptions' style={{padding:'.5rem 0rem 0rem 0rem'}}>
                                     <p className='mb-0 text-white'>
                                       <Link className='m-0 p-0 text-white text-decoration-none' to={'/Reports/ManualTime'}>
                                       <Tippy placement={'right-end'} theme={"light"} className='bg-light' content={<span>Manual time edits</span>}>
                                        <p className='mb-0 d-flex justify-content-between text-white'>
                                         <span>
                                          <i className="fa fa-file-pdf fa-lg mx-2"></i>
                                          Manual time edits
                                        </span>
                                        </p>
                                       </Tippy> 
                                      </Link> 
                                     </p>
                                  </li>
                                  <li className='m-0 bg-transparent adminOptions' style={{padding:'.5rem 0rem 0rem 0rem'}}>
                                     <p className='mb-0 text-white'>
                                       <Link className='m-0 p-0 text-white text-decoration-none' to={'/Reports/ExpenseReport'}>
                                       <Tippy placement={'right-end'} theme={"light"} className='bg-light' content={<span>Expenses</span>}>
                                        <p className='mb-0 d-flex justify-content-between text-white'>
                                         <span>
                                          <i className="fa fa-file-pdf fa-lg mx-2"></i>
                                          Expenses
                                        </span>
                                        </p>
                                       </Tippy> 
                                      </Link> 
                                     </p>
                                  </li>
                                  <li className='m-0 bg-transparent adminOptions' style={{padding:'.5rem 0rem 0rem 0rem'}}>
                                     <p className='mb-0 text-white'>
                                       <Link className='m-0 p-0 text-white text-decoration-none' to={'/Reports/AmountOwed'}>
                                       <Tippy placement={'right-end'} theme={"light"} className='bg-light' content={<span>Ammount Owed</span>}>
                                        <p className='mb-0 d-flex justify-content-between text-white'>
                                         <span>
                                         <i className="fa-solid fa-circle-plus fa-lg mx-2"></i>
                                           Amount Owed
                                        </span>
                                        </p>
                                       </Tippy>
                                       </Link>
                                     </p>
                                  </li>
                                  <li className='m-0 bg-transparent adminOptions' style={{padding:'.5rem 0rem 0rem 0rem'}}>
                                     <p className='mb-0 text-white'>
                                       <Link className='m-0 p-0 text-white text-decoration-none' to={'/Reports/PaymentReports'}>
                                       <Tippy placement={'right-end'} theme={"light"} className='bg-light' content={<span>Payments</span>}>
                                        <p className='mb-0 d-flex justify-content-between text-white'>
                                         <span>
                                         <i className="far fa-solid fa-circle-minus fa-lg mx-2"></i>
                                           Payments
                                        </span>
                                        </p>
                                       </Tippy>
                                       </Link>
                                     </p>
                                  </li>
                                  <li className='m-0 bg-transparent adminOptions' style={{padding:'.5rem 0rem 0rem 0rem'}}>
                                     <p className='mb-0 text-white'>
                                       <Link className='m-0 p-0 text-white text-decoration-none' to={'/Reports/WeeklyLimits'}>
                                       <Tippy placement={'right-end'} theme={"light"} className='bg-light' content={<span>Weekly Limits</span>}>
                                        <p className='mb-0 d-flex justify-content-between text-white'>
                                         <span>
                                         <i className="fas fa-wallet fa-lg mx-2"></i>
                                          Weekly limits
                                        </span>
                                        </p>
                                       </Tippy>
                                       </Link>
                                     </p>
                                  </li>
                                  <li className='m-0 bg-transparent adminOptions' style={{padding:'.5rem 0rem 0rem 0rem'}}>
                                     <p className='mb-0 text-white'>
                                       <Link className='m-0 p-0 text-white text-decoration-none' to={'/Reports/dailyLimits'}>
                                       <Tippy placement={'right-end'} theme={"light"} className='bg-light' content={<span>Daily Limits</span>}>
                                        <p className='mb-0 d-flex justify-content-between text-white'>
                                         <span>
                                         <i className="fas fa-wallet fa-lg mx-2"></i>
                                          Daily limits
                                        </span>
                                        </p>
                                       </Tippy>
                                       </Link>
                                     </p>
                                  </li>
                                  <li className='m-0 bg-transparent adminOptions' style={{padding:'.5rem 0rem 0rem 0rem'}}>
                                     <p className='mb-0 text-white'>
                                       <Link className='m-0 p-0 text-white text-decoration-none' to={'/Reports/ProjectBudgets'}>
                                       <Tippy placement={'right-end'} theme={"light"} className='bg-light' content={<span>Project Budgets</span>}>
                                        <p className='mb-0 d-flex justify-content-between text-white'>
                                         <span>
                                         <i className="fas fa-wallet fa-lg mx-2"></i>
                                          Project budgets
                                        </span>
                                        </p>
                                       </Tippy>
                                       </Link>
                                     </p>
                                  </li>
                                  <li className='m-0 bg-transparent adminOptions' style={{padding:'.5rem 0rem 1rem 0rem'}}>
                                     <p className='mb-0 text-white'>
                                       <Link className='m-0 p-0 text-white text-decoration-none' to={'/Reports/ClientBudgets'}>
                                       <Tippy placement={'right-end'} theme={"light"} className='bg-light' content={<span>Client Budgets</span>}>
                                        <p className='mb-0 d-flex justify-content-between text-white'>
                                         <span>
                                         <i className="far fa-address-card fa-lg mx-2"></i>
                                         Client budgets
                                        </span>
                                        </p>
                                       </Tippy> 
                                       </Link>
                                     </p>
                                  </li>
                                </ul>
                             </div>
                           </div>
                         </div>
                       </div>
                      </div>
                     </div>
                    </div>
                  </div>
                  {/* 10 menu end */}
                  </div>
                </div>
             </div>
         </div>
       </div>
       </div>
       </div>
    </div>
  )
}

export default Sidebar