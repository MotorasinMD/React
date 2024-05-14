import React from 'react';
import {Link, NavLink} from 'react-router-dom'

function Navbar() {
  return (
    <nav className='mainnav'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/aboutus">About</NavLink>
        <NavLink to="/History">History</NavLink>
    </nav>
  )
}

export default Navbar