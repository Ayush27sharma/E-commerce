import React from 'react'
import AppHeader from '../AppHeader/AppHeader'
import NavBar from '../NavBar/NavBar'



const Home = ({ children }) => {
  return (
    <div>
      <div className=''>
        <AppHeader />
      </div>

      <div>
        <NavBar />
      </div>

      <div>
        <div>{children}</div>
      </div>

    </div>
  )
}

export default Home