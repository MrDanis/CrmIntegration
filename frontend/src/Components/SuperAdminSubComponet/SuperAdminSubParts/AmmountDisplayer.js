import React from 'react'
import DisplayPriceStatus from './DisplayPriceStatus'
import Styles from '../../../Assets/Styles/GlobalStyle'
import './AmmountDisplayer.css'
const AmmountDisplayer=()=> {
    const priceDisplayerData =[
        {
          class:'text-primary fw-bold mt-3',  
          text:'Totall Income',
          amount:'€ 35,488.67' 
        },{
            class:'text-danger fw-bold mt-3',
            text:'Total Expenses',
            amount:'€ 0.00' 
        },{
            class:'text-warning fw-bold mt-3',
            text:'Profit',
            amount:'€ 35,488.67' 
        }
        ,{
            class:'text-success fw-bold mt-3',
            text:'Total Bonus',
            amount:'€ 35,488.87' 
        }
    ]
    
  return (
    <div className='container-fluid m-0 p-0'>    
      <div class="row g-3">
      {
        priceDisplayerData.map((item,index)=><>
        <div class="col-4" key={index}>
         <div class="p-3 bg-dark shadow" style={{borderRadius:Styles.generalBorderSimpleRadius}}>
              <DisplayPriceStatus data={item}></DisplayPriceStatus>
         </div>
       </div>
        </>)
      }
     </div>   
    </div>
  )
}

export default AmmountDisplayer