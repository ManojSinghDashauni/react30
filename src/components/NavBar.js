import React from 'react'
import { Link, NavLink } from 'react-router-dom'


const NavBar = () => {
  return (
    <div className='w-full h-auto flex justify-between bg-slate-200'>
        <NavLink className='hover:bg-gray-500 hover:text-white p-4'  to="/">NavBar</NavLink>
        <div className='w-1/4 flex items-center font-bold uppercase'>
        <NavLink className='hover:bg-gray-500 hover:text-white p-4' to="/home">Home</NavLink>
        <NavLink className='hover:bg-gray-500 hover:text-white p-4' to="/features">Features</NavLink>
        <NavLink className='hover:bg-gray-500 hover:text-white p-4' to="/pricing">Pricing</NavLink>
        </div>
    </div>
  )
}

export default NavBar