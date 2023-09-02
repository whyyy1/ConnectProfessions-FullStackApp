import axios from "axios";
import { signUp } from './UserSlice';

export const saveStateMiddleware = (store) => (next) => (action) => {
    let actionRequest = action.type;
      console.log(actionRequest)
    // Check if the action type matches "signUp"
    if (actionRequest === "signUp") {
      
      // Make the Axios request
      axios
        .post("http://localhost:5000/cp/register", action.payload)
        .then((response) => {
          // Dispatch a success action with the response data
          console.log(response.data.message);
          // Store token
          store.dispatch(signUp(response.data));
        })
        .catch((error) => {
          // Dispatch a failure action with the error
          store.dispatch(signUp(error));
        });
    }
  
    // Continue the action through the middleware chain
    return next(action);
  };