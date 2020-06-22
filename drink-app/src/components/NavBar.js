import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
    <div>
        <Link to="/home">Home</Link>
        <Link to="/explore">Explore</Link>
    </div>
)

export default NavBar;