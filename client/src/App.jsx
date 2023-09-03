import { useState, useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import AuthStack from "./AuthStack/AuthStack";
import AppStack from "./AppStack/AppStack";

import jwt from 'jwt-decode' 
import AppBar from "./AppStack/Widgets/AppNav";
import AuthBar from "./AuthStack/widgets/AuthNav";
import axios from "axios";
function App() {
  const currentUser = useSelector((state) => state.user);
  const [user,setUser] = useState({})
  const [news,setNews] = useState([])
 
  useEffect(() => {
    async function getNews(){
      let data = await axios.get('http://localhost:5000/')
      setNews(data.data.message)
    }
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
    getNews()
  }, [currentUser.isLoggedIn]);

  return (
    <ChakraProvider>
      <Router>
        
        {currentUser.isLoggedIn ? <><AppStack user={user} news={news} /><AppBar type={'app'} id={user.id} /></> :<> <AuthStack /><AuthBar type={'auth'} id={user.id}/></>}
        
        
        </Router>
    </ChakraProvider>
  );
}

export default App;
