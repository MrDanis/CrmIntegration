import React, { useEffect } from 'react'
import Login from '../../Components/Public/Login'
import ForgotPassword from '../../Components/Public/ForgotPassword'
import Register from '../../Components/Public/Register'
import { useSelector} from 'react-redux';
const AuthenticaionScreen = (props) => {
    const { isLogin,userRole } = useSelector((state) => state.authUser)
    useEffect(()=>{
        console.log('Component should be change according to the props change');
    },[props.data,isLogin,userRole])
  return (
    <>
    {
        props.data==='Login'?<Login></Login>:null
    }
    {
        props.data==='Register'?<Register></Register>:null
    }
    {
        props.data==='ForgotPassword'?<ForgotPassword></ForgotPassword>:null
    }
    </>
  )
}

export default AuthenticaionScreen