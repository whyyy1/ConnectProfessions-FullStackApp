import { useState, useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import AuthStack from "./AuthStack/AuthStack";
import AppStack from "./AppStack/AppStack";
import NavBar from "./widgets/AuthNav";

function App() {
  const currentUser = useSelector((state) => state.user);

  useEffect(() => {
    async function getUser() {
      if (!currentUser.isLoggedIn) {
        // User is not logged in, handle accordingly
        console.log("User is not logged in", currentUser);
        // setSelectState(false)
        // setUserData(null)
      }
      if (currentUser.isLoggedIn) {
        console.log(currentUser);
      }
    }
    getUser();
  }, [currentUser]);

  return (
    <ChakraProvider>
      <Router>
        
        {currentUser.isLoggedIn ? <><AppStack /><NavBar type={'app'}/></> :<> <AuthStack /><NavBar type={'auth'}/></>}
      
        </Router>
    </ChakraProvider>
  );
}

export default App;
