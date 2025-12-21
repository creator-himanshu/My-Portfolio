import React from 'react'
import { NavLink } from 'react-router-dom'
import './menu.scss'
import { RiHomeLine } from 'react-icons/ri'
import { BiCube } from 'react-icons/bi'

function Menu() {
  return (
    <>
    <div className='custom-menu'>
        <NavLink to="/" className={({ isActive }) => isActive ? "icon active" : "icon"}>
                <RiHomeLine />
        </NavLink>
        <NavLink to="/skills" className={({ isActive }) => isActive ? "icon active" : "icon"}>
                <BiCube />
        </NavLink>
    </div>
    </>
  )
}

export default Menu
