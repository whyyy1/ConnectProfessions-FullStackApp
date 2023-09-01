import React from 'react'
import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage'
import SearchPage from './pages/SearchPage'
import { Routes, Route } from 'react-router-dom';
function AppStack({user}) {
  return (
    <div className="relative flex flex-col h-screen">
    <Routes>
      <Route path={`/home/${user.id}`} element={<HomePage />} />
      <Route path={`/profile/${user.id}`} element={<ProfilePage />} />
      <Route path={`/search/${user.id}`} element={<SearchPage />} />
      
    </Routes>
    
    </div>
  )
}

export default AppStack