
import { NavLink, withRouter } from "react-router-dom";
import React, { Fragment } from "react";

const NavBar = (props) => {
  // debugger
  let logout = () => {
    props.setCurrentUser(null)
    localStorage.clear()
  }
  return (



    <div class="ui red inverted massive menu">

       { props.logged ? (

         <Fragment>

      <NavLink className="item" to="/about">About </NavLink>

      <NavLink className="item" to="/items"> All Items </NavLink>

      <div className="right menu">
        <NavLink className="item" to="/sell"> Sell Items </NavLink>
      <NavLink
        className="item"
        to="/cart"
      >
      <i class="cart icon"></i>
        Cart
      </NavLink>
      <NavLink
        className="item"
        to="/login"
        onClick={logout}
      >
        Log out
      </NavLink>
      </div>
    </Fragment>) : (
      <Fragment>
      <NavLink
        className="item"
        to="/about"
      >
        About
      </NavLink>
      <NavLink className="item" to="/items"> All Items </NavLink>
      <div className="right menu">
      <NavLink
        className="item"
        to="/login"
      >
        Log In
      </NavLink>
    </div>
</Fragment>
    )
  }
    </div>



  )
}

export default withRouter(NavBar);
