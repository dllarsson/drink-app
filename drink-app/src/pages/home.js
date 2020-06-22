import React from 'react';
import NavBar from '../components/NavBar';
import '../styles/Home.css';

const Home = () => {
    return (
        <div className="home-content">
            <NavBar />
            <h1>Welcome to The Cocktail Explorer!</h1>
            <img 
                src="https://cdn.discordapp.com/attachments/711173631555797015/724534134935912448/doodle-sketch-cocktails-alcohol-drinks-glass_53562-3210.jpg" alt="img of cocktails" />
        </div>
    )
}

export default Home;