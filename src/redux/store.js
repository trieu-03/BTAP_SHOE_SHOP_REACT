import { configureStore } from '@reduxjs/toolkit'
import productReducer from './redux-slides/productListSlide'

export const store = configureStore({
  reducer: {
    productReducer: productReducer
  },
})