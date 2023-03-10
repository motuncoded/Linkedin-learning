import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const Navbar = () => {
    const navLinkStyles =({isActive})=>{
        return{
            fontWeight:isActive ? "bold" :"normal"
        }
    }
    
  return (
    <nav className='navbar'>
       <NavLink  style={navLinkStyles} to="/">Home</NavLink> 
       <NavLink style={navLinkStyles} to="about">About</NavLink>
    </nav>
  )
}

export default Navbar