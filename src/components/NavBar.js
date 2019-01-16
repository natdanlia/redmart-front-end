import React from 'react'
import { NavLink } from 'react-router-dom';


const NavBar = (props) => {
  return (



    <div class="ui olive inverted massive menu">


      <NavLink
        className="item"
        to="/about"
      >
        About
      </NavLink>

      <NavLink
        className="item"
        to="/items"
      >
        All Items
      </NavLink>
      <div className="right menu">
      <NavLink
        className="item"
        to="/cart"
      >
        Cart
      </NavLink>

      </div>

    </div>



  )
}

export default NavBar;
