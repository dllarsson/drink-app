import React from 'react';
import NavBar from '../components/NavBar';
import Search from '../components/Search';
import '../styles/Explore.css';

const Explore = () => {
    return (
        <div className="explore-content">
            <NavBar />
            <h1>Find your favorite drink!</h1>
            <Search />
        </div>
    )
}

export default Explore;