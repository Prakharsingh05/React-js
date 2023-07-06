import React from 'react'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      HOME
      <Outlet/>
    </div>
  )
}

export default Home
