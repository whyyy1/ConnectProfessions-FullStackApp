import { configureStore } from '@reduxjs/toolkit'
import userReducer from './UserSlice'
import { saveStateMiddleware } from './Middleware'

// set up the store to take in a user and we setup the middleware to take our custom middleware
export default configureStore({
    reducer : {
        user : userReducer
    }
})