import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';

import LoginPage  from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import {  Navigate } from 'react-router-dom'
import { useSelector } from "react-redux";
import LoadingPage from '../widgets/LoadingPage';

function AuthStack({id}) {
  const userId = useSelector((state) => state.user.id);
  useEffect(()=>{
    console.log(userId)
  },[])
  return (
    <div className="relative flex flex-col h-screen">
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/login' element={<LoginPage id={userId} />} />
      <Route path='/register' element={<RegisterPage id={userId} />} />
      <Route path={`/loading`} element={<LoadingPage />} />
      {/* <Route path={`/home/*`} element={<Navigate to={`/`} />} />
      <Route path={`/profile/*`} element={<Navigate to={`/`} />} />
      <Route path={`/search/*`} element={<Navigate to={`/`} />} />
      <Route path={`/logout/*`} element={<Navigate to={`/`} />} /> */}
    </Routes>
    
    </div>
  );
}

export default AuthStack;
