import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';

const NavBar = () => (
    <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/explore">Explore</Link>
    </div>
)

export default NavBar;