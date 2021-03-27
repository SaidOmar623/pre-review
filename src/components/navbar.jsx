import React from 'react';
import { NavLink } from 'react-router-dom'

const NavBar = (props) => {
    return ( 
        <nav className="navbar navbar-dark bg-dark">
            <NavLink className="navbar-brand" to="/">
                <img src='/logo192.png' className="mr-2" width="30" height="30" alt="" />
                Mobile Shop
            </NavLink>
        </nav>
    );
}
 
export default NavBar;