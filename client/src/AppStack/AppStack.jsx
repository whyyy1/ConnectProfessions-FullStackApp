import React, { useState } from 'react'
import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfileEdit'
import SearchPage from './pages/SearchPage'
import { Routes, Route,Navigate } from 'react-router-dom';
import LoadingPage from '../widgets/LoadingPage';
import LogoutPage from './pages/Logout';
import ProfilePageEdit from './pages/ProfileEdit';
import Profile from './pages/Profile';
import ProfileView from './pages/ProfileView';


function AppStack({user,news,setUser,cld}) {
    const userSet = useState(user)

    console.log(userSet)

  return (
    <div className="relative flex flex-col h-screen">
    <Routes>
        
      <Route path={`/home/${user.id}`} element={<HomePage news={news} />} />
      <Route path={`/profile/${user.id}`} element={<Profile user={user}  />} />
      <Route path={`/profile/view/:id`} element={<ProfileView   />} />
      <Route path={`/profile/edit/${user.id}`} element={<ProfilePageEdit user={user} setUser={setUser}  />} />
      <Route path={`/search/${user.id}`} element={<SearchPage id={user.id}/>} />
      <Route path={`/logout`} element={<LogoutPage />} />
      <Route path={`/loading`} element={<LoadingPage user={user}/>} />
      <Route path="/*" element={<Navigate to={`/home/${user.id}`} />} />
    </Routes>
    
    </div>
  )
}

export default AppStack