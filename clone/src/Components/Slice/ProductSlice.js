import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    Product : []
}

const ProductSlice = createSlice({
    name: "Product",
    initialState,
    reducers:{
       
       setProducts : (state,  action) => {
           state.Product = action.payload 
           //console.log(state.Product)
       }
    }
})

export const { setProducts } = ProductSlice.actions
export default ProductSlice.reducer