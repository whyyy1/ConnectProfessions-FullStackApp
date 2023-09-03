import React, { useState } from 'react'
import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage'
import SearchPage from './pages/SearchPage'
import { Routes, Route } from 'react-router-dom';
import LoadingPage from '../widgets/LoadingPage';
import LogoutPage from './pages/Logout';


function AppStack({user,news}) {
    

    console.log(user)
  return (
    <div className="relative flex flex-col h-screen">
    <Routes>
      <Route path={`/home/${user.id}`} element={<HomePage news={news} />} />
      <Route path={`/profile/${user.id}`} element={<ProfilePage user={user} />} />
      <Route path={`/search/${user.id}`} element={<SearchPage />} />
      <Route path={`/logout`} element={<LogoutPage />} />
      <Route path={`/loading`} element={<LoadingPage user={user}/>} />
      
    </Routes>
    
    </div>
  )
}

export default AppStack