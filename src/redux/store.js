import {configureStore} from '@reduxjs/toolkit'
import loanReducer from './reducers/loanReducer'
import userReducer from './reducers/userReducer'

export const store = configureStore({
    reducer : {
        users: userReducer,
        loans: loanReducer
        }
    })