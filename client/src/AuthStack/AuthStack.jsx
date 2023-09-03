import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';

import LoginPage  from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import {  Navigate } from 'react-router-dom'
import { useSelector } from "react-redux";


function AuthStack() {
  
  useEffect(()=>{
    
  },[])
  return (
    <div className="relative flex flex-col h-screen">
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage  />} />
     
      <Route path="/*" element={<Navigate to="/" />} />
      {/* <Route path={`/home/*`} element={<Navigate to={`/`} />} />
      <Route path={`/profile/*`} element={<Navigate to={`/`} />} />
      <Route path={`/search/*`} element={<Navigate to={`/`} />} />
      <Route path={`/logout/*`} element={<Navigate to={`/`} />} /> */}
    </Routes>
    
    </div>
  );
}

export default AuthStack;
