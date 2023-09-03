import axios from "axios";
import { signUp,login,  editUser } from './UserSlice';

export const saveStateMiddleware = (store) => (next) => async (action) => {
  let actionRequest = action.type;
    console.log(actionRequest)
  // Check if the action type matches "signUp"
  if (actionRequest === "user/signUp") {
    try {
      const response = await axios.post("http://localhost:5000/cp/register", action.payload);
      // Dispatch a success action with the response data
      console.log(response.data.message);
      // Store token
      store.dispatch(signUp(response.data));
    } catch (error) {
      // Dispatch a failure action with the error
      store.dispatch(signUp(error));
    }
  }

  if (actionRequest === "user/login") {
    
    console.log(action.payload)
    try{
        const response = await axios.post('http://localhost:5000/cp/login',action.payload)
        console.log(response)
    }
    catch(e){
        store.dispatch(login(e.response.data.error))
       
    }
  }

  if (actionRequest === "user/editUser") {
    console.log(action.payload);
    
  }

  // Continue the action through the middleware chain
  return next(action);
};
