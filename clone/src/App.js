import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import { Provider } from 'react-redux'
import store from './Store'

import Products from './Components/Products/Products'
import Carousel from './Components/Carousel/Carousel'
import CartPage from './Components/Cart/CartPage'


const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<Carousel/>
    },
    {
      path: "/products",
      element:<Products/>
    },
    {
      path: "/cart-page",
      element:<CartPage/>
    }
    
  ]) 
  return (
    
   
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  )
}

export default App
