import React from 'react'
import { NavLink } from 'react-router-dom'


const NavBar = () => {

  const navigation = [
    {
      label: "All Products",
      path: "/products"
    },
    {
      label: "Mobiles",
      path: "/mobiles"
    },
    {
      label: "miniTv",
      path: "/minitv"
    },
    {
      label: "Electronics",
      path: "/electronics"
    },
    {
      label: "Best Sellers",
      path: "/best-sellers"
    },]

  return (
    <div className='w-full h-full bg-gray-700'>
      <ul className='flex'>
        {
          navigation.map((NavItem, index) => {
            const { label, path } = NavItem

            
            return (
              <NavLink
                to={path}
                className={({ isActive }) => `cursor-pointer px-4 py-2 font-bold text-white
                 ${isActive && "text-orange-500"}`} >

                <li key={index}>{label}</li>
              </NavLink>
            )
          })
        }
      </ul>
    </div>
  )
}

export default NavBar