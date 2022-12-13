import React from 'react'
import './EmployeeData.css'
import Styles from '../../../Assets/Styles/GlobalStyle'
const EmployeeDataTable =()=>{
  return (
    <div className='conatiner-fluid m-0 p-0'>
       <div className='row m-0 p-0'>
          <div className='col-12 m-0 p-0'  style={{backgroundColor:'#18181b'}}>
          <h3 className='mx-1 mt-2 mb-5 '>Employee Statistics for Ever Technologies LTD</h3>
          </div>
          <div className='m-0 p-0 table-responsive EmployeeDataTable' style={{height:'30vh',overflow:'hidden',overflowY:'auto'}}>  
          <table className="table table-borderless table-dark table-striped" >
                 <thead style={{position:'sticky',top: 0,zIndex: 1}}>
                   <tr className='shadow mb-2 mx-2' style={{backgroundColor:Styles.themeDarkDarkColor,borderRadius:Styles.generalBorderRadius,color:Styles.themeLightColor}}>
                     <th scope="col">
                    <span className='fw-normal fs-6'>Employees</span> </th>
                     <th scope="col">
                    <span className='fw-normal fs-6'> Total Income</span></th>
                     <th scope="col">
                    <span className='fw-normal fs-6'>Total Expenses</span></th>
                     <th scope="col">
                    <span className='fw-normal fs-6'>Profit</span></th>
                     <th scope="col">
                    <span className='fw-normal fs-6'>Bonus</span> </th>
                   </tr>
                 </thead>
                 <tbody>
                   <tr className='mt-2 shadow' style={{backgroundColor:Styles.themeDarkDarkColor,borderRadius:Styles.generalBorderRadius,color:Styles.themeLightColor}}>             
                     <td className='align-middle'>
                       <div className='p-1 m-0'>  
                        <span className=' px-2 p-1 m-0 rounded-pill shadow bg-dark'>
                           <i class="fas fa-smile m-0"></i>
                           <span className='mx-1'>Amir Nawaz</span>   
                        </span>
                     </div>
                     </td>
                     <td>€ 0.00</td>
                     <td>€ 0.00</td>
                     <td>€ 0.00</td>
                     <td>€ 0.00</td>
                   </tr>
                   <tr className='mt-2 shadow' style={{backgroundColor:Styles.themeDarkDarkColor,borderRadius:Styles.generalBorderRadius,color:Styles.themeLightColor}}>             
                     <td className='align-middle'>
                       <div className='p-1 m-0'>  
                        <span className=' px-2 p-1 m-0 rounded-pill shadow bg-dark'>
                           <i class="fas fa-smile m-0"></i>
                           <span className='mx-1'>Amir Nawaz</span>   
                        </span>
                     </div>
                     </td>
                     <td>€ 0.00</td>
                     <td>€ 0.00</td>
                     <td>€ 0.00</td>
                     <td>€ 0.00</td>
                   </tr>
                   <tr className='mt-2 shadow' style={{backgroundColor:Styles.themeDarkDarkColor,borderRadius:Styles.generalBorderRadius,color:Styles.themeLightColor}}>             
                     <td className='align-middle'>
                       <div className='p-1 m-0'>  
                        <span className=' px-2 p-1 m-0 rounded-pill shadow bg-dark'>
                           <i class="fas fa-smile m-0"></i>
                           <span className='mx-1'>Amir Nawaz</span>   
                        </span>
                     </div>
                     </td>
                     <td>€ 0.00</td>
                     <td>€ 0.00</td>
                     <td>€ 0.00</td>
                     <td>€ 0.00</td>
                   </tr>
                   <tr className='mt-2 shadow' style={{backgroundColor:Styles.themeDarkDarkColor,borderRadius:Styles.generalBorderRadius,color:Styles.themeLightColor}}>             
                     <td className='align-middle'>
                       <div className='p-1 m-0'>  
                        <span className=' px-2 p-1 m-0 rounded-pill shadow bg-dark'>
                           <i class="fas fa-smile m-0"></i>
                           <span className='mx-1'>Amir Nawaz</span>   
                        </span>
                     </div>
                     </td>
                     <td>€ 0.00</td>
                     <td>€ 0.00</td>
                     <td>€ 0.00</td>
                     <td>€ 0.00</td>
                   </tr>
                   <tr className='mt-2 shadow' style={{backgroundColor:Styles.themeDarkDarkColor,borderRadius:Styles.generalBorderRadius,color:Styles.themeLightColor}}>             
                     <td className='align-middle'>
                       <div className='p-1 m-0'>  
                        <span className=' px-2 p-1 m-0 rounded-pill shadow bg-dark'>
                           <i class="fas fa-smile m-0"></i>
                           <span className='mx-1'>Amir Nawaz</span>   
                        </span>
                     </div>
                     </td>
                     <td>€ 0.00</td>
                     <td>€ 0.00</td>
                     <td>€ 0.00</td>
                     <td>€ 0.00</td>
                   </tr>
                   <tr className='mt-2 shadow' style={{backgroundColor:Styles.themeDarkDarkColor,borderRadius:Styles.generalBorderRadius,color:Styles.themeLightColor}}>             
                     <td className='align-middle'>
                       <div className='p-1 m-0'>  
                        <span className=' px-2 p-1 m-0 rounded-pill shadow bg-dark'>
                           <i class="fas fa-smile m-0"></i>
                           <span className='mx-1'>Amir Nawaz</span>   
                        </span>
                     </div>
                     </td>
                     <td>€ 0.00</td>
                     <td>€ 0.00</td>
                     <td>€ 0.00</td>
                     <td>€ 0.00</td>
                   </tr>
                   <tr className='mt-2 shadow' style={{backgroundColor:Styles.themeDarkDarkColor,borderRadius:Styles.generalBorderRadius,color:Styles.themeLightColor}}>             
                     <td className='align-middle'>
                       <div className='p-1 m-0'>  
                        <span className=' px-2 p-1 m-0 rounded-pill shadow bg-dark'>
                           <i class="fas fa-smile m-0"></i>
                           <span className='mx-1'>Amir Nawaz</span>   
                        </span>
                     </div>
                     </td>
                     <td>€ 0.00</td>
                     <td>€ 0.00</td>
                     <td>€ 0.00</td>
                     <td>€ 0.00</td>
                   </tr>
                   <tr className='mt-2 shadow' style={{backgroundColor:Styles.themeDarkDarkColor,borderRadius:Styles.generalBorderRadius,color:Styles.themeLightColor}}>             
                     <td className='align-middle'>
                       <div className='p-1 m-0'>  
                        <span className=' px-2 p-1 m-0 rounded-pill shadow bg-dark'>
                           <i class="fas fa-smile m-0"></i>
                           <span className='mx-1'>Amir Nawaz</span>   
                        </span>
                     </div>
                     </td>
                     <td>€ 0.00</td>
                     <td>€ 0.00</td>
                     <td>€ 0.00</td>
                     <td>€ 0.00</td>
                   </tr>
                   <tr className='mt-2 shadow' style={{backgroundColor:Styles.themeDarkDarkColor,borderRadius:Styles.generalBorderRadius,color:Styles.themeLightColor}}>             
                     <td className='align-middle'>
                       <div className='p-1 m-0'>  
                        <span className=' px-2 p-1 m-0 rounded-pill shadow bg-dark'>
                           <i class="fas fa-smile m-0"></i>
                           <span className='mx-1'>Amir Nawaz</span>   
                        </span>
                     </div>
                     </td>
                     <td>€ 0.00</td>
                     <td>€ 0.00</td>
                     <td>€ 0.00</td>
                     <td>€ 0.00</td>
                   </tr>
                   <tr className='mt-2 shadow' style={{backgroundColor:Styles.themeDarkDarkColor,borderRadius:Styles.generalBorderRadius,color:Styles.themeLightColor}}>             
                     <td className='align-middle'>
                       <div className='p-1 m-0'>  
                        <span className=' px-2 p-1 m-0 rounded-pill shadow bg-dark'>
                           <i class="fas fa-smile m-0"></i>
                           <span className='mx-1'>Amir Nawaz</span>   
                        </span>
                     </div>
                     </td>
                     <td>€ 0.00</td>
                     <td>€ 0.00</td>
                     <td>€ 0.00</td>
                     <td>€ 0.00</td>
                   </tr>
                   
                 </tbody>
               </table>      
          </div>
       </div>
    </div>
  )
}

export default EmployeeDataTable