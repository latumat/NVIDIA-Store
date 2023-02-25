import React from "react";
import { Link } from "react-router-dom";

const Nav2 = () => {

    const linkStyle = {
        color: 'black',
        textDecoration: 'none'
    };

    return (
        <nav className="nav2">
            <Link style={linkStyle} to={'/'}><h3>Nvidia</h3></Link>
            <ul className="nav-links">
                <li><Link style={linkStyle} to={'/Shop'}>Shop</Link></li>
                <li>Cart</li>
            </ul>
        </nav>
    )
}

export default Nav2;