import React, { useEffect } from 'react'
import axios from "axios"
import ProductCart from "./ProductCart"
import { setProducts } from '../Slice/ProductSlice'
import { useDispatch, useSelector } from 'react-redux'
import Home from '../Home/Home'
import { addToCart } from '../Slice/CartSlice'


const Products = () => {
  const dispatch = useDispatch()
  
  const {Product} = useSelector((store)=>store.Product)
 // console.log(Product)
  // const URL = `${process.env.REACT_APP_BASE_URL}/products`


  useEffect(()=>{
    axios.get("https://dummyjson.com/products").then((res)=>{
      console.log(res.data)
      dispatch(setProducts(res.data.products))
      
    }).catch((err)=>{
      console.log("err", err)
    })
  })

  
  
  return (
    <>
    
   <Home>
   <div className='flex justify-evenly flex-wrap gap-4 p-3'>
    
    {
     Product?.map((obj)=>{
       return  <ProductCart
       id = {obj.id}
       imgUrl={obj?.images[0]}
       Tittle={obj?.title}
       Price={obj?.price}
       onAddToCard={()=>dispatch(addToCart({...obj, quantity:1}))}/> 
         
     })
   }
 </div>
   </Home>
    
    </>
  )
}

export default Products