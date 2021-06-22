import React from 'react';
import { NavLink } from 'react-router-dom';
import "../css-components/navbar.css";
import Logo from "../images/Logo Dark.jpg";

const Navbar = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container">
  <img className="navbar-brand logo" src={Logo} alt="" />
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
 

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto ml-auto">
      <li className="nav-item active">
        <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/about">About us</NavLink>
      </li>
      
      <li className="nav-item">
        <NavLink className="nav-link " to="/service">Services</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link " to="/team">Team</NavLink>
      </li>
      
    </ul>
    </div>
    <form className="form-inline my-2 my-lg-0">
      <button type="submit" className="btn btn-outline-danger my-2 my-sm-0" > Free consulation</button>

    </form>
    
  
  </div>
</nav>
        
        </>
    )
}

export default Navbar;
        
 


