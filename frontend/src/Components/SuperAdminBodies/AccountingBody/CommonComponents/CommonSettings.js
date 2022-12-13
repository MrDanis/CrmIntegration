import React from 'react'
import {AiFillSetting} from "react-icons/ai";
const CommonSettings = () => {
  return (
    <div className="btn-group dropstart">
    <button type="button" className="btn btn-outline-none bg-light text-dark fs-4 rounded-circle m-0 p-1 d-flex align-items-center justify-content-center" data-bs-toggle="dropdown" aria-expanded="false">
    <AiFillSetting ></AiFillSetting>
    </button>
    <ul className="dropdown-menu bg-dark text-light shadow">
      <li>test</li>
      <li>test</li>
      <li>test</li>
      <li>test</li>
    </ul>
   </div>
  )
}

export default CommonSettings