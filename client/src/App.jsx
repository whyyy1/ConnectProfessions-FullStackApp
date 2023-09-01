import { useState,useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import AuthStack from './AuthStack/AuthStack';
import AppStack from './AppStack/AppStack';
function App() {
  const currentUser = useSelector((state) => state.user)

  useEffect(() => {
    async function getUser() {

      if (!currentUser.isLoggedIn) {
        // User is not logged in, handle accordingly
        console.log('User is not logged in',currentUser);
        // setSelectState(false)
        // setUserData(null)
      } if (currentUser.isLoggedIn) {
        console.log(currentUser)
      

      }
    }
    getUser()
  }, [currentUser]);
  return (
    <Router>
      {currentUser.isLoggedIn ? <AppStack/>:<AuthStack/>}
      
    </Router>
  )
}

export default App
