import { useState, useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import AuthStack from "./AuthStack/AuthStack";
import AppStack from "./AppStack/AppStack";

import jwt from 'jwt-decode' 
import AppBar from "./AppStack/Widgets/AppNav";
import AuthBar from "./AuthStack/widgets/AuthNav";
function App() {
  const currentUser = useSelector((state) => state.user);
  const [user,setUser] = useState({})
 
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
        let tokenUser = await jwt(currentUser.token)
        setUser(tokenUser)
        
      }
    }
    getUser();
  }, [currentUser.isLoggedIn]);

  return (
    <ChakraProvider>
      <Router>
        
        {currentUser.isLoggedIn ? <><AppStack user={user} /><AppBar type={'app'} id={user.id} /></> :<> <AuthStack /><AuthBar type={'auth'} id={user.id}/></>}
        <button onClick={()=> console.log(user)}>Click me</button>
        
        </Router>
    </ChakraProvider>
  );
}

export default App;
