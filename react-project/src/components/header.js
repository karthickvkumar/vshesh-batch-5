import React from "react";
import {NavLink} from "react-router-dom";

function HeaderComponent(){
  return(
    <div>
      <h1>Header Section</h1>
      <NavLink to="/" className="link">REGISTER Page</NavLink>
      <NavLink to="/home" className="link">HOME Page</NavLink>
      <NavLink to="/about" className="link">ABOUT Page</NavLink>
      <NavLink to="/contact" className="link">CONTACT Page</NavLink>
    </div>
  )
}

export default HeaderComponent;