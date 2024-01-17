import React from 'react'
import { NavLink } from 'react-router-dom'
import "./navbar.scss"

const Navbar = () => {
  return (
    <nav>
      <div className='navbar'>
        <div className="text_nav">
          <h1>Selling</h1>
          <h1 className='tocka'>.</h1>
        </div>
        <ul className='switch_nav'>
          <li><NavLink to={"/home"}>Home</NavLink></li>
          <li><NavLink to={"/add"}>Add</NavLink></li>
          <li><NavLink to={"/wishlist"}>Wishlist</NavLink></li>
          <li><NavLink to={"/basket"}>Basket</NavLink></li>
          <li><NavLink to={"/:id"}>Detail</NavLink></li>
          <li><NavLink to={"/search"}>Search</NavLink></li>
        </ul>

      </div>
    </nav>
  )
}

export default Navbar
