import React from 'react';
import DrinkData from '../data/drinks.json';
import NavBar from '../components/NavBar';
import '../styles/Drink.css';

const Drink = (props) => {
    const name = props.location.hash.replace('#', '');
    const drink = DrinkData.cocktails.filter(item => item.name === name);

 return(
     <div className="drink-content">
        <NavBar />
        <h1>{drink[0].name}</h1>
        <p>{drink[0].preparation}</p>
        <img src={drink[0].image} alt={drink[0].name} />
     </div>
 )
}

export default Drink;