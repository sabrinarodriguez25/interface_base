import React from "react";
import { Link } from "react-router-dom";
import '../styles/Navbar.css';


function Navbar  ()  {

    return (
        <nav className="navbar">
            <Link to="/">Inicio</Link> {/*unsamos link para navegar entre paginas sin recargar */}
            <Link to="/main">Principal</Link>
            <Link to="/items"> Lista</Link>

        </nav>
    )
}

export default Navbar;