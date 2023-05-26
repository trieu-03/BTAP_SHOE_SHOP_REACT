import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    listProduct: [],
    productDetail: {}
}

const ProductSlice = createSlice({
    name: 'ProductSlice',
    initialState,
    reducers: {
        setListProduct: (state, action) => {
            state.listProduct = action.payload;

        },
        setProductDetail: (state, action) => {
            state.productDetail = action.payload
        }
    }
});

export const { setListProduct, setProductDetail } = ProductSlice.actions

export default ProductSlice.reducer
