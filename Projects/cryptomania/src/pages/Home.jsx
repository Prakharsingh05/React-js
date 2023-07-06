import React from 'react'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <main className='w-full h-full flex flex-col first-letter: content-center items-center relative text-white font-nunito'>
      home
      <div className='w-screen h-screen bg-gray-300 fixed -z-10'>

      </div>
      <Outlet/>
    </main>
  )
}

export default Home
