import { configureStore } from '@reduxjs/toolkit'
import userReducer, { saveStateMiddleware } from './UserSlice'

// set up the store to take in a user and we setup the middleware to take our custom middleware
export default configureStore({
    reducer : {
        user : userReducer
    }, 
    middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat(saveStateMiddleware)
})