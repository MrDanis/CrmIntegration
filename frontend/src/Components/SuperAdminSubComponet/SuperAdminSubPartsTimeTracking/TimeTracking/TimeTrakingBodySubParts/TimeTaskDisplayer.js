import React from 'react'
import '../../TimeTrackingIndex.css'
import TimeProgressSubPartOne from './TimeProgressSubPartOne'
const TimeTaskDisplayer = (props) => {
  let tester =[0,1,2,3,4];
  return (
    <div className="col-6">
          <div className=" py-2 p-1 bg-dark">
              <div className='conatiner-fluid m-0 p-0'>
                 <div className='row m-0 p-0'>
                 {/* Task boxes upper menu start*/}
                   <TimeProgressSubPartOne heading={props.value}></TimeProgressSubPartOne>
                 {/* Task boxes upper menu end*/}
                 {/* Task bosy start  is k nichy jo div hai us ko ak component bnana hai */}
                    <div className='col-12 px-2 mb-2 m-0 p-0'>
                        <div className='container-fluid m-0 p-0'>
                          <div className='row m-0 p-0'>
                          <div className='col-12 m-0 p-0'>
                           <p className='text-end d-flex justify-content-end align-items-center m-0 p-0'>
                             <span className='px-2 ViewAllLinks rounded-pill shadow'>
                             view all
                             </span>
                           </p> 
                          </div>
                            {
                              tester.map((item,index)=>
                              <div className='col-12 m-0 p-0'>
                            <div className='container-fluid m-0 p-0'>

                              <div className='row m-0 p-0'>
                              <div className='col-5 m-0 p-0'>
                                <p className='fw-bold'>
                                  Automatic Error report for Desktop Timer App gauzy-desktop-timer 0.140.0
                                </p>      
                             </div> 
                             <div className='col-3 m-0 p-0 d-flex flex-row justify-content-center align-items-center'>
                                   <div className='m-0 p-0 w-50 d-flex justify-content-end'>
                                   <span className='m-0 p-0'>
                                     5.67%
                                   </span>
                                   </div>
                                   <div className='m-0 px-2 p-0 w-50'>
                                      <div className='conatiner-fluid m-0 p-0'>
                                       <div className='row m-0 p-0'>
                                         <div className='col-12 m-0 p-0'>
                                         <div className="progress" style={{height:'.5vh',backgroundColor:'black'}}>
                                             <div className="progress-bar" role="progressbar" style={{width: "15%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                         </div>
                                         </div>  
                                       </div>
                                      </div>
                                   </div>
                             </div>
                             <div className='col-4 m-0 p-0 d-flex justify-content-end align-items-center'>
                                   <p className='mt-3'>02:22:22</p>
                             </div>
                              </div>
                            </div>
                          </div>
                          )}
                          </div>
                        </div>
                      </div>
                    
                  <div className='col-12 px-2 mb-2 m-0 p-0 d-none'>
                     {/* idr sy nichy jo bhi hoga wo ak component main use krna hai   */}
                        <div className='container-fluid m-0 p-0'>
                          <div className='row m-0 p-0'>
                          <div className='col-12 m-0 p-0'>
                           <p className='text-end d-flex justify-content-end align-items-center m-0 p-0'>
                             <span className='px-2 ViewAllLinks rounded-pill shadow'>
                             view all
                             </span>
                           </p> 
                          </div>
                          <div className='col-12 m-0 p-0'>
                            <div className='container-fluid m-0 p-0'>

                              <div className='row m-0 p-0'>
                              <div className='col-5 m-0 p-0'>
                                <p className='fw-bold'>
                                  Automatic Error report for Desktop Timer App gauzy-desktop-timer 0.140.0
                                </p>      
                             </div> 
                             <div className='col-3 m-0 p-0 d-flex flex-row justify-content-center align-items-center'>
                                   <div className='m-0 p-0 w-50 d-flex justify-content-end'>
                                   <span className='m-0 p-0'>
                                     5.67%
                                   </span>
                                   </div>
                                   <div className='m-0 px-2 p-0 w-50'>
                                      <div className='conatiner-fluid m-0 p-0'>
                                       <div className='row m-0 p-0'>
                                         <div className='col-12 m-0 p-0'>
                                         <div className="progress" style={{height:'.5vh',backgroundColor:'black'}}>
                                             <div className="progress-bar" role="progressbar" style={{width: "15%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                         </div>
                                         </div>  
                                       </div>
                                      </div>
                                   </div>
                             </div>
                             <div className='col-4 m-0 p-0 d-flex justify-content-end align-items-center'>
                                   <p className='mt-3'>02:22:22</p>
                             </div>
                              </div>

                            </div>
                          </div>
                            
                            
                             
                          </div>
                        </div>
                     {/* idr sy opper jo bhi hoga wo ak component main use krna hai   */}
                  </div>
                 {/* Task bosy end */}
                 </div>
              </div>
            <p>{console.log(props.value)}</p>
          </div>
        </div>
  )
}

export default TimeTaskDisplayer