import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Protected = (props) => {
    const navigate = useNavigate();
    
   useEffect(()=>{
const token = localStorage.getItem("token");
if(!token){
navigate("/login")
}
   },[navigate])
  return (
    <div>
{props.children}
    </div>
  )
}

export default Protected