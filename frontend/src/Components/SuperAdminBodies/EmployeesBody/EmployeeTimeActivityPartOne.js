import React, { useState } from 'react'
import CommonTimeActivityBox from '../AccountingBody/CommonComponents/CommonTimeActivityBox';
const EmployeeTimeActivityPartOne = () => {
    const [testArray,settestArray] = useState([
        {
            class:'bg-transparent col-12 col-sm-4 col-md-3',
            title:'Member Worked',
            value:'17',
            barValue:'35%'
        },
        {
            class:'bg-transparent col-12 col-sm-4 col-md-3',
            title:'Projects Worked',
            value:'4',
            barValue:'35%'
        },
        {
            class:'bg-transparent col-12 col-sm-4 col-md-3',
            title:'Activity',
            value:'15.22%',
            barValue:'35%'
        },
        {
            class:'bg-transparent col-12 col-sm-4 col-md-3',
            title:'Total Hours',
            value:'31:57:58',
            barValue:'35%'
        }
    
    
    ]);
  return (
    <div className='col-12 m-0 px-2 p-2'>
    <div className='row m-0 p-0 g-3'>
      {
        testArray.map((item,index)=>
        <CommonTimeActivityBox key={index} class={item.class} title={item.title} value={item.value} barValue={item.barValue}></CommonTimeActivityBox>
        )
      }
    </div>
</div>
  )
}

export default EmployeeTimeActivityPartOne