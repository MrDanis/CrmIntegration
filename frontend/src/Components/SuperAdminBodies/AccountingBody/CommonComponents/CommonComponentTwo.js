import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineAppstore,AiOutlinePlus,AiOutlineBars } from "react-icons/ai";
const CommonComponentTwo = (props) => {
  return (
    <>
         <Link to={props.data} className="btn btn-outline-none text-light mx-2 rounded-pill m-0 p-1 d-flex align-items-center justify-content-center fs-6 addEstimate">
          <AiOutlinePlus ></AiOutlinePlus>
           <span className='mx-2'>
            {props.text}
           </span>
         </Link>
         <button type="button" className="btn btn-outline-none bg-light text-dark fs-5 rounded-circle mx-2 m-0 p-1 d-flex align-items-center justify-content-center" data-bs-toggle="dropdown" aria-expanded="false">
         <AiOutlineAppstore></AiOutlineAppstore>
         </button>
         <button type="button" className="btn btn-outline-none bg-light text-dark fs-6 rounded-circle mx-2 m-0 p-1 d-flex align-items-center justify-content-center " data-bs-toggle="dropdown" aria-expanded="false">
         <AiOutlineBars></AiOutlineBars>
         </button>
    </>
  )
}

export default CommonComponentTwo