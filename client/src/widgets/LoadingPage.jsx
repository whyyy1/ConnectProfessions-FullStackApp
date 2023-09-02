import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import {  Navigate } from 'react-router-dom'
import { useSelector } from "react-redux";



  
    
    
   

function LoadingPage({user}) {
    useEffect(()=>{},[user.id])
    console.log(user)
  return (
    
    <div>Loading page
        <br/>
        <button onClick={()=>console.log(user)}>user info</button>
        
    <Routes>
      
    <Route path={`/loading`} element={<Navigate to={`/profile/${user.id}`} />} />
    
  </Routes>
  </div>
  
  )
}

export default LoadingPage