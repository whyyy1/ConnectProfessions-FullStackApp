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
  name: "user",
  initialState: getInitialUserState(),
  reducers: {
    // this sets the user
    userInfo: (state, action) => {
      console.log(action.payload);
    },
  },
});
//save middleware setup
export const saveStateMiddleware = (store) => (next) => (action) => {
  let userFunctionRequest = action.type;
  let actionRequest = action.payload.type;

  let options = ["userInfo"];
  options.map((reqType) => {
    if (userFunctionRequest === `${userSlice.name}/${reqType}`) {
      switch (actionRequest) {
        case "signUp":
          // Make the Axios request
          axios
            .get("http://localhost:5000", action.payload)
            .then((response) => {
              // Dispatch a success action with the response data
              console.log(response.data)
            //   store.dispatch(userInfo(response.data));
            })
            .catch((error) => {
              // Dispatch a failure action with the error
              store.dispatch(userInfo(error));
            });

          // You can return the result of next(action) if needed
        //   return next(action);
      }
    //   console.log(actionRequest);
    }
  });

  //we get the incoming data from the client and choose what to do with it
  // const result = next(action);
  // // Save the updated state to local storage
  // localStorage.setItem('user', JSON.stringify(store.getState().user));
  // return result;
  //if pass this check moves to the user functions
};

// Action creators are generated for each case reducer function
export const { userInfo } = userSlice.actions;

export default userSlice.reducer;
