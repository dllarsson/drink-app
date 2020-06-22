import React from 'react';
import NavBar from '../components/NavBar';

const Home = () => {
    return (
        <div>
            <NavBar />
            <h1>Welcome to The Cocktail Explorer!</h1>
            <img 
                src="https://images.all-free-download.com/images/graphiclarge/cocktail_of_highdefinition_picture_five_166470.jpg" alt="img of cocktails" />
        </div>
    )
}

export default Home;