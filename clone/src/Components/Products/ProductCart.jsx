import React from 'react'
import "../../App.css"




const ProductCart = ({ imgUrl, Tittle, Price, id, onAddToCard}) => {

  return (

    <div className='w-56 h-70 border border-slate-400 product-card border-x-slate-200 p-2'>
      <img src={imgUrl} alt="" />
      <h4>{Tittle}</h4>
      <p>{id}</p>
      <p>{Price}</p>
      <span>
        
         
              <button
              onClick={onAddToCard}
              className='border border-slate-400 bg-slate-500 rounded  text-white  px-2 py-1'>Add To Cart</button>
        

      </span>
    </div>

  )
}

export default ProductCart