import { configureStore } from '@reduxjs/toolkit'
import productSlice from './slice/productSlice'
import loginSlice from './slice/loginSlice'
import userDataSlice from './slice/userDataSlice'

export default configureStore({
  reducer: {
    product: productSlice,
    user: loginSlice,
    userData: userDataSlice,
  }
})