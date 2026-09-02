import { configureStore } from '@reduxjs/toolkit'
import { cartSlice } from './slices/cartSlice'
import  productSlice  from './slices/productSlice'

export const store = configureStore({
  reducer: {
    // item: cartSlice,
    products: productSlice,
    
  },
})