import React from 'react';
import NavBar from '../components/NavBar';
import Search from '../components/Search';

const Explore = () => {
    return (
        <div>
            <NavBar />
            <h3>Find your favorite drink!</h3>
            <Search />
        </div>
    )
}

export default Explore;