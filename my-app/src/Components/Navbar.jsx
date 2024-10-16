import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'

const NavBar = () => {
    return(
        <nav>
            <Link to="/">Home</Link>
            <Link to="/AddCard">Add card</Link>
            <Link to="/Settings">Settings</Link>
            

        </nav>
    )
}
export default NavBar