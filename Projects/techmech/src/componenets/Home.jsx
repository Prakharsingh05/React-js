import React from 'react'
import vg from "../assets/2.jpg"

const Home = () => {
  return (
    <>
    <div className='home'>
      Home

      <main>
        <h1>Techmech</h1>
        <p>Solution to all your problems</p>
      </main>
    </div>



    <div className="home2">
        <img src={vg} alt="Graphics"/>
        <div>
            <p>
            At techmech, we are dedicated to being your premier solution provider, offering a comprehensive range of services to meet your diverse needs. We understand that every business faces unique challenges, and we are here to provide tailored solutions that drive your success.
            With years of industry expertise
            </p>
        </div>
    </div>
    </>
  )
}

export default Home
