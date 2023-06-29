import React from 'react'
import {Link} from "react-router-dom"

function Header() {
  return (
    <nav>
        <h1>Techmech</h1>
        <main>
            <Link to = {"/"}>Home</Link>
            <Link to = {"/contact"}>Contact</Link>
            <Link to = {"/#about"}>About</Link>
            <Link to = {"/#brands"}>Brands</Link>
            <Link to = {"/"}>Services</Link>
            
        </main>
    </nav>
  )
}

export default Header
