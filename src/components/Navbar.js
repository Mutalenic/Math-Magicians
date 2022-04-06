import React from "react";
import{ Link } from 'react-router-dom';

const Navbar = () => (
    <div>
        <ul>
            <li>
                <Link className="navbar-link" to="/calculator">Math Magicians</Link></li>
            <li>
            <Link className="navbar-link" to="/">Home</Link></li>
            <li>
            <Link className="navbar-link" to="/calculator">Calculator</Link></li>
            <li>
            <Link className="navbar-link" to="/quote">Quote</Link></li>
        </ul>
    </div>
);

export default Navbar;