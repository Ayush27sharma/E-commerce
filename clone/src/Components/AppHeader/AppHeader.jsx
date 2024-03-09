import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


const AppHeader = () => {
  const navigate = useNavigate()
  const {cart} = useSelector((store)=>store.cart)
  return (
    <div className=' w-full h-full bg-slate-900 flex items-center justify-between'>

      <div className='logo w-20 p-2 '>
        <img src='https://t3.ftcdn.net/jpg/02/98/18/60/240_F_298186090_Rimyxol4jsYvYbQg1i6sttQ5N3oebXgt.jpg' alt='' />
      </div>

      <div className='p-4'>
        <button
          onClick={() => {
            navigate("/cart-page")
          }}
          className='border border-blue-700 bg-slate-200 text-slate-800 rounded-full p-2 font-bold'
        >Cart<span className='p-1 border border-red-500 rounded-full bg-red-700'>{cart.length}</span></button>
      </div>
    </div>
  )
}



export default AppHeader