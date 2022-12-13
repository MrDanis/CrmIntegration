import React from 'react'
import './adminDashboardHeader.css'
import Styles from '../Assets/Styles/GlobalStyle'
const AdminDashboardHeader=()=> {
  return (
    <div className='container-fluid m-0 p-0 dashboardMainBox'>
     <div className='row m-0 p-0 '>
       <div className='col-12 m-0 p-2'>
            <ul className='m-0 p-0 d-flex justify-content-end headerMenuList'>
            <li class="p-1 d-flex justify-content-center align-items-center">
             <span className='mx-2'>
                <button className='btn rounded-pill m-0 fw-bold' style={{color:Styles.themeLightColor,backgroundColor:Styles.createBtnCoor}}>+ create</button>
             </span>
            </li>
            <li className="p-1 d-flex justify-content-center align-items-center">
            <div className="btn-group">
              <button type="button" className="btn p-1" style={{border:'1px solid purple',borderRadius:Styles.generalBorderRadius,color:Styles.themeLightColor}} data-bs-toggle="dropdown" aria-expanded="false">
              <button className='mx-2' style={{borderRadius:Styles.generalBorderRadius}}>All</button>
                All Employees
                <i className="fas fa-angle-down mx-2"></i>
              </button>
              
              <ul className="dropdown-menu dropdown-menu-end py-0 employeeList" style={{height:'35vh',overflow:'hidden',overflowY:'scroll',backgroundColor:Styles.themeLightDarkColor,color:Styles.themeLightColor,borderRadius:Styles.generalBorderSimpleRadius}}>
                <li className='m-0 p-0'>
                  <button className="dropdown-item" type="button" 
                    style={{
                     color:Styles.themeDarkColor,
                     backgroundColor:Styles.themeLightColor
                     }}>
                  All Employees
                   </button>
                </li>
                <li>
                    <button className="dropdown-item px-1 hoverOverMe" type="button" style={{color:Styles.themeLightColor}}>
                      <div className="conatiner-fluid m-0 p-0">
                         <div className='row m-0 p-0'>
                            <div className='col-3 m-0 p-0'>
                            <img className='img-fluid m-0 p-2' src='./logo192.png' alt=''></img>
                            </div>
                            <div className='col-9 m-0 py-2 p-0 d-felx align-items-center'>
                             <span className='empName py-2'>Amir nawaz</span>  
                            </div>
                         </div>
                      </div>
                    </button>
                </li>
                <li>
                    <button className="dropdown-item px-1 hoverOverMe" type="button" style={{color:Styles.themeLightColor}}>
                      <div className="conatiner-fluid m-0 p-0">
                         <div className='row m-0 p-0'>
                            <div className='col-3 m-0 p-0'>
                            <img className='img-fluid m-0 p-2' src='./logo192.png' alt=''></img>
                            </div>
                            <div className='col-9 m-0 py-2 p-0 d-felx align-items-center'>
                             <span className='empName py-2'>Amir nawaz</span>  
                            </div>
                         </div>
                      </div>
                    </button>
                </li>
                <li>
                    <button className="dropdown-item px-1 hoverOverMe" type="button" style={{color:Styles.themeLightColor}}>
                      <div className="conatiner-fluid m-0 p-0">
                         <div className='row m-0 p-0'>
                            <div className='col-3 m-0 p-0'>
                            <img className='img-fluid m-0 p-2' src='./logo192.png' alt=''></img>
                            </div>
                            <div className='col-9 m-0 py-2 p-0 d-felx align-items-center'>
                             <span className='empName py-2'>Amir nawaz</span>  
                            </div>
                         </div>
                      </div>
                    </button>
                </li>
                <li>
                    <button className="dropdown-item px-1 hoverOverMe" type="button" style={{color:Styles.themeLightColor}}>
                      <div className="conatiner-fluid m-0 p-0">
                         <div className='row m-0 p-0'>
                            <div className='col-3 m-0 p-0'>
                            <img className='img-fluid m-0 p-2' src='./logo192.png' alt=''></img>
                            </div>
                            <div className='col-9 m-0 py-2 p-0 d-felx align-items-center'>
                             <span className='empName py-2'>Amir nawaz</span>  
                            </div>
                         </div>
                      </div>
                    </button>
                </li>
                <li>
                    <button className="dropdown-item px-1 hoverOverMe" type="button" style={{color:Styles.themeLightColor}}>
                      <div className="conatiner-fluid m-0 p-0">
                         <div className='row m-0 p-0'>
                            <div className='col-3 m-0 p-0'>
                            <img className='img-fluid m-0 p-2' src='./logo192.png' alt=''></img>
                            </div>
                            <div className='col-9 m-0 py-2 p-0 d-felx align-items-center'>
                             <span className='empName py-2'>Amir nawaz</span>  
                            </div>
                         </div>
                      </div>
                    </button>
                </li>
                <li>
                    <button className="dropdown-item px-1 hoverOverMe" type="button" style={{color:Styles.themeLightColor}}>
                      <div className="conatiner-fluid m-0 p-0">
                         <div className='row m-0 p-0'>
                            <div className='col-3 m-0 p-0'>
                            <img className='img-fluid m-0 p-2' src='./logo192.png' alt=''></img>
                            </div>
                            <div className='col-9 m-0 py-2 p-0 d-felx align-items-center'>
                             <span className='empName py-2'>Amir nawaz</span>  
                            </div>
                         </div>
                      </div>
                    </button>
                </li>
                <li>
                    <button className="dropdown-item px-1 hoverOverMe" type="button" style={{color:Styles.themeLightColor}}>
                      <div className="conatiner-fluid m-0 p-0">
                         <div className='row m-0 p-0'>
                            <div className='col-3 m-0 p-0'>
                            <img className='img-fluid m-0 p-2' src='./logo192.png' alt=''></img>
                            </div>
                            <div className='col-9 m-0 py-2 p-0 d-felx align-items-center'>
                             <span className='empName py-2'>Amir nawaz</span>  
                            </div>
                         </div>
                      </div>
                    </button>
                </li>
                <li>
                    <button className="dropdown-item px-1 hoverOverMe" type="button" style={{color:Styles.themeLightColor}}>
                      <div className="conatiner-fluid m-0 p-0">
                         <div className='row m-0 p-0'>
                            <div className='col-3 m-0 p-0'>
                            <img className='img-fluid m-0 p-2' src='./logo192.png' alt=''></img>
                            </div>
                            <div className='col-9 m-0 py-2 p-0 d-felx align-items-center'>
                             <span className='empName py-2'>Amir nawaz</span>  
                            </div>
                         </div>
                      </div>
                    </button>
                </li>
                <li>
                    <button className="dropdown-item px-1 hoverOverMe" type="button" style={{color:Styles.themeLightColor}}>
                      <div className="conatiner-fluid m-0 p-0">
                         <div className='row m-0 p-0'>
                            <div className='col-3 m-0 p-0'>
                            <img className='img-fluid m-0 p-2' src='./logo192.png' alt=''></img>
                            </div>
                            <div className='col-9 m-0 py-2 p-0 d-felx align-items-center'>
                             <span className='empName py-2'>Amir nawaz</span>  
                            </div>
                         </div>
                      </div>
                    </button>
                </li> <li>
                    <button className="dropdown-item px-1 hoverOverMe" type="button" style={{color:Styles.themeLightColor}}>
                      <div className="conatiner-fluid m-0 p-0">
                         <div className='row m-0 p-0'>
                            <div className='col-3 m-0 p-0'>
                            <img className='img-fluid m-0 p-2' src='./logo192.png' alt=''></img>
                            </div>
                            <div className='col-9 m-0 py-2 p-0 d-felx align-items-center'>
                             <span className='empName py-2'>Amir nawaz</span>  
                            </div>
                         </div>
                      </div>
                    </button>
                </li>
              </ul>
            </div>
            </li>
            {/* for companies menu start */}
            <li className="p-1 px-2 d-flex justify-content-center align-items-center">
            <div className="btn-group ">
              <button type="button shadow" className="btn p-1 d-flex align-items-center justify-content-center" style={{borderRadius:Styles.generalBorderRadius,color:Styles.themeLightColor}} data-bs-toggle="dropdown" aria-expanded="false">
              {/* <button className='mx-2' style={{borderRadius:Styles.generalBorderRadius}}>All</button> */}
               <small style={{fontSize:'8px'}}>All</small>
                 
                <i className="fas fa-angle-down mx-2"></i>
              </button>
              
              <ul className="dropdown-menu dropdown-menu-end py-0 employeeList" style={{height:'35vh',overflow:'hidden',overflowY:'scroll',backgroundColor:Styles.themeLightDarkColor,color:Styles.themeLightColor,borderRadius:Styles.generalBorderSimpleRadius}}>
                <li className='m-0 p-0'>
                  <button className="dropdown-item" type="button" 
                    style={{
                     color:Styles.themeDarkColor,
                     backgroundColor:Styles.themeLightColor
                     }}>
                  All Employees
                   </button>
                </li>
                <li>
                    <button className="dropdown-item px-1 hoverOverMe" type="button" style={{color:Styles.themeLightColor}}>
                      <div className="conatiner-fluid m-0 p-0">
                         <div className='row m-0 p-0'>
                            <div className='col-3 m-0 p-0'>
                            <img className='img-fluid m-0 p-2' src='./logo192.png' alt=''></img>
                            </div>
                            <div className='col-9 m-0 py-2 p-0 d-felx align-items-center'>
                             <span className='empName py-2'>Amir nawaz</span>  
                            </div>
                         </div>
                      </div>
                    </button>
                </li>
                <li>
                    <button className="dropdown-item px-1 hoverOverMe" type="button" style={{color:Styles.themeLightColor}}>
                      <div className="conatiner-fluid m-0 p-0">
                         <div className='row m-0 p-0'>
                            <div className='col-3 m-0 p-0'>
                            <img className='img-fluid m-0 p-2' src='./logo192.png' alt=''></img>
                            </div>
                            <div className='col-9 m-0 py-2 p-0 d-felx align-items-center'>
                             <span className='empName py-2'>Amir nawaz</span>  
                            </div>
                         </div>
                      </div>
                    </button>
                </li>
                <li>
                    <button className="dropdown-item px-1 hoverOverMe" type="button" style={{color:Styles.themeLightColor}}>
                      <div className="conatiner-fluid m-0 p-0">
                         <div className='row m-0 p-0'>
                            <div className='col-3 m-0 p-0'>
                            <img className='img-fluid m-0 p-2' src='./logo192.png' alt=''></img>
                            </div>
                            <div className='col-9 m-0 py-2 p-0 d-felx align-items-center'>
                             <span className='empName py-2'>Amir nawaz</span>  
                            </div>
                         </div>
                      </div>
                    </button>
                </li>
                <li>
                    <button className="dropdown-item px-1 hoverOverMe" type="button" style={{color:Styles.themeLightColor}}>
                      <div className="conatiner-fluid m-0 p-0">
                         <div className='row m-0 p-0'>
                            <div className='col-3 m-0 p-0'>
                            <img className='img-fluid m-0 p-2' src='./logo192.png' alt=''></img>
                            </div>
                            <div className='col-9 m-0 py-2 p-0 d-felx align-items-center'>
                             <span className='empName py-2'>Amir nawaz</span>  
                            </div>
                         </div>
                      </div>
                    </button>
                </li>
                <li>
                    <button className="dropdown-item px-1 hoverOverMe" type="button" style={{color:Styles.themeLightColor}}>
                      <div className="conatiner-fluid m-0 p-0">
                         <div className='row m-0 p-0'>
                            <div className='col-3 m-0 p-0'>
                            <img className='img-fluid m-0 p-2' src='./logo192.png' alt=''></img>
                            </div>
                            <div className='col-9 m-0 py-2 p-0 d-felx align-items-center'>
                             <span className='empName py-2'>Amir nawaz</span>  
                            </div>
                         </div>
                      </div>
                    </button>
                </li>
                <li>
                    <button className="dropdown-item px-1 hoverOverMe" type="button" style={{color:Styles.themeLightColor}}>
                      <div className="conatiner-fluid m-0 p-0">
                         <div className='row m-0 p-0'>
                            <div className='col-3 m-0 p-0'>
                            <img className='img-fluid m-0 p-2' src='./logo192.png' alt=''></img>
                            </div>
                            <div className='col-9 m-0 py-2 p-0 d-felx align-items-center'>
                             <span className='empName py-2'>Amir nawaz</span>  
                            </div>
                         </div>
                      </div>
                    </button>
                </li>
                <li>
                    <button className="dropdown-item px-1 hoverOverMe" type="button" style={{color:Styles.themeLightColor}}>
                      <div className="conatiner-fluid m-0 p-0">
                         <div className='row m-0 p-0'>
                            <div className='col-3 m-0 p-0'>
                            <img className='img-fluid m-0 p-2' src='./logo192.png' alt=''></img>
                            </div>
                            <div className='col-9 m-0 py-2 p-0 d-felx align-items-center'>
                             <span className='empName py-2'>Amir nawaz</span>  
                            </div>
                         </div>
                      </div>
                    </button>
                </li>
                <li>
                    <button className="dropdown-item px-1 hoverOverMe" type="button" style={{color:Styles.themeLightColor}}>
                      <div className="conatiner-fluid m-0 p-0">
                         <div className='row m-0 p-0'>
                            <div className='col-3 m-0 p-0'>
                            <img className='img-fluid m-0 p-2' src='./logo192.png' alt=''></img>
                            </div>
                            <div className='col-9 m-0 py-2 p-0 d-felx align-items-center'>
                             <span className='empName py-2'>Amir nawaz</span>  
                            </div>
                         </div>
                      </div>
                    </button>
                </li>
                <li>
                    <button className="dropdown-item px-1 hoverOverMe" type="button" style={{color:Styles.themeLightColor}}>
                      <div className="conatiner-fluid m-0 p-0">
                         <div className='row m-0 p-0'>
                            <div className='col-3 m-0 p-0'>
                            <img className='img-fluid m-0 p-2' src='./logo192.png' alt=''></img>
                            </div>
                            <div className='col-9 m-0 py-2 p-0 d-felx align-items-center'>
                             <span className='empName py-2'>Amir nawaz</span>  
                            </div>
                         </div>
                      </div>
                    </button>
                </li> <li>
                    <button className="dropdown-item px-1 hoverOverMe" type="button" style={{color:Styles.themeLightColor}}>
                      <div className="conatiner-fluid m-0 p-0">
                         <div className='row m-0 p-0'>
                            <div className='col-3 m-0 p-0'>
                            <img className='img-fluid m-0 p-2' src='./logo192.png' alt=''></img>
                            </div>
                            <div className='col-9 m-0 py-2 p-0 d-felx align-items-center'>
                             <span className='empName py-2'>Amir nawaz</span>  
                            </div>
                         </div>
                      </div>
                    </button>
                </li>
              </ul>
            </div>
            </li>      
            {/* For companies menu end */}
            {/* For chat start */}
            <li className="px-0 p-1 d-flex justify-content-center align-items-center">
            <div className="btn-group">
              <button type="button" className="btn p-1" style={{borderRadius:Styles.generalBorderRadius,color:Styles.themeLightColor}} data-bs-toggle="dropdown" aria-expanded="false">
                <i className="fas fa-comment-dots"></i>
              </button>
              
              <ul className="dropdown-menu dropdown-menu-end py-0 employeeList" style={{height:'35vh',overflow:'hidden',overflowY:'scroll',backgroundColor:Styles.themeLightDarkColor,color:Styles.themeLightColor,borderRadius:Styles.generalBorderSimpleRadius}}>
                <li className='m-0 p-0'>
                  <button className="dropdown-item" type="button" 
                    style={{
                     color:Styles.themeDarkColor,
                     backgroundColor:Styles.themeLightColor
                     }}>
                  All Employees
                   </button>
                </li>
                <li>
                    <button className="dropdown-item px-1 hoverOverMe" type="button" style={{color:Styles.themeLightColor}}>
                      <div className="conatiner-fluid m-0 p-0">
                         <div className='row m-0 p-0'>
                            <div className='col-3 m-0 p-0'>
                            <img className='img-fluid m-0 p-2' src='./logo192.png' alt=''></img>
                            </div>
                            <div className='col-9 m-0 py-2 p-0 d-felx align-items-center'>
                             <span className='empName py-2'>Amir nawaz</span>  
                            </div>
                         </div>
                      </div>
                    </button>
                </li>
                <li>
                    <button className="dropdown-item px-1 hoverOverMe" type="button" style={{color:Styles.themeLightColor}}>
                      <div className="conatiner-fluid m-0 p-0">
                         <div className='row m-0 p-0'>
                            <div className='col-3 m-0 p-0'>
                            <img className='img-fluid m-0 p-2' src='./logo192.png' alt=''></img>
                            </div>
                            <div className='col-9 m-0 py-2 p-0 d-felx align-items-center'>
                             <span className='empName py-2'>Amir nawaz</span>  
                            </div>
                         </div>
                      </div>
                    </button>
                </li>
                <li>
                    <button className="dropdown-item px-1 hoverOverMe" type="button" style={{color:Styles.themeLightColor}}>
                      <div className="conatiner-fluid m-0 p-0">
                         <div className='row m-0 p-0'>
                            <div className='col-3 m-0 p-0'>
                            <img className='img-fluid m-0 p-2' src='./logo192.png' alt=''></img>
                            </div>
                            <div className='col-9 m-0 py-2 p-0 d-felx align-items-center'>
                             <span className='empName py-2'>Amir nawaz</span>  
                            </div>
                         </div>
                      </div>
                    </button>
                </li>
                <li>
                    <button className="dropdown-item px-1 hoverOverMe" type="button" style={{color:Styles.themeLightColor}}>
                      <div className="conatiner-fluid m-0 p-0">
                         <div className='row m-0 p-0'>
                            <div className='col-3 m-0 p-0'>
                            <img className='img-fluid m-0 p-2' src='./logo192.png' alt=''></img>
                            </div>
                            <div className='col-9 m-0 py-2 p-0 d-felx align-items-center'>
                             <span className='empName py-2'>Amir nawaz</span>  
                            </div>
                         </div>
                      </div>
                    </button>
                </li>
                <li>
                    <button className="dropdown-item px-1 hoverOverMe" type="button" style={{color:Styles.themeLightColor}}>
                      <div className="conatiner-fluid m-0 p-0">
                         <div className='row m-0 p-0'>
                            <div className='col-3 m-0 p-0'>
                            <img className='img-fluid m-0 p-2' src='./logo192.png' alt=''></img>
                            </div>
                            <div className='col-9 m-0 py-2 p-0 d-felx align-items-center'>
                             <span className='empName py-2'>Amir nawaz</span>  
                            </div>
                         </div>
                      </div>
                    </button>
                </li>
                <li>
                    <button className="dropdown-item px-1 hoverOverMe" type="button" style={{color:Styles.themeLightColor}}>
                      <div className="conatiner-fluid m-0 p-0">
                         <div className='row m-0 p-0'>
                            <div className='col-3 m-0 p-0'>
                            <img className='img-fluid m-0 p-2' src='./logo192.png' alt=''></img>
                            </div>
                            <div className='col-9 m-0 py-2 p-0 d-felx align-items-center'>
                             <span className='empName py-2'>Amir nawaz</span>  
                            </div>
                         </div>
                      </div>
                    </button>
                </li>
                <li>
                    <button className="dropdown-item px-1 hoverOverMe" type="button" style={{color:Styles.themeLightColor}}>
                      <div className="conatiner-fluid m-0 p-0">
                         <div className='row m-0 p-0'>
                            <div className='col-3 m-0 p-0'>
                            <img className='img-fluid m-0 p-2' src='./logo192.png' alt=''></img>
                            </div>
                            <div className='col-9 m-0 py-2 p-0 d-felx align-items-center'>
                             <span className='empName py-2'>Amir nawaz</span>  
                            </div>
                         </div>
                      </div>
                    </button>
                </li>
                <li>
                    <button className="dropdown-item px-1 hoverOverMe" type="button" style={{color:Styles.themeLightColor}}>
                      <div className="conatiner-fluid m-0 p-0">
                         <div className='row m-0 p-0'>
                            <div className='col-3 m-0 p-0'>
                            <img className='img-fluid m-0 p-2' src='./logo192.png' alt=''></img>
                            </div>
                            <div className='col-9 m-0 py-2 p-0 d-felx align-items-center'>
                             <span className='empName py-2'>Amir nawaz</span>  
                            </div>
                         </div>
                      </div>
                    </button>
                </li>
                <li>
                    <button className="dropdown-item px-1 hoverOverMe" type="button" style={{color:Styles.themeLightColor}}>
                      <div className="conatiner-fluid m-0 p-0">
                         <div className='row m-0 p-0'>
                            <div className='col-3 m-0 p-0'>
                            <img className='img-fluid m-0 p-2' src='./logo192.png' alt=''></img>
                            </div>
                            <div className='col-9 m-0 py-2 p-0 d-felx align-items-center'>
                             <span className='empName py-2'>Amir nawaz</span>  
                            </div>
                         </div>
                      </div>
                    </button>
                </li> <li>
                    <button className="dropdown-item px-1 hoverOverMe" type="button" style={{color:Styles.themeLightColor}}>
                      <div className="conatiner-fluid m-0 p-0">
                         <div className='row m-0 p-0'>
                            <div className='col-3 m-0 p-0'>
                            <img className='img-fluid m-0 p-2' src='./logo192.png' alt=''></img>
                            </div>
                            <div className='col-9 m-0 py-2 p-0 d-felx align-items-center'>
                             <span className='empName py-2'>Amir nawaz</span>  
                            </div>
                         </div>
                      </div>
                    </button>
                </li>
              </ul>
            </div>
            </li>
            {/* For chat end */}
            {/* for gift start */}
            <li className="p-1 d-flex justify-content-center align-items-center">
            <div className="btn-group">
              <button type="button" className="btn p-1" style={{borderRadius:Styles.generalBorderRadius,color:Styles.themeLightColor}} data-bs-toggle="dropdown" aria-expanded="false">
                <i className="fas fa-gift"></i>
              </button>
              
              <ul className="dropdown-menu dropdown-menu-end py-0 employeeList" style={{height:'35vh',overflow:'hidden',overflowY:'scroll',backgroundColor:Styles.themeLightDarkColor,color:Styles.themeLightColor,borderRadius:Styles.generalBorderSimpleRadius}}>
                <li className='m-0 p-0'>
                  <button className="dropdown-item" type="button" 
                    style={{
                     color:Styles.themeDarkColor,
                     backgroundColor:Styles.themeLightColor
                     }}>
                  All Employees
                   </button>
                </li>
                <li>
                    <button className="dropdown-item px-1 hoverOverMe" type="button" style={{color:Styles.themeLightColor}}>
                      <div className="conatiner-fluid m-0 p-0">
                         <div className='row m-0 p-0'>
                            <div className='col-3 m-0 p-0'>
                            <img className='img-fluid m-0 p-2' src='./logo192.png' alt=''></img>
                            </div>
                            <div className='col-9 m-0 py-2 p-0 d-felx align-items-center'>
                             <span className='empName py-2'>Amir nawaz</span>  
                            </div>
                         </div>
                      </div>
                    </button>
                </li>
                <li>
                    <button className="dropdown-item px-1 hoverOverMe" type="button" style={{color:Styles.themeLightColor}}>
                      <div className="conatiner-fluid m-0 p-0">
                         <div className='row m-0 p-0'>
                            <div className='col-3 m-0 p-0'>
                            <img className='img-fluid m-0 p-2' src='./logo192.png' alt=''></img>
                            </div>
                            <div className='col-9 m-0 py-2 p-0 d-felx align-items-center'>
                             <span className='empName py-2'>Amir nawaz</span>  
                            </div>
                         </div>
                      </div>
                    </button>
                </li>
                <li>
                    <button className="dropdown-item px-1 hoverOverMe" type="button" style={{color:Styles.themeLightColor}}>
                      <div className="conatiner-fluid m-0 p-0">
                         <div className='row m-0 p-0'>
                            <div className='col-3 m-0 p-0'>
                            <img className='img-fluid m-0 p-2' src='./logo192.png' alt=''></img>
                            </div>
                            <div className='col-9 m-0 py-2 p-0 d-felx align-items-center'>
                             <span className='empName py-2'>Amir nawaz</span>  
                            </div>
                         </div>
                      </div>
                    </button>
                </li>
                <li>
                    <button className="dropdown-item px-1 hoverOverMe" type="button" style={{color:Styles.themeLightColor}}>
                      <div className="conatiner-fluid m-0 p-0">
                         <div className='row m-0 p-0'>
                            <div className='col-3 m-0 p-0'>
                            <img className='img-fluid m-0 p-2' src='./logo192.png' alt=''></img>
                            </div>
                            <div className='col-9 m-0 py-2 p-0 d-felx align-items-center'>
                             <span className='empName py-2'>Amir nawaz</span>  
                            </div>
                         </div>
                      </div>
                    </button>
                </li>
                <li>
                    <button className="dropdown-item px-1 hoverOverMe" type="button" style={{color:Styles.themeLightColor}}>
                      <div className="conatiner-fluid m-0 p-0">
                         <div className='row m-0 p-0'>
                            <div className='col-3 m-0 p-0'>
                            <img className='img-fluid m-0 p-2' src='./logo192.png' alt=''></img>
                            </div>
                            <div className='col-9 m-0 py-2 p-0 d-felx align-items-center'>
                             <span className='empName py-2'>Amir nawaz</span>  
                            </div>
                         </div>
                      </div>
                    </button>
                </li>
                <li>
                    <button className="dropdown-item px-1 hoverOverMe" type="button" style={{color:Styles.themeLightColor}}>
                      <div className="conatiner-fluid m-0 p-0">
                         <div className='row m-0 p-0'>
                            <div className='col-3 m-0 p-0'>
                            <img className='img-fluid m-0 p-2' src='./logo192.png' alt=''></img>
                            </div>
                            <div className='col-9 m-0 py-2 p-0 d-felx align-items-center'>
                             <span className='empName py-2'>Amir nawaz</span>  
                            </div>
                         </div>
                      </div>
                    </button>
                </li>
                <li>
                    <button className="dropdown-item px-1 hoverOverMe" type="button" style={{color:Styles.themeLightColor}}>
                      <div className="conatiner-fluid m-0 p-0">
                         <div className='row m-0 p-0'>
                            <div className='col-3 m-0 p-0'>
                            <img className='img-fluid m-0 p-2' src='./logo192.png' alt=''></img>
                            </div>
                            <div className='col-9 m-0 py-2 p-0 d-felx align-items-center'>
                             <span className='empName py-2'>Amir nawaz</span>  
                            </div>
                         </div>
                      </div>
                    </button>
                </li>
                <li>
                    <button className="dropdown-item px-1 hoverOverMe" type="button" style={{color:Styles.themeLightColor}}>
                      <div className="conatiner-fluid m-0 p-0">
                         <div className='row m-0 p-0'>
                            <div className='col-3 m-0 p-0'>
                            <img className='img-fluid m-0 p-2' src='./logo192.png' alt=''></img>
                            </div>
                            <div className='col-9 m-0 py-2 p-0 d-felx align-items-center'>
                             <span className='empName py-2'>Amir nawaz</span>  
                            </div>
                         </div>
                      </div>
                    </button>
                </li>
                <li>
                    <button className="dropdown-item px-1 hoverOverMe" type="button" style={{color:Styles.themeLightColor}}>
                      <div className="conatiner-fluid m-0 p-0">
                         <div className='row m-0 p-0'>
                            <div className='col-3 m-0 p-0'>
                            <img className='img-fluid m-0 p-2' src='./logo192.png' alt=''></img>
                            </div>
                            <div className='col-9 m-0 py-2 p-0 d-felx align-items-center'>
                             <span className='empName py-2'>Amir nawaz</span>  
                            </div>
                         </div>
                      </div>
                    </button>
                </li> <li>
                    <button className="dropdown-item px-1 hoverOverMe" type="button" style={{color:Styles.themeLightColor}}>
                      <div className="conatiner-fluid m-0 p-0">
                         <div className='row m-0 p-0'>
                            <div className='col-3 m-0 p-0'>
                            <img className='img-fluid m-0 p-2' src='./logo192.png' alt=''></img>
                            </div>
                            <div className='col-9 m-0 py-2 p-0 d-felx align-items-center'>
                             <span className='empName py-2'>Amir nawaz</span>  
                            </div>
                         </div>
                      </div>
                    </button>
                </li>
              </ul>
            </div>
            </li>
            {/* for gift end */}
            {/* for setting start*/}
            <li className="p-1 d-flex justify-content-center align-items-center">
            <div className="btn-group">
              <button type="button" className="btn p-1" style={{borderRadius:Styles.generalBorderRadius,color:Styles.themeLightColor}} data-bs-toggle="dropdown" aria-expanded="false">
                <i className="fas fa-cog"></i>
              </button>
              
              <ul className="dropdown-menu dropdown-menu-end py-0 employeeList" style={{height:'35vh',overflow:'hidden',overflowY:'scroll',backgroundColor:Styles.themeLightDarkColor,color:Styles.themeLightColor,borderRadius:Styles.generalBorderSimpleRadius}}>
                <li className='m-0 p-0'>
                  <button className="dropdown-item" type="button" 
                    style={{
                     color:Styles.themeDarkColor,
                     backgroundColor:Styles.themeLightColor
                     }}>
                  All Employees
                   </button>
                </li>
                <li>
                    <button className="dropdown-item px-1 hoverOverMe" type="button" style={{color:Styles.themeLightColor}}>
                      <div className="conatiner-fluid m-0 p-0">
                         <div className='row m-0 p-0'>
                            <div className='col-3 m-0 p-0'>
                            <img className='img-fluid m-0 p-2' src='./logo192.png' alt=''></img>
                            </div>
                            <div className='col-9 m-0 py-2 p-0 d-felx align-items-center'>
                             <span className='empName py-2'>Amir nawaz</span>  
                            </div>
                         </div>
                      </div>
                    </button>
                </li>
                <li>
                    <button className="dropdown-item px-1 hoverOverMe" type="button" style={{color:Styles.themeLightColor}}>
                      <div className="conatiner-fluid m-0 p-0">
                         <div className='row m-0 p-0'>
                            <div className='col-3 m-0 p-0'>
                            <img className='img-fluid m-0 p-2' src='./logo192.png' alt=''></img>
                            </div>
                            <div className='col-9 m-0 py-2 p-0 d-felx align-items-center'>
                             <span className='empName py-2'>Amir nawaz</span>  
                            </div>
                         </div>
                      </div>
                    </button>
                </li>
                <li>
                    <button className="dropdown-item px-1 hoverOverMe" type="button" style={{color:Styles.themeLightColor}}>
                      <div className="conatiner-fluid m-0 p-0">
                         <div className='row m-0 p-0'>
                            <div className='col-3 m-0 p-0'>
                            <img className='img-fluid m-0 p-2' src='./logo192.png' alt=''></img>
                            </div>
                            <div className='col-9 m-0 py-2 p-0 d-felx align-items-center'>
                             <span className='empName py-2'>Amir nawaz</span>  
                            </div>
                         </div>
                      </div>
                    </button>
                </li>
                <li>
                    <button className="dropdown-item px-1 hoverOverMe" type="button" style={{color:Styles.themeLightColor}}>
                      <div className="conatiner-fluid m-0 p-0">
                         <div className='row m-0 p-0'>
                            <div className='col-3 m-0 p-0'>
                            <img className='img-fluid m-0 p-2' src='./logo192.png' alt=''></img>
                            </div>
                            <div className='col-9 m-0 py-2 p-0 d-felx align-items-center'>
                             <span className='empName py-2'>Amir nawaz</span>  
                            </div>
                         </div>
                      </div>
                    </button>
                </li>
                <li>
                    <button className="dropdown-item px-1 hoverOverMe" type="button" style={{color:Styles.themeLightColor}}>
                      <div className="conatiner-fluid m-0 p-0">
                         <div className='row m-0 p-0'>
                            <div className='col-3 m-0 p-0'>
                            <img className='img-fluid m-0 p-2' src='./logo192.png' alt=''></img>
                            </div>
                            <div className='col-9 m-0 py-2 p-0 d-felx align-items-center'>
                             <span className='empName py-2'>Amir nawaz</span>  
                            </div>
                         </div>
                      </div>
                    </button>
                </li>
                <li>
                    <button className="dropdown-item px-1 hoverOverMe" type="button" style={{color:Styles.themeLightColor}}>
                      <div className="conatiner-fluid m-0 p-0">
                         <div className='row m-0 p-0'>
                            <div className='col-3 m-0 p-0'>
                            <img className='img-fluid m-0 p-2' src='./logo192.png' alt=''></img>
                            </div>
                            <div className='col-9 m-0 py-2 p-0 d-felx align-items-center'>
                             <span className='empName py-2'>Amir nawaz</span>  
                            </div>
                         </div>
                      </div>
                    </button>
                </li>
                <li>
                    <button className="dropdown-item px-1 hoverOverMe" type="button" style={{color:Styles.themeLightColor}}>
                      <div className="conatiner-fluid m-0 p-0">
                         <div className='row m-0 p-0'>
                            <div className='col-3 m-0 p-0'>
                            <img className='img-fluid m-0 p-2' src='./logo192.png' alt=''></img>
                            </div>
                            <div className='col-9 m-0 py-2 p-0 d-felx align-items-center'>
                             <span className='empName py-2'>Amir nawaz</span>  
                            </div>
                         </div>
                      </div>
                    </button>
                </li>
                <li>
                    <button className="dropdown-item px-1 hoverOverMe" type="button" style={{color:Styles.themeLightColor}}>
                      <div className="conatiner-fluid m-0 p-0">
                         <div className='row m-0 p-0'>
                            <div className='col-3 m-0 p-0'>
                            <img className='img-fluid m-0 p-2' src='./logo192.png' alt=''></img>
                            </div>
                            <div className='col-9 m-0 py-2 p-0 d-felx align-items-center'>
                             <span className='empName py-2'>Amir nawaz</span>  
                            </div>
                         </div>
                      </div>
                    </button>
                </li>
                <li>
                    <button className="dropdown-item px-1 hoverOverMe" type="button" style={{color:Styles.themeLightColor}}>
                      <div className="conatiner-fluid m-0 p-0">
                         <div className='row m-0 p-0'>
                            <div className='col-3 m-0 p-0'>
                            <img className='img-fluid m-0 p-2' src='./logo192.png' alt=''></img>
                            </div>
                            <div className='col-9 m-0 py-2 p-0 d-felx align-items-center'>
                             <span className='empName py-2'>Amir nawaz</span>  
                            </div>
                         </div>
                      </div>
                    </button>
                </li> <li>
                    <button className="dropdown-item px-1 hoverOverMe" type="button" style={{color:Styles.themeLightColor}}>
                      <div className="conatiner-fluid m-0 p-0">
                         <div className='row m-0 p-0'>
                            <div className='col-3 m-0 p-0'>
                            <img className='img-fluid m-0 p-2' src='./logo192.png' alt=''></img>
                            </div>
                            <div className='col-9 m-0 py-2 p-0 d-felx align-items-center'>
                             <span className='empName py-2'>Amir nawaz</span>  
                            </div>
                         </div>
                      </div>
                    </button>
                </li>
              </ul>
            </div>
            </li>            
            {/* for setting end  */}
            </ul>
       </div>
     </div>
    </div>
  )
}

export default AdminDashboardHeader