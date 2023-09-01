import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';

import LoginPage  from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AuthNav from './widgets/AuthNav';


function AuthStack() {
  return (
    <div className="relative flex flex-col h-screen">
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
      
    </Routes>
    <AuthNav/>
    </div>
  );
}

export default AuthStack;
