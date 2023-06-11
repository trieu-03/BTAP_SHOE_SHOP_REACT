import { configureStore } from '@reduxjs/toolkit'
import productReducer from './redux-slides/productListSlide'
import UserReducer from './redux-user/User';

export const store = configureStore({
  reducer: {
    productReducer: productReducer,
    UserReducer
  },
})