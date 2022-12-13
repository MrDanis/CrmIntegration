import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector} from 'react-redux'
const ProtectAdmin = (props) => {
   const navigate = useNavigate();
   const { isLogin,userRole } = useSelector((state) => state.authUser)
   const {Componet} = props;
    useEffect(()=>{
        console.log(isLogin,userRole);
        // if((isLogin === false)&&((userRole==='Admin')||(userRole === 'Staff')||(userRole === 'Public')))
        // {
        //     navigate('/UnAuthorize')
        // }
    },[])
  return (
       <Componet></Componet>
  )
}

export default ProtectAdmin