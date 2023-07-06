import React from 'react'
import {Link} from 'react-router-dom'
import logoSvg from "../assets/logo.svg"

const Logo = () => {
  return (
    <Link to="/"
    className="
    absolute top-[1.rem] left-[1.rem] [text-decoration:none]
    text-lg text-cyan flex items-cente
    
    "
    >
      <img src={logoSvg}/>
      <span>Track Crypto</span>
    </Link>
  )
}

export default Logo
