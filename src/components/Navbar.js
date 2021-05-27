import React from 'react'
import Logo from '../images/logo.svg'
import './Navbar.css';
import {NavLink} from 'react-router-dom';
const Navbar = () => {
    return (
        <>
          <header>
    <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container">
          <NavLink className="navbar-brand" to="/"><img src={Logo} className="inverted" width="80%"  alt="logo"/></NavLink>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active"  aria-current="page"  to="/" exact >Home</NavLink>
              </li>
             
              <li className="nav-item">
                <NavLink className="nav-link" to="/worldinfo" exact >World Info</NavLink>
              </li>
            
            </ul>
            <NavLink to="/cowin" targer="_blank" className=" btn btn-custom inverted" > Vacination</NavLink>
          </div>
        </div>
      </nav>
     
</header>  
        </>
    )
}

export default Navbar
