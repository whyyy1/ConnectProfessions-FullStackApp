import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// Set user initial state on render

const getInitialUserState = () => {
    // check if user is in local storage
    const storeState = localStorage.getItem("user");
  
    if (storeState) {
      let data = JSON.parse(storeState);
      if (data && data.isLoggedIn) {
        return data;
      }
    }
  
    // Return the initial state if user data is not found or not logged in
    return {
      isLoggedIn: false,
      token: "",
    };
  };
  

// UserSlice what we do with our user

export const userSlice = createSlice({
  name: "user",
  initialState: getInitialUserState(),
  reducers: {
    // this sets the user
    userInfo: (state, action) => {
      // state.token = action.payload
      // state.isLoggedIn = true
      // localStorage.setItem('user',JSON.stringify(state.user))
      console.log(action.payload,);
    },
    signUp: (state, action) => {
      state.token = action.payload
      state.isLoggedIn = true
      localStorage.setItem('user',JSON.stringify(state.user))
      
    },
  },
});
//save middleware setup
export const saveStateMiddleware = (store) => (next) => (action) => {
  let userFunctionRequest = action.type;
  let actionRequest = action.payload.type;

  let options = ["userInfo", "signUp"];
  console.log(action.type);
  options.map((reqType) => {
    switch (action.type) {
      case "signUp":
        // Make the Axios request
        axios
          .post("http://localhost:5000/cp/register", action.payload)
          .then((response) => {
            // Dispatch a success action with the response data
            console.log(response.data.message);
            //store token
            store.dispatch(signUp(response.data.message));
          })
          .catch((error) => {
            // Dispatch a failure action with the error
            store.dispatch(signUp(error));
          });

      //           // You can return the result of next(action) if needed
                return next(action);
    }
    //   console.log(actionRequest);
  });

  //this if it passes to the user functions to execute
  const result = next(action);
  
};

// Action creators are generated for each case reducer function
export const { userInfo, signUp } = userSlice.actions;

export default userSlice.reducer;
