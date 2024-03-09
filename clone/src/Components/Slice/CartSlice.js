import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cart:[]
}

const CartSlice = createSlice({
     name:"cart",
     initialState,

     reducers:{
        addToCart:(state, action)=>{
         const foundIndex = state.cart.findIndex(item=>item.id === action.payload.id)
          
         if(foundIndex !== -1){
             state.cart[foundIndex].quantity += action.payload.quantity
             
         }else{
            state.cart.push(action.payload)
         }
           
        },
        removeItemFromCart: (state, action) => {
            state.cart = state.cart.filter(item => item.id !== action.payload.id);
          },
     }
})

export const {addToCart} = CartSlice.actions;
export default CartSlice.reducer
export const {removeItemFromCart} = CartSlice.actions