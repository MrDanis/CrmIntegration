import React,{useEffect,useState} from 'react'

const TestBackend=()=> {
  const [userDaata,setuserDaata] = useState();
  useEffect(()=>{
    // fetch('/api/getAllUsers').then((users)=>{console.log(users)});
   fetch( "/api/getAllUsers" )

.then(res => res.json())

.then(data =>{setuserDaata(data.users)} )
  },[])
  return (
    <div>
       {console.log(userDaata)}
    </div>
  )
}

export default TestBackend