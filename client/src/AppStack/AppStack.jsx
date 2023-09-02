import React from 'react'
import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage'
import SearchPage from './pages/SearchPage'
import { Routes, Route } from 'react-router-dom';
import LoadingPage from '../widgets/LoadingPage';
function AppStack({user}) {
    console.log(user)
  return (
    <div className="relative flex flex-col h-screen">
    <Routes>
      <Route path={`/home/${user.id}`} element={<HomePage />} />
      <Route path={`/profile/${user.id}`} element={<ProfilePage />} />
      <Route path={`/search/${user.id}`} element={<SearchPage />} />
      <Route path={`/logout`} element={<LoadingPage user={user}/>} />
      <Route path={`/loading`} element={<LoadingPage user={user}/>} />
      
    </Routes>
    
    </div>
  )
}

export default AppStack