import { configureStore } from '@reduxjs/toolkit'
import AutheReducer from './Features/UserClice'
export const Store = configureStore({
  reducer: {
   authUser:AutheReducer
  },
})