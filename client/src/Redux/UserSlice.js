import { createSlice } from "@reduxjs/toolkit";

// Set user initial state on render

const getInitialUserState = () => {
  // check if user is in local storage
  const storeState = localStorage.getItem("user");

  if (storeState) {
    let data = JSON.parse(storeState);
    if (data && data.isLoggedIn) {
      return data;
    } else {
      return {
        isLoggedIn: false,
        token: "",
      };
    }
  }
};


// UserSlice what we do with our user

export const userSlice = createSlice({
    name: 'user',
    initialState: getInitialUserState(), 
    reducers: {
        // this sets the user 
        userInfo: (state,action)=>{
            console.log(action.payload)
        }
    }
})
//save middleware setup
export const saveStateMiddleware = (store) => (next) => (action) => {
    console.log(store)
};


// Action creators are generated for each case reducer function
export const { userInfo } = userSlice.actions

export default userSlice.reducer