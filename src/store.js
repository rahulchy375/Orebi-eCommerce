import { configureStore } from '@reduxjs/toolkit'
import productSlice from './slice/productSlice'

export default configureStore({
  reducer: {
    product: productSlice,
  }
})