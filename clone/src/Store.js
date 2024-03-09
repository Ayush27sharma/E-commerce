import { configureStore } from '@reduxjs/toolkit'
import ProductSlice  from './Components/Slice/ProductSlice';
import CartSlice from './Components/Slice/CartSlice';

const store = configureStore({
    reducer:{
        Product : ProductSlice,
        cart : CartSlice
    }
})

export default store;
