import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// Set user initial state on render

const getInitialUserState = () => {
    // check if user is in local storage
    const storeState = localStorage.getItem("user");
    console.log(storeState)
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
      console.log(action.payload);
    },
    signUp: (state, action) => {
        console.log(action.payload)
      state.token = action.payload.message
      state.id = action.payload.id
    //   console.log(state, state.isLoggedIn,state.token)
      state.isLoggedIn = true
      localStorage.setItem('user',JSON.stringify({isLoggedIn: state.isLoggedIn,token:state.token}))
      
    },
  },
});


// Action creators are generated for each case reducer function
export const { userInfo, signUp } = userSlice.actions;

export default userSlice.reducer;
